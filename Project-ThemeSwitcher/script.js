const themeButton = document.getElementById("theme-switcher-button");
const themeDropdown = document.getElementById("theme-dropdown");
const liveRegion = document.getElementById("live-region");

const themes = [
  { name: "light", message: "Light theme activated 🌞" },
  { name: "dark", message: "Dark theme activated 🌙" },
];

themeButton.addEventListener("click", () => {
  const isExpanded = themeButton.getAttribute("aria-expanded") === "true";

  themeButton.setAttribute("aria-expanded", String(!isExpanded));
  themeDropdown.hidden = isExpanded;
});

themeDropdown.addEventListener("click", (e) => {
  if (e.target && e.target.matches('li[role="menuitem"]')) {
    const selectedTheme = e.target.id.replace("theme-", ""); // "light" or "dark"

    // Add theme class to body
    document.body.className = `theme-${selectedTheme}`;

    // Find the theme message from array
    const themeObj = themes.find((t) => t.name === selectedTheme);
    if (themeObj) {
      liveRegion.textContent = themeObj.message;
    }

    // Close dropdown
    themeDropdown.hidden = true;
    themeButton.setAttribute("aria-expanded", "false");
  }
});
