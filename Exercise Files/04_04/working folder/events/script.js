const dragAndDrop = (function(){
  let myX = '';
  let myY = '';
  let whichArt = '';

  function moveStart(event){
    whichArt = event.target;
    myX = event.offsetX === undefined ? event.layerX : event.offsetX;
    myY = event.offsetY === undefined ? event.layerY : event.offseY;
    whichArt.style.zIndex = 10;
  }

  function moveDrop(event) {
    event.preventDefault();
  }

  const bodyContainer = document.querySelector('body');
  bodyContainer.addEventListener('dragstart', moveStart, false)
  bodyContainer.addEventListener('drop', moveDrop, false)
})();
