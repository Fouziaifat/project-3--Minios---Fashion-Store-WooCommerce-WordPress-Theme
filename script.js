let myBtn = document.getElementById("myBtn");

// When the user scrolls down 300px from the top of the document, show the button
window.onscroll = function () {
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    myBtn.classList.add("show");
  } else {
    myBtn.classList.remove("show");
  }
};

const headerBoxes = document.querySelectorAll(".demo-image .img-scroll");
headerBoxes.forEach((box) => {
  box.addEventListener("mouseenter", () => {
    box.style.backgroundPosition = "center bottom";
  });
  box.addEventListener("mouseleave", () => {
    box.style.backgroundPosition = "center top";
  });
});
