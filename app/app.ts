function startGame() {
    
    let playerName: string | undefined = getInputValue('playername');
    postScore(100, playerName);
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
    const scoreElement: HTMLElement | null = document.getElementById('postedScores');
    scoreElement!.innerText = `${score} - ${player}`;
}

document.getElementById('startGame')!.addEventListener('click', startGame);