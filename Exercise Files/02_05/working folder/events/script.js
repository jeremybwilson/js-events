
const gridElement = document.querySelector('.grid');

gridElement.addEventListener('mouseover', function(event) {

  event.preventDefault();
  if (event.target.tagName === 'IMG') {

    const myElement = document.createElement('div');
    myElement.className = 'preview';
    event.target.parentNode.appendChild(myElement);

    const myImg = document.createElement('img');
    const imgLoc = event.target.src;
    myImg.src = imgLoc.substr(0, imgLoc.length-7) + '.jpg';

    myElement.style.left = event.offsetX + 15 + 'px';
    myElement.style.top = event.offsetY + 15 + 'px';

    myElement.appendChild(myImg);

    event.target.addEventListener('mouseout', function handler(d) {
      const myNode = d.target.parentNode.querySelector('div.preview');
      myNode.parentNode.removeChild(myNode);
      event.target.removeEventListener('mouseout', handler, false);
    }, false);

    event.target.addEventListener('mousemove', function(f) {
      myElement.style.left = f.offsetX + 15 + 'px';
      myElement.style.top = f.offsetY + 15 + 'px';
    });

  } // check to see that I clicked on IMG only
}, false); // click event
