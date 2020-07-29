function startGame() {
  // starting a new game
  var messagesElement = document.getElementById('messages');
  messagesElement!.innerText = 'Welcome to MultiMath! Starting new game...';
}

function logPlayer(name) {
  console.log(``)
}

document.getElementById('startGame')!.addEventListener('click', startGame);
