function startGame() {
  // starting a new game
  let playerName: string | undefined = getInputValue('playername');
  logPlayer(playerName);

  postScore(80, playerName);
}

function logPlayer(name: string = 'MultiMath Player'): void {
  return console.log(`New game starting for player: ${name}`);
}

function getInputValue(elementID: string): string | undefined {
  const inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById(elementID);

  if (inputElement.value === '') {
    return undefined
  }
  return inputElement.value;
}

function postScore(score: number, playerName: string = 'MultiMath Player'): void {
  const scoreElement: HTMLElement | null = document.getElementById('postedScores');
  scoreElement!.innerText = `${score} - ${playerName}`;
}

document.getElementById('startGame')!.addEventListener('click', startGame);

const logMessage = (message: string) => console.log(message);
