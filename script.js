const headerBoxes = document.querySelectorAll(".demo-image .img-scroll");
headerBoxes.forEach((box) => {
  box.addEventListener("mouseenter", () => {
    box.style.backgroundPosition = "center bottom";
  });
  box.addEventListener("mouseleave", () => {
    box.style.backgroundPosition = "center top";
  });
});
