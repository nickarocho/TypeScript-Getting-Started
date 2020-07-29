function startGame() {
  // starting a new game
  let playerName: string = 'Nick';
  logPlayer(playerName);

  let messagesElement = document.getElementById('messages');
  messagesElement!.innerText = 'Welcome to MultiMath! Starting new game...';
}

function logPlayer(name: string): void {
  return console.log(`New game starting for player: ${name}`);
}

function getInputValue(elementID: string): string | undefined {
  const inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById()
}

document.getElementById('startGame')!.addEventListener('click', startGame);
