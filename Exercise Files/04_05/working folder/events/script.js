const dragAndDrop = (function(){
  let myX = '';
  let myY = '';
  let whichArt = '';

  function moveStart(event){
    whichArt = event.target;
    // ternary operation for setting myX and myY values
    myX = event.offsetX === undefined ? event.layerX : event.offsetX;
    myY = event.offsetY === undefined ? event.layerY : event.offsetY;
    whichArt.style.zIndex = 10;
  }

  function moveDrop(event) {
    event.preventDefault();
    whichArt.style.left = event.pageX - myX + 'px';
    whichArt.style.top = event.pageY - myY + 'px';
  }

  function moveDragOver(event) {
    event.preventDefault();
  }

  const bodyContainer = document.querySelector('body');
  // listen for the events 'dragstart', 'dragover', and 'drop'
  bodyContainer.addEventListener('dragstart', moveStart, false);
  bodyContainer.addEventListener('dragover', moveDragOver, false);
  bodyContainer.addEventListener('drop', moveDrop, false);

})();
