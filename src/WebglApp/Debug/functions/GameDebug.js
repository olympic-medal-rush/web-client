import { state } from '@/State';
import flagColors from '@/assets/jsons/flag_colors.json';
import terrainData from '@/assets/jsons/terrain_data.json';
import { GlobalApp } from '@/main';
import { app } from '@webglApp/App';
import { randInt } from 'three/src/math/MathUtils';
import { EVENTS, MEDAL_TYPES } from '@utils/constants';

let i = 0;
let teamList,
	teamMove,
	teamZone = null;
const flagsColorsArr = Object.entries(flagColors);
const terrainSize = terrainData.data.length;

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
		console.log('Spawn Medals', newMedals);
	});

	folder.addSeparator();

	createTeamsDebug(app.debug.urlParams.getString('team') || ' FRA');

	// CREATE AND MOVE TEAM
	state.on(EVENTS.CREATE_TEAM, (iso) => {
		teamList?.dispose();
		teamMove?.dispose();
		teamZone?.dispose();

		createTeamsDebug(iso);
	});

	function createTeamsDebug(iso) {
		const teamsIsos = [...GlobalApp.game.teams.keys()].map((iso) => ({ text: iso, value: iso }));
		teamList = folder.addBlade({ view: 'list', label: 'Team', options: teamsIsos, value: iso });

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
					GlobalApp.game.voteResults({ iso: teamList.value, direction: ev.cell.title, nextVoteId: 0 });
					console.log('Move Team', teamList?.value, ev.cell.title);
				}
			});

		teamZone = folder.addButton({ title: 'Get Zone' }).on('click', () => {
			if (!teamList?.value) return;

			const teamPos = GlobalApp.game.teams.get(teamList.value).position;
			console.log(terrainData.mapping[terrainData.data[teamPos.y][teamPos.x]]);
		});
	}

	return folder;
}

function debug(_instance) {
	if (app.debug.urlParams.has('noServer')) {
		GlobalApp.game.setState({
			userId: 'userId',
			teamsState: {
				FRA: { position: { x: randInt(0, terrainSize), y: randInt(0, terrainSize) }, medals: { 0: 5, 1: 2, 2: 15 } },
				ESP: { position: { x: randInt(0, terrainSize), y: randInt(0, terrainSize) }, medals: { 0: 1, 1: 2, 2: 3 } },
				AFG: { position: { x: randInt(0, terrainSize), y: randInt(0, terrainSize) }, medals: { 0: 50, 1: 4, 2: 12 } },
			},
			medalsInGame: [
				{ id: -4, type: MEDAL_TYPES.bronze, position: { x: randInt(0, terrainSize), y: randInt(0, terrainSize) } },
				{ id: -3, type: MEDAL_TYPES.gold, position: { x: randInt(0, terrainSize), y: randInt(0, terrainSize) } },
				{ id: -2, type: MEDAL_TYPES.gold, position: { x: randInt(0, terrainSize), y: randInt(0, terrainSize) } },
				{ id: -1, type: MEDAL_TYPES.silver, position: { x: randInt(0, terrainSize), y: randInt(0, terrainSize) } },
			],
		});
	}
}

export { createPane, debug };
