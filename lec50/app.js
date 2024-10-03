const image = document.querySelector("img");
function imageToggler() {
  let isTrue = false;
  setInterval(() => {
    if (isTrue) {
      image.setAttribute(
        "src",
        "bg.jpg"
      );
    } else {
      image.setAttribute(
        "src",
        "bg1.jpg"
      );
    }
    isTrue = !isTrue;
  }, 1000);
}
imageToggler();