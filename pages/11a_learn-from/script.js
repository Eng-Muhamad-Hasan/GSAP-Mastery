import gsap from "gsap";

const repeat = document.querySelector(".repeat");

const animation = gsap.from(".card",{
  y:50,
  opacity:0,
  scale:.9,duration:.8,
  ease:"power4.out",
  delay:.5,
  stagger:.2
});

repeat.addEventListener("click",()=>{
  animation.restart();
});
