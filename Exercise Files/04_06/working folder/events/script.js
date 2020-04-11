const dragAndDrop = (function(){
  let myX = '';
  let myY = '';
  let whichArt = '';

  function resetZ() {
    const elements = document.querySelectorAll('img');
    for (let i = elements.length - 1; i >= 0; i--) {
      elements[i].style.zIndex = 5;
    }
  }

  function moveStart(event){
    whichArt = event.target;
    // ternary operation for setting myX and myY values
    myX = event.offsetX === undefined ? event.layerX : event.offsetX;
    myY = event.offsetY === undefined ? event.layerY : event.offsetY;
    resetZ();
    whichArt.style.zIndex = 10;
  }

  function moveDragOver(event) {
    event.preventDefault();
  }

  function moveDrop(event) {
    event.preventDefault();
    whichArt.style.left = event.pageX - myX + 'px';
    whichArt.style.top = event.pageY - myY + 'px';
  }

  const bodyContainer = document.querySelector('body');
  // listen for the events 'dragstart', 'dragover', and 'drop'
  bodyContainer.addEventListener('dragstart', moveStart, false);
  bodyContainer.addEventListener('dragover', moveDragOver, false);
  bodyContainer.addEventListener('drop', moveDrop, false);

})();
