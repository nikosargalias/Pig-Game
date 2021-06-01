const _activePlayer = new Map();

function getActivePlayer() {
  return _activePlayer.get("activePlayer");
}

function setActivePLayer(num) {
  _activePlayer.set("activePlayer", num);
}

setActivePLayer(0);

export { getActivePlayer, setActivePLayer };
