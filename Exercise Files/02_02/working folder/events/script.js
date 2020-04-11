const gridElement = document.querySelector('.grid');

gridElement.addEventListener('click', function(event) {
  console.log(event.target);
  if (event.target.tagName === 'IMG') {
    const howMany = this.querySelectorAll('li').length;

    if (howMany > 1) {
      const removeTarget = event.target.parentNode;
      removeTarget.parentNode.removeChild(removeTarget);
    } else {
      const photoTitle = event.target.alt;
      document.querySelector('#art p').innerHTML = `<p>You've picked ${photoTitle}</p>`;
    }  // ends the howMany check
  }   // check to see that we clicked on IMG only
}, false);  // click event
