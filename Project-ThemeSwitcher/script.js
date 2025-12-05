/* file: script.js */
const themeButton = document.getElementById("theme-switcher-button");
const themeDropdown = document.getElementById("theme-dropdown");
const themeMessage = document.getElementById("theme-message");

const themes = [
  { name: "theme-ocean", message: "Dive into the calm of the Ocean 🌊" },
  { name: "theme-desert", message: "Feel the warmth of the Desert ☀️" },
  { name: "theme-midnight", message: "Embrace the mystery of Midnight 🌌" },
];

themeButton.addEventListener("click", () => {
  const isExpanded = themeButton.getAttribute("aria-expanded") === "true";
  themeButton.setAttribute("aria-expanded", String(!isExpanded));
  themeDropdown.hidden = isExpanded;
});

themeDropdown.addEventListener("click", (e) => {
  if (e.target && e.target.matches("li[role='menu-item']")) {
    const selectedId = e.target.id; // e.g., "theme-ocean"
    const themeName = selectedId.replace("theme-", ""); // e.g., "ocean"

    // Apply theme class to <body>
    document.body.className = `theme-${themeName}`;

    // Display theme message
    const themeObj = themes.find((t) => t.name === themeName);
    if (themeObj && themeObj.message) {
      themeMessage.textContent = themeObj.message;
    }

    // Close dropdown and update aria-expanded
    themeDropdown.hidden = true;
    themeButton.setAttribute("aria-expanded", "false");
  }
});
