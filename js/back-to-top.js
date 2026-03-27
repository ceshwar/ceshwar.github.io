(() => {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "back-to-top";
  button.setAttribute("aria-label", "Back to top");
  button.textContent = "Top";

  const showAtY = 260;

  const refreshVisibility = () => {
    if (window.scrollY > showAtY) {
      button.classList.add("is-visible");
      return;
    }
    button.classList.remove("is-visible");
  };

  button.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  document.body.appendChild(button);
  window.addEventListener("scroll", refreshVisibility, { passive: true });
  refreshVisibility();
})();
