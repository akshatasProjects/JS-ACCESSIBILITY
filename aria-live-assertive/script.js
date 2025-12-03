document.addEventListener("DOMContentLoaded", () => {
  const warning = document.querySelector(".session-warning");

  setTimeout(() => {
    warning.classList.add("fade-out");
  }, 8000);

  warning.addEventListener("transitionend", () => {
    if (warning.classList.contains("fade-out")) {
      warning.remove();
    }
  });
});
