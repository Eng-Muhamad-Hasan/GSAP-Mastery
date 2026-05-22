import gsap from "gsap";

const tl = gsap.timeline();

tl.fromTo(
  ".card",
  {
    scale: 0.5,
    y: 25,
    opacity: 0,
  },
  {
    scale: 1,
    y: 0,
    opacity: 1,
    duration: 2,
    stagger: 0.2,
    ease: "sine.inOut",
  },
  "<-=0.5", // Start 0.5 seconds before the previous animation ends
);
