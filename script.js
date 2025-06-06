document.addEventListener("DOMContentLoaded", () => {
  // Restore button toggles
  const allButtons = document.querySelectorAll(".selectionInside, .selection2Inside");
  allButtons.forEach((button) => {
    const savedState = localStorage.getItem(button.id);
    button.style.backgroundColor = savedState === "on" ? "rgba(0, 0, 0, 1)" : "rgba(0, 0, 0, 0)";
  });

  // Restore health index & progressHue from localStorage, or default if none saved
  index = parseInt(localStorage.getItem("healthIndex"), 10);
  if (isNaN(index) || index < 0 || index >= health.length) {
    index = 7; // default index value (Healthy)
  }

  // Restore progressHue accordingly (optional)
  // Assuming initial progressHue = 110 + (index difference)*15
  progressHue = 110 + (index - 7) * 15;

  updateUI();
});

const progressBar = document.getElementById("progress");
const icon = document.getElementById("characterImage");
const healthStatus = document.getElementById("healthStatus");
let currentProgress = 0;
let progressHue = 110;
const health = [
  "Incapacitated",
  "Crippled",
  "Mauled",
  "Wounded",
  "Injured",
  "Hurt",
  "Bruised",
  "Healthy"
];

let index = parseInt(localStorage.getItem("healthIndex"), 10);
if (isNaN(index) || index < 0 || index >= health.length) {
  index = 7;  // default index (Healthy)
}

const stringifiedHealth = JSON.stringify(health);

function updateUI() {
  const progress = (index / (health.length - 1)) * 100;
  progressBar.style.width = progress + "%";
  healthStatus.textContent = health[index];

  localStorage.setItem("healthIndex", index);

  progressBar.style.backgroundColor = `hsl(${progressHue}, 38%, 46%)`;
  healthStatus.style.color = `hsl(${progressHue}, 45%, 18%)`;

  if (progress < 10) {
    icon.src = "https://jaynadesjardins.github.io/download20250501185417.png";
  } else if (progress < 50) {
    icon.src = "https://jaynadesjardins.github.io/download20250501185504.png";
  } else if (progress < 90) {
    icon.src = "https://jaynadesjardins.github.io/download20250501185257.png";
  } else {
    icon.src = "https://jaynadesjardins.github.io/download20250501184912.png";
  }
}


function increaseProgress() {
  if (index < health.length - 1) {
    index++;
    progressHue = progressHue + 15;
    updateUI();
  }
}

function resetProgress() {
  if (index > 0) {
    index--;
    progressHue = progressHue - 15;
    updateUI();
  }
}

updateUI();

function UpdateButtonStatus(d) {
  const current = window.getComputedStyle(d).backgroundColor;

  if (current === "rgba(0, 0, 0, 0)") {
    d.style.backgroundColor = "rgba(0, 0, 0, 1)";
    localStorage.setItem(d.id, "on");
  } else {
    d.style.backgroundColor = "rgba(0, 0, 0, 0)";
    localStorage.setItem(d.id, "off");
  }
};
