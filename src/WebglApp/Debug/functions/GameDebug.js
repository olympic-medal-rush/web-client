import { state } from '@/State.js';
import flagColors from '@/assets/jsons/flag_colors.json';
import terrainData from '@/assets/jsons/terrain_data.json';
import { GlobalApp } from '@/main.js';
import { app } from '@webglApp/App.js';
import { randInt } from 'three/src/math/MathUtils';
import { DIRECTIONS, EVENTS, MEDAL_TYPES } from '@utils/constants.js';

/** THIS FILE OVERRIDES SERVER EVENTS
 * Nothing passes throught the ServerController */

let i = 0;
let teamList,
	teamMove,
	teamZone = null;
let lastIso = null;
const flagsColorsArr = Object.entries(flagColors);
const terrainSize = terrainData.data.length - 1;

/**
 *
 * @param {*} pane
 * @param {import("@webglApp/Webgl/WebglController").WebglController} instance
 * @param {*} name
 * @returns
 */
function createPane(pane, instance, name) {
	const folder = pane.addFolder({ title: name, expanded: true });

	// CREATE_TEAM
	folder.addButton({ title: 'Create Team' }).on('click', () => {
		const randomIndex = Math.round(Math.random() * (flagsColorsArr.length - 1));
		const team = flagsColorsArr[randomIndex];
		GlobalApp.game.createTeam({ iso: team[0], position: { x: randInt(0, terrainSize), y: randInt(0, terrainSize) } });
		console.log('Create Team', team[0]);
	});

	// SPAWN_MEDALS
	folder.addButton({ title: 'Spawn Medals' }).on('click', () => {
		const newMedals = [
			{ id: i++, type: 0, position: { x: randInt(0, terrainSize), y: randInt(0, terrainSize) } },
			{ id: i++, type: 1, position: { x: randInt(0, terrainSize), y: randInt(0, terrainSize) } },
			{ id: i++, type: 2, position: { x: randInt(0, terrainSize), y: randInt(0, terrainSize) } },
		];
		GlobalApp.game.addMedals({ medals: newMedals });
		// console.log('Spawn Medals', newMedals);
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

		const teamsIsos = [...GlobalApp.game.teams.keys()].map((iso) => ({ text: iso, value: iso }));
		teamList = folder.addBlade({ view: 'list', label: 'Team', options: teamsIsos, value: lastIso }).on('change', (ev) => {
			app.webgl.camera.playerFocus = app.webgl.players.get(ev.value);
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
					GlobalApp.game.voteResults({ iso: teamList.value, direction: DIRECTIONS[ev.cell.title.toLowerCase()], nextVoteId: 0 });
					// console.log('Move Team', teamList?.value, ev.cell.title);
				}
			});

		teamZone = folder.addButton({ title: 'Get Zone' }).on('click', () => {
			if (!teamList?.value) return;

			const teamPos = GlobalApp.game.teams.get(teamList.value).position;
			console.log(terrainData.mapping[terrainData.data[teamPos.y][teamPos.x]], teamPos.x, teamPos.y);
		});
	}

	return folder;
}

function debug(_instance) {
	if (app.debug.urlParams.has('noServer')) {
		state.on(EVENTS.KEY_DOWN, (key) => {
			switch (key) {
				case 'ArrowUp':
					app.webgl.camera.playerFocus.positionOnGrid.y--;
					break;
				case 'ArrowDown':
					app.webgl.camera.playerFocus.positionOnGrid.y++;
					break;
				case 'ArrowLeft':
					app.webgl.camera.playerFocus.positionOnGrid.x--;
					break;
				case 'ArrowRight':
					app.webgl.camera.playerFocus.positionOnGrid.x++;
					break;
				default:
					break;
			}
		});

		GlobalApp.game.setState({
			userId: 'userId',
			teamsState: {
				FRA: { iso: 'FRA', position: { x: randInt(0, terrainSize), y: randInt(0, terrainSize) }, medals: { 0: 5, 1: 2, 2: 15 } },
				ESP: { iso: 'ESP', position: { x: randInt(0, terrainSize), y: randInt(0, terrainSize) }, medals: { 0: 1, 1: 2, 2: 3 } },
				AFG: { iso: 'AFG', position: { x: randInt(0, terrainSize), y: randInt(0, terrainSize) }, medals: { 0: 50, 1: 4, 2: 12 } },
			},
			medalsInGame: [
				{ id: -4, type: MEDAL_TYPES.bronze, position: { x: randInt(0, terrainSize), y: randInt(0, terrainSize) } },
				{ id: -3, type: MEDAL_TYPES.gold, position: { x: randInt(0, terrainSize), y: randInt(0, terrainSize) } },
				{ id: -2, type: MEDAL_TYPES.gold, position: { x: randInt(0, terrainSize), y: randInt(0, terrainSize) } },
				{ id: -1, type: MEDAL_TYPES.silver, position: { x: randInt(0, terrainSize), y: randInt(0, terrainSize) } },
			],
		});

		const debugTeam = app.debug.urlParams.getString('team') || 'FRA';

		GlobalApp.game.userJoin({
			iso: debugTeam,
			voteId: 1,
			voteProgress: 0.5,
			votes: {
				down: 25,
				left: 25,
				right: 25,
				up: 25,
			},
		});
	}
}

export { createPane, debug };
