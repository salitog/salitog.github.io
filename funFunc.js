window.onscroll = function() {
    let currentScroll = window.pageYOffset;
    let middleText = document.querySelector('.middle-text');
  
    if (currentScroll > 0) {
      middleText.innerHTML = "Check out";
    } else {
      middleText.innerHTML = "Hola :)";
    }
  };