const buttons = document.querySelectorAll(".nav-link");
buttons.forEach((button) => {
  let state = true;
  button.addEventListener("click", () => {
    console.log(state)
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
