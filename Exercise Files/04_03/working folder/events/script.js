const dragAndDrop = (function(){
  let myX = '';
  let myY = '';
  let whichArt = '';

  function moveStart(event){
    whichArt = event.target;
  }
  const bodyContainer = document.querySelector('body');
  // listen for the events 'dragstart
  bodyContainer.addEventListener('dragstart', moveStart, false)
})();
