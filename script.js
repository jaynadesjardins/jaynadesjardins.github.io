document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded and parsed");

const progressBar = document.getElementById("progress");
const icon = document.getElementById("characterImage");
const healthStatus = document.getElementById("healthStatus");

  // Restore all togglable buttons
  const allButtons = document.querySelectorAll(
    ".selectionInside, .selection2Inside"
  );

  allButtons.forEach((button, index) => {
    const savedState = localStorage.getItem(button.id);
    if (savedState === "on") {
      button.style.backgroundColor = "rgba(0, 0, 0, 1)";
    } else {
      button.style.backgroundColor = "rgba(0, 0, 0, 0)";
    }
  });
});

  let index = 7;
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

  function updateUI() {
    const progress = (index / (health.length - 1)) * 100;
    progressBar.style.width = progress + "%";
    healthStatus.textContent = health[index];

    localStorage.setItem("health", JSON.stringify(health));

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

  window.increaseProgress = function () {
    if (index < health.length - 1) {
      index++;
      progressHue += 15;
      updateUI();
    }
  };

  window.resetProgress = function () {
    if (index > 0) {
      index--;
      progressHue -= 15;
      updateUI();
    }
  };

  window.UpdateButtonStatus = function (d) {
    const current = window.getComputedStyle(d).backgroundColor;

    if (current === "rgba(0, 0, 0, 0)") {
      d.style.backgroundColor = "rgba(0, 0, 0, 1)";
      localStorage.setItem(d.id, "on");
    } else {
      d.style.backgroundColor = "rgba(0, 0, 0, 0)";
      localStorage.setItem(d.id, "off");
    }
  };

  updateUI();
});
