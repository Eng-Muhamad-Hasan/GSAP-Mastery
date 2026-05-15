import gsap from "gsap";

gsap.to(".card", {
  opacity: 1,
  scale: 1,
  duration: 5,
  onComplete: () => {
    gsap.to(".card", {
      y: -25,
      repeat: -1,
      yoyo: true,
      duration: 0.5,
    });
  },
});
