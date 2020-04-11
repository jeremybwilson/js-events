var dragndrop = (function() {
  var myX = '';
  var myY = '';
  var whichArt = '';

  function moveStart(e) {
    whichArt = e.target;
    // ternary operation for setting myX and myY values
    myX = e.offsetX === undefined ? e.layerX : e.offsetX;
    myY = e.offsetY === undefined ? e.layerY : e.offsetY;
    whichArt.style.zIndex = 10;
  }

  // listen for the events 'dragstart
  document.querySelector('body').addEventListener('dragstart', moveStart, false);
})();
