const gridElement = document.querySelector('.grid');

gridElement.addEventListener('click', function(event) {
  console.log(event);
  var removeTarget = event.target.parentNode;
  removeTarget.parentNode.removeChild(removeTarget);
}, false);
