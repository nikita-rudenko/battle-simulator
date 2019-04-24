export class Battle {
	armies = [];

	constructor(armies) {
		this.armies = armies;
	}

	start() {
		console.log(this.armies);
	}
}
