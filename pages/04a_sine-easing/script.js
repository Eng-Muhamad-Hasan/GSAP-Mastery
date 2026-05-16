import gsap from "gsap";

const button = document.querySelector(".scroll-to-top");

let isFloating = false;
window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    button.classList.add("show");

    if (!isFloating) {
      gsap.to(button, {
        y: -10,
        repeat: -1,
        yoyo: true,
        duration: 0.5,
        ease: "sine.out",
      });
    }

    isFloating = true;
  } else {
    button.classList.remove("show");
  }
});
button.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

button.addEventListener("mouseenter",()=>{
  gsap.to(button,{
    scale:1.2,
    duration:.5
  })
})
button.addEventListener("mouseleave",()=>{
  gsap.to(button,{
    scale:1,
    duration:.5
  })
})
