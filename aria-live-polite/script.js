document.addEventListener("DOMContentLoaded", () => {
  const success = document.querySelector(".upload-success");

  setTimeout(() => {
    success.classList.add("visible");
  }, 100);

  setTimeout(() => {
    success.classList.add("fade-out");
  }, 8000);

  success.addEventListener("transitionend", () => {
    if (success.classList.contains("fade-out")) {
      success.remove();
    }
  });
});
