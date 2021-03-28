/// <reference path="player.ts" />


function startGame() {
    
    let playerName: string | undefined = getInputValue('playername');
    postScore(80, playerName);
    postScore(-5, playerName);
    logPlayer(playerName);
    
}

function logPlayer(name: string = 'MultiMath Player') : void {
    console.log(`New game starting for player: ${name}`);
}

function getInputValue(elementId: string) : string | undefined {

    const inputElement = <HTMLInputElement>document.getElementById(elementId);

    if (inputElement.value === '') {
        return undefined;
    } else {
        return inputElement.value;
    }

}

function postScore(score: number, player: string = 'MultiMath Player') : void {
    
    let logger: (value: string) => void;

    if (score < 0) {
        logger = logError;
    } else {
        logger = logMessage;
    }
    
    const scoreElement: HTMLElement | null = document.getElementById('postedScores');
    scoreElement!.innerText = `${score} - ${player}`;

    logger(`Score: ${score}`);
}

document.getElementById('startGame')!.addEventListener('click', startGame);

const logMessage = (message: string) => console.log(message);

function logError(err: string): void {
    console.error(err);
}

// let myResult: Result = {
//     playerName: 'Marie',
//     score: 5,
//     problemCount: 5,
//     factor: 7
// }

// let player: Person = {
//     name: "Daniel",
//     formatName: () => "Dan"
// }

let firstPlayer: Player = new Player();
firstPlayer.name = 'Lanier';
console.log(firstPlayer.formatName());