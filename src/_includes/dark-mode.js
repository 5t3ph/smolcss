// Inspired by:
// @link https://piccalil.li/tutorial/create-a-user-controlled-dark-or-light-mode
// @link https://web.dev/prefers-color-scheme/

const COLOR_MODE = "user-color-scheme";
const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
const darkMode = darkModeMediaQuery.matches;
const modeToggle = document.getElementById("mode-toggle");
const initColorMode = localStorage.getItem(COLOR_MODE);

const applySetting = (passedSetting) => {
  let currentSetting = passedSetting || localStorage.getItem(COLOR_MODE);

  if (currentSetting) {
    document.documentElement.setAttribute(
      "data-user-color-scheme",
      currentSetting
    );
    if (currentSetting === "dark") {
      modeToggle.checked = true;
    } else {
      modeToggle.checked = false;
    }
  } else if (darkMode) {
    document.documentElement.setAttribute("data-user-color-scheme", "dark");
    modeToggle.checked = true;
  }
};

const toggleSetting = () => {
  let currentSetting = localStorage.getItem(COLOR_MODE);

  switch (currentSetting) {
    case null:
      currentSetting = darkMode ? "dark" : "light";
      break;
    case "light":
      currentSetting = "light";
      break;
    case "dark":
      currentSetting = "dark";
      break;
  }

  return currentSetting;
};

modeToggle.addEventListener("change", (event) => {
  if (event.target.checked) {
    localStorage.setItem(COLOR_MODE, "dark");
  } else {
    localStorage.setItem(COLOR_MODE, "light");
  }

  applySetting(toggleSetting());
});

applySetting();

darkModeMediaQuery.addEventListener("change", (e) => {
  if (initColorMode === null) applySetting(e.matches ? "dark" : "light");
});
