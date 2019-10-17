


let links = document.querySelectorAll(".abt-container a");
let bg = document.querySelector(".bg");
let showClass = "bg-show";

for (let link of links) {
  let img = new Image();
  img.src = link.dataset.bg;

  link.addEventListener("mouseenter", function() {
    bg.style.backgroundImage = `url(${this.dataset.bg})`;
    document.body.classList.add(showClass);
  });

  link.addEventListener("mouseleave", () => {
    document.body.classList.remove(showClass);
  });
}
