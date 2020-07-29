function startGame() {
  // starting a new game
  let playerName: string = 'Nick';
  logPlayer(playerName);

  let messagesElement: HTMLElement | string;

  messagesElement = document.getElementById('messages');
  messagesElement!.innerText = 'Welcome to MultiMath! Starting new game...';
}

function logPlayer(name) {
  console.log(`New game starting for player: ${name}`);
}

document.getElementById('startGame')!.addEventListener('click', startGame);
