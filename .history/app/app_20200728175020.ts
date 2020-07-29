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
  
  let logger: (value: string) => void;

  logger = score < 0 ? logError : logMessage;
  
  const scoreElement: HTMLElement | null = document.getElementById('postedScores');
  scoreElement!.innerText = `${score} - ${playerName}`;

  logger(`Score: ${score}`);
}

document.getElementById('startGame')!.addEventListener('click', startGame);

const logMessage = (message: string) => console.log(message);

function logError(err: string): void {
  console.error(err);
}
