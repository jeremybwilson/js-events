
const gridElement = document.querySelector('.grid');

gridElement.addEventListener('mouseover', function(e) {
  if (e.target.tagName === 'IMG') {

    const myElement = document.createElement('div');
    myElement.className = 'preview';
    event.target.parentNode.appendChild(myElement);

    const myImg = document.createElement('img');
    const imgLoc = event.target.src;
    myImg.src = imgLoc.substr(0, imgLoc.length-7) + '.jpg';
    myElement.appendChild(myImg);

    event.target.addEventListener('mouseout', function handler(d) {
      const myNode = d.target.parentNode.querySelector('div.preview');
      myNode.parentNode.removeChild(myNode);
      event.target.removeEventListener('mouseout', handler, false);
    }, false);

  } // check to see that I clicked on IMG only
}, false); // click event
