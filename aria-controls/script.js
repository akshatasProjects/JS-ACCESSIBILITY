// const button = document.querySelector("button");
// const menu = document.getElementById(button.getAttribute("aria-controls"));

// button.addEventListener("click", () => {
//   const expanded = button.getAttribute("aria-expanded") === "true";
//   button.setAttribute("aria-expanded", String(!expanded));
//   menu.hidden = expanded;
// });

const button = document.querySelector("button");
const menu = document.getElementById(button.getAttribute("aria-owns"));

button.addEventListener("click", () => {
  const expanded = button.getAttribute("aria-expanded") === "true";
  button.setAttribute("aria-expanded", String(!expanded));
  menu.hidden = expanded;
});

// Close the menu if user clicks outside
document.addEventListener("click", (e) => {
  if (!button.contains(e.target) && !menu.contains(e.target)) {
    button.setAttribute("aria-expanded", "false");
    menu.hidden = true;
  }
});
