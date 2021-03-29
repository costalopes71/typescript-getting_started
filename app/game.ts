import { getValue } from "./utility";
import { Result } from "./result";
import { Player } from "./player";
import { Scoreboard as ResultPanel } from "./scoreboard";

export class Game {

    private scoreboard: ResultPanel = new ResultPanel();

    constructor(public player: Player, public problemCount: number, public factor: number) { }

    displayGame(): void {

        // create the html for the current game
        let gameForm: string = '';

        for (let index = 1; index <= this.problemCount; index++) {
            gameForm += '<div class="form-group">';
            gameForm += '<label for="answer' + index + '" class="col-sm-2 control-label>">';
            gameForm += String(this.factor)+ ' x ' + index + ' = </label>';
            gameForm += '<div class="col-sm-1"><input type="text" class="form-control" id="answer' + index + '" size="5" /></div>';
            gameForm += '</div>';
        }

        // add the new game to the page
        const gameElement = document.getElementById('game')!;
        gameElement.innerHTML = gameForm;

        //enable the calculate score button
        document.getElementById('calculate')!.removeAttribute('disabled');

    }

    calculateScore(): void {

        let score: number = 0;

        for (let index = 1; index <= this.problemCount; index++) {
            const answer = Number(getValue('answer' + index));

            if (index * this.factor === answer) {
                score++;
            }
        }

        // create a new result object to pass to the scoreboard
        let result: Result = {
            playerName: this.player.name,
            score: score,
            problemCount: this.problemCount,
            factor: this.factor
        }

        // add the result and update the score
        this.scoreboard.addResult(result);
        this.scoreboard.updateScoreboard();

        // disable the calculate score button
        document.getElementById('calculate')!.setAttribute('disabled', 'true');

    }

}
