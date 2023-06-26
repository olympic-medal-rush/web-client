import { app } from '@/App';
import { state } from '@/State';
import flagColors from '@/assets/jsons/flag_colors.json';
import terrainData from '@/assets/jsons/terrain_data.json';
import MojiData from '@jsons/reactmoji.json';
import { randInt } from 'three/src/math/MathUtils';
import { DIRECTIONS, EVENTS, MEDAL_TYPES } from '@utils/constants';

/** THIS FILE OVERRIDES SERVER EVENTS
 * Nothing passes throught the ServerController */

let i = 0;
let teamList,
	teamMove,
	teamZone,
	reactMoji = null;
let lastIso = null;
const flagsColorsArr = Object.entries(flagColors);
const terrainSize = terrainData.data.length - 1;

/**
 *
 * @param {*} pane
 * @param {import("@Webgl/WebglController").WebglController} instance
 * @param {*} name
 * @returns
 */
function createPane(pane, instance, name) {
	const folder = pane.addFolder({ title: name, expanded: true });

	// CREATE_TEAM
	folder.addButton({ title: 'Create Team' }).on('click', () => {
		const randomIndex = Math.round(Math.random() * (flagsColorsArr.length - 1));
		const team = flagsColorsArr[randomIndex];
		app.game.createTeam({ iso: team[0], position: { x: randInt(0, terrainSize), y: randInt(0, terrainSize) } });
		console.log('Create Team', team[0]);
	});

	// SPAWN_MEDALS
	folder.addButton({ title: 'Spawn Medals' }).on('click', () => {
		const newMedals = [
			{ id: (i++).toString(), type: 0, position: { x: randInt(0, terrainSize), y: randInt(0, terrainSize) } },
			{ id: (i++).toString(), type: 1, position: { x: randInt(0, terrainSize), y: randInt(0, terrainSize) } },
			{ id: (i++).toString(), type: 2, position: { x: randInt(0, terrainSize), y: randInt(0, terrainSize) } },
		];
		app.game.addMedals({ medals: newMedals });
		// console.log('Spawn Medals', newMedals);
	});

	folder.addButton({ title: 'Collect Medal' }).on('click', () => {
		const randomMedal = [...app.game.medals.values()];
		if (randomMedal.length > 0) {
			const medalCollect = {
				iso: lastIso,
				medal_id: randomMedal[Math.floor(Math.random() * randomMedal.length)].id,
			};
			app.game.medalCollect(medalCollect);
		} else {
			console.log('There are no more medals');
		}
	});

	folder.addSeparator();

	// CREATE AND MOVE TEAM
	state.on(EVENTS.CREATE_TEAM, () => createTeamsDebug());
	state.on(EVENTS.STATE_READY, () => createTeamsDebug());

	const debugTeam = app.debug.urlParams.getString('team') || 'FRA';
	lastIso = debugTeam;
	// if (debugTeam) createTeamsDebug();

	function createTeamsDebug() {
		teamList?.dispose();
		teamMove?.dispose();
		teamZone?.dispose();
		reactMoji?.dispose();

		const teamsIsos = [...app.game.teams.keys()].map((iso) => ({ text: iso, value: iso }));
		teamList = folder.addBlade({ view: 'list', label: 'Team', options: teamsIsos, value: lastIso }).on('change', (ev) => {
			app.webgl.camera.playerPosition = app.webgl.scene.teamsWrapper.positions.get(app.game.teams.get(ev.value));
			app.webgl.camera.focusPlayer = true;
			lastIso = ev.value;
		});

		teamMove = folder
			.addBlade({
				view: 'buttongrid',
				size: [3, 3],
				cells: (x, y) => ({
					title: [
						['-', 'UP', '-'],
						['LEFT', '-', 'RIGHT'],
						['-', 'DOWN', '-'],
					][y][x],
				}),
				label: 'Move Team',
			})
			.on('click', (ev) => {
				if (teamList && ev.cell.title !== '-') {
					app.game.voteResults({ iso: teamList.value, direction: DIRECTIONS[ev.cell.title.toLowerCase()], next_vote_id: 0 });
					// console.log('Move Team', teamList?.value, ev.cell.title);
				}
			});

		teamZone = folder.addButton({ title: 'Get Zone' }).on('click', () => {
			if (!teamList?.value) return;

			const teamPos = app.game.teams.get(teamList.value).position;
			console.log(terrainData.mapping[terrainData.data[teamPos.y][teamPos.x]], teamPos.x, teamPos.y);
		});

		reactMoji = folder.addButton({ title: 'ReactMoji' }).on('click', () => {
			state.emit(EVENTS.REACT_MOJI, app.game.teams.get(teamList.value).iso, Math.floor(Math.random() * MojiData.frames.length));
		});
	}

	return folder;
}

