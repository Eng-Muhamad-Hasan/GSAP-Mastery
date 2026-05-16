import gsap from "gsap";

const tabs = document.querySelectorAll(".tab");
const indicator = document.querySelector(".indicator");
const tabRow = document.querySelector(".tab-row");

function updateIndicator(target) {
  const tabBounds = target.getBoundingClientRect();
  const rowBounds = tabRow.getBoundingClientRect();

  const width = tabBounds.width;
  const offset = tabBounds.left - rowBounds.left;

  gsap.to(indicator, {
    x: offset,
    width,
    duration: 0.4,
    ease: "back.out(1.7)",
  });
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((otherTab) => otherTab.classList.remove("active"));
    tab.classList.add("active");
    updateIndicator(tab);
  });
});

updateIndicator(tabs[0]); // set initial active indicator