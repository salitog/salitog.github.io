let startY = 0;

let middleText = document.querySelector(".middle-text");

window.addEventListener('touchstart', function(event) {
  startY = event.touches[0].clientY;
});

window.addEventListener('touchmove', function(event) {
  let currentY = event.touches[0].clientY;
  let scrollDirection = (currentY > startY) ? 'down' : 'up';

  console.log('Scrolling direction:', scrollDirection);
  middleText.innerHTML = scrollDirection;

  // Add your custom logic here based on the scroll direction

  event.preventDefault();
});

  
//   // document.body.classList.remove('no-scroll');

let previousScrollPosition = 0;

window.addEventListener('wheel', function(event) {
  // event.preventDefault(); // Prevent default scrolling behavior

  let currentScrollPosition = previousScrollPosition + event.deltaY;
  window.scrollTo(0, 0);
  let scrollDirection = (currentScrollPosition > previousScrollPosition) ? 'down' : 'up';
  middleText.innerHTML = scrollDirection;

  previousScrollPosition = currentScrollPosition;
});
