import gsap from "gsap";

const showToast = () => {
  gsap.to(".toast", {
    y: -100,
    scale: 1,
    opacity: 1,
    duration: 0.8,
    ease: "power4.out",
    onComplete: () => {
      gsap.to(".toast", {
        y: 0,
        scale: 0,
        opacity: 0,
        duration: 0.8,
        ease: "power4.in",
        delay: 2.5,
        onComplete: () => {
          setTimeout(showToast, 2500);
        },
      });
    },
  });
};

showToast();