function startGame() {
    
    let playerName = 'Joao';
    logPlayer(playerName);
    
    // starting a new game
    var messagesElement = document.getElementById('messages');
    messagesElement!.innerText = 'Welcome to MultiMath! Starting new game...';
}

document.getElementById('startGame')!.addEventListener('click', startGame);

function logPlayer(name) {
    console.log(`New game starting for player: ${name}`);
}