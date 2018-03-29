// Calculating the height of the header and adding padding to sections
let s = document.querySelector("section"),
    h = document.querySelector("header"),
    hHeight;

function setTopPadding() {
  hHeight = h.offsetHeight; // Retrieve the header's height
  s.style.paddingTop = hHeight + "px";
}

function onScroll() {
  window.addEventListener("scroll", callbackFunc);
  function callbackFunc() {
    let y = window.pageYOffset; // Calculate the num of pixels
    if (y > 150) {
      h.classList.add("scroll");
    } else {
      h.classList.remove("scroll");
    }
  }
}

window.onload = function() {
  setTopPadding();
  onScroll();
};

window.onresize = function() {
  setTopPadding();
};