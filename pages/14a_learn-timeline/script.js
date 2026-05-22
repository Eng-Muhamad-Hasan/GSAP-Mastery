import gsap from "gsap";

const card1 = document.querySelector(".card:nth-child(1)");
const card2 = document.querySelector(".card:nth-child(2)");

const animateBox = () => {
  // Create a timeline
  const tl = gsap.timeline();

  // Reset to initial state
  tl.set(card1, { scale: 0.5, opacity: 0 });
  tl.set(card2, { scale: 0.5, opacity: 0 });

  // Animate
  tl.to(card1, {
    scale: 1,
    opacity: 1,
    duration: 0.5,
    ease: "power4.inOut",
  }).to(card2, {
    scale: 1,
    opacity: 1,
    duration: 0.5,
    ease: "back.inOut",
  }); // start right after card1
};
// Initial animation on page load
animateBox();
