import gsap from "gsap";

const bars = document.querySelectorAll(".bar");

bars.forEach((bar, i) => {
  gsap.fromTo(
    bar,
    {
      scaleY: 0.3,
    },
    {
      scaleY: 1.5,
      duration: 0.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: i * 0.1,
    },
  );
});