function debug(_instance) {
	if (app.debug.urlParams.has('noServer')) {
		state.on(EVENTS.KEY_DOWN, (key) => {
			switch (key) {
				case 'ArrowUp':
					app.game.voteResults({ iso: lastIso, direction: DIRECTIONS.up, next_vote_id: 0 });
					break;
				case 'ArrowDown':
					app.game.voteResults({ iso: lastIso, direction: DIRECTIONS.down, next_vote_id: 0 });
					break;
				case 'ArrowLeft':
					app.game.voteResults({ iso: lastIso, direction: DIRECTIONS.left, next_vote_id: 0 });
					break;
				case 'ArrowRight':
					app.game.voteResults({ iso: lastIso, direction: DIRECTIONS.right, next_vote_id: 0 });
					break;
				default:
					break;
			}
		});

		const obstacleFlorData = JSON.parse(JSON.stringify(terrainData.data));
		obstacleFlorData.forEach((row, i) => {
			row.forEach((col, j) => {
				col === 0 ? (obstacleFlorData[i][j] = 1) : (obstacleFlorData[i][j] = 0);
			});
		});

		const getRandomTerrainCell = () => {
			let cell, x, y;
			do {
				x = randInt(0, terrainSize);
				y = randInt(0, terrainSize);

				cell = obstacleFlorData[y][x];
			} while (cell === 0);

			return { x, y };
		};

		app.game.setState({
			user_id: 'userId',
			countries_states: {
				BZH: { iso: 'BZH', position: { ...getRandomTerrainCell() }, medals: { 0: 42, 1: 2, 2: 15 }, boosts: [] },
				ESP: { iso: 'ESP', position: { ...getRandomTerrainCell() }, medals: { 0: 1, 1: 2, 2: 3 }, boosts: [] },
				FRA: { iso: 'FRA', position: { ...getRandomTerrainCell() }, medals: { 0: 7, 1: 4, 2: 12 }, boosts: [] },
				DEU: { iso: 'DEU', position: { ...getRandomTerrainCell() }, medals: { 0: 10, 1: 2, 2: 5 }, boosts: [] },
				ITA: { iso: 'ITA', position: { ...getRandomTerrainCell() }, medals: { 0: 9, 1: 0, 2: 7 }, boosts: [] },
				USA: { iso: 'USA', position: { ...getRandomTerrainCell() }, medals: { 0: 12, 1: 4, 2: 3 }, boosts: [] },
				BRA: { iso: 'BRA', position: { ...getRandomTerrainCell() }, medals: { 0: 12, 1: 4, 2: 3 }, boosts: [] },
			},
			medals: [
				{ id: (-7).toString(), type: MEDAL_TYPES.bronze, position: { ...getRandomTerrainCell() } },
				{ id: (-6).toString(), type: MEDAL_TYPES.bronze, position: { ...getRandomTerrainCell() } },
				{ id: (-5).toString(), type: MEDAL_TYPES.bronze, position: { ...getRandomTerrainCell() } },
				{ id: (-4).toString(), type: MEDAL_TYPES.bronze, position: { ...getRandomTerrainCell() } },
				{ id: (-3).toString(), type: MEDAL_TYPES.gold, position: { ...getRandomTerrainCell() } },
				{ id: (-2).toString(), type: MEDAL_TYPES.gold, position: { ...getRandomTerrainCell() } },
				{ id: (-1).toString(), type: MEDAL_TYPES.silver, position: { ...getRandomTerrainCell() } },
			],
		});

		const debugTeam = app.debug.urlParams.getString('team') || 'FRA';

		app.game.userJoin({
			iso: debugTeam,
			vote_id: 1,
			vote_progress: 0.5,
			votes: {
				down: 25,
				left: 25,
				right: 25,
				up: 25,
			},
			player_count: 10,
		});
	}
}

export { createPane, debug };
