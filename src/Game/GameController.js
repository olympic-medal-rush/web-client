class GameController {
	constructor({ state = {} }) {
		this.state = state;

		this.teams = [];
		this.medals = [];
	}

	addTeam() {}

	addMedal() {}
}

export { GameController };

/* 
This class will create teams and medal from the current game state
	- Medals are the medals on the playground
	- Teams are the active teams

This should implement multiple methods :
	addTeam() => to create a new team if a team joins the game while you're playing
	addMedal() => to create a new medal on the playground


Medals :
	Have a position on the playground
	Have a type

Teams :
	Have a score, incremented when a medal is collected
	Can move in a direction
	Can collect a medal
	Have a position in the playground, updated on move
	
*/
