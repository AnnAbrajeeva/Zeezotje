import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const tlHeader = gsap.timeline();

tlHeader.from(
  ".header__info",
  {
    x: -100,
    opacity: 0,
    duration: 1.5,
  }
).from(
  ".header__btn",
  {
    opacity: 0,
    duration: 1.5,
  }
)

gsap.from(".menu__img--left", {
  scrollTrigger: {
    trigger: ".menu",
    pin: true,
    start: "top top",
    scrub: true,
  },
  y: 50,
  opacity: 0.8,
  duration: 0.3
});

gsap.from(".menu__img--right", {
  scrollTrigger: {
    trigger: ".menu",
    start: "top top",
    scrub: true,
  },
  y: -50,
  opacity: 0.8,
  duration: 0.1
});

gsap.from(".advantages__item--left", {
  scrollTrigger: {
    trigger: ".advantages",
    start: "-50% -50%",
    end: "center",
    scrub: 0.5,
  },
  stagger: 0.5,
  duration: 0.3,
  opacity: 0,
  xPercent: 100,
  transformOrigin: "top center",
});

gsap.from(".advantages__item--right", {
  scrollTrigger: {
    trigger: ".advantages",
    start: "-50% -50%",
    end: "center",
    scrub: 0.5,
  },
  stagger: 0.5,
  duration: 0.3,
  opacity: 0,
  xPercent: -100,
  transformOrigin: "top center",
});
