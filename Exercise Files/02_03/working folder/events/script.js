
const gridElement = document.querySelector('.grid');

// gridElement.addEventListener('click', function(event) {
gridElement.addEventListener('mouseover', function(event) {
  if (event.target.tagName === 'IMG') {

    const myElement = document.createElement('div');
    myElement.className = 'preview';
    event.target.parentNode.appendChild(myElement);

    const myImg = document.createElement('img');
    const imgLoc = event.target.src;
    myImg.src = imgLoc.substr(0, imgLoc.length - 7) + '.jpg';
    myElement.appendChild(myImg);

  } // check to see that I clicked on IMG only
}, false); // click event
