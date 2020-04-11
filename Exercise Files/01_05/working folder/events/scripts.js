const gridElement = document.getElementById('grid');

gridElement.addEventListener('click', function(e) {
  console.log("Clicked inside the UL");
}, true);

const pinkElement = document.getElementById('pink');

pinkElement.addEventListener('click', function(e) {
  console.log(e.toElement.alt);
}, true);
