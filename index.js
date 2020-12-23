const ul = document.querySelector('ul');
const container = document.querySelector('.container');
const showName = document.createElement('h2');
const players = [];


function names() {
  let inputName = document.getElementById('inputName').value;
  players.push(inputName);
  console.log(players);

  let li = document.createElement('li');
  li.innerText = inputName;
  ul.appendChild(li);
  document.getElementById('inputName').value = '';
}


function nextRound() {
  while (players.length) {
    let player = Math.floor(Math.random() * players.length);
    showName.innerText = players[player];
    showName.style.color = 'red'
    container.appendChild(showName)
    console.log(players[player]);
    players.splice(player, 1);
    console.log(players)
    ul.removeChild(ul.childNodes[player])
    if (showName === player) {
      console.log('func 2')
      container.removeChild(showName)
    }
    break;
  };
};
