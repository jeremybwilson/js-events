const gridElement = document.getElementById('grid');

gridElement.addEventListener('click', function(event) {
  event.preventDefault();
  console.log("Clicked inside the UL");
}, false);

const pinkElement = document.getElementById('pink');

pinkElement.addEventListener('click', function(event) {
  event.preventDefault();
  console.log(event.toElement.alt);
  event.stopPropagation();
}, false);
