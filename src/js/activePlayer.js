const _activePlayer = new Map();

function getActivePlayer() {
  return _activePlayer.get("activePlayer");
}

function setActivePlayer(num) {
  _activePlayer.set("activePlayer", num);
}

setActivePlayer(0);

export { getActivePlayer, setActivePlayer };
