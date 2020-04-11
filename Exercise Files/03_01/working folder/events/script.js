const imgPreview = document.querySelector('img.preview');

imgPreview.addEventListener('click', function(event) {
  const lowRes = event.target.src;
  const myOverlay = document.querySelector('.overlay');
  const highRes = document.createElement('img');
  const mySpinner = document.createElement('img');

  myOverlay.style.display = 'block';
  highRes.className = 'bgImg';
  highRes.src = lowRes.substr(0, lowRes.length - 7) + '.jpg';
  myOverlay.appendChild(highRes);

  mySpinner.className = 'spinner';
  mySpinner.src = 'images/spinner.gif';
  myOverlay.appendChild(mySpinner);

  highRes.addEventListener('load', function() {
    mySpinner.parentNode.removeChild(mySpinner);
  })
}, false);
