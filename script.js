//٠࣪⭑꩜.ᐟ

var fade = document.getElementById("dog");
var gone = document.getElementById("dog");
var fade1 = document.getElementById("fade1");
var fade2 = document.getElementById("fade2");
var fade3 = document.getElementById("fade3");

document.getElementById("button").onclick = function () {
  fade.classList.toggle("fade");
  setTimeout(() => {
    gone.classList.toggle("gone");
  }, 500);
  setTimeout(() => {
    fade1.classList.toggle("fade");
  }, 1000);
  setTimeout(() => {
    fade2.classList.toggle("fade");
  }, 2500);
  setTimeout(() => {
    fade3.classList.toggle("fade");
  }, 4000);
};

var audio1 = new Audio(
  "https://vgmsite.com/soundtracks/tomodachi-life-3ds/wvuuuxgvsm/010.%20Mii%20Apartments%20%28Inside%20Apartment%29.mp3"
);
var audio2 = new Audio(
  "https://vgmsite.com/soundtracks/tomodachi-life-3ds/nzrxmogmii/004.%20Map%20%28Day%29.mp3"
);
var audio3 = new Audio(
  "https://vgmsite.com/soundtracks/tomodachi-life-3ds/qlarwegazq/005.%20Map%20%28Night%29.mp3"
);

const record1 = document.getElementById("record1");

function record1On() {
  var on = document.getElementById("record1");
  on.className += " recordSpin";
  record1.style.animationPlayState = "running";
  audio1.loop = true;
  audio1.play();
}

function record2On() {
  var on = document.getElementById("record2");
  on.className += " recordSpin";
  record2.style.animationPlayState = "running";
  audio2.loop = true;
  audio2.play();
}

function record3On() {
  var on = document.getElementById("record3");
  on.className += " recordSpin";
  record3.style.animationPlayState = "running";
  audio3.loop = true;
  audio3.play();
}

function recordOff() {
  record1.style.animationPlayState = "paused";
  record2.style.animationPlayState = "paused";
  record3.style.animationPlayState = "paused";
  audio1.pause();
  audio2.pause();
  audio3.pause();
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
  record1.style.animationPlayState = "paused";
  record2.style.animationPlayState = "paused";
  record3.style.animationPlayState = "paused";
  audio1.pause();
  audio2.pause();
  audio3.pause();
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("recordPlayer");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
