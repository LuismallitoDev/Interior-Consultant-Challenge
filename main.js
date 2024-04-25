const buttons = document.querySelectorAll(".nav-link");
buttons.forEach((button) => {
  let state = true;
  button.addEventListener("click", () => {
    console.log(state);
    if (state) {
      buttons.forEach((btn) => {
        btn.classList.remove("selected");
      });
      if (!button.classList.contains("selected")) {
        button.classList.add("selected");
        state = true;
      }
    }
  });
});

/* Close nav */
const buttonCloseNav = document.getElementById("close-nav");
const buttonOpenNav = document.getElementById("bars");

buttonCloseNav.addEventListener("click", () => {
  document.getElementById("burger-nav").style.display = "none";
});

buttonOpenNav.addEventListener("click", () => {
  document.getElementById("burger-nav").style.display = "flex";
});
