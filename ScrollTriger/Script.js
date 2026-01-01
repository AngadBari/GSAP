//Why Scroller Trigeer Called

gsap.from("#page1 #box", {
  scale: 0,
  duration: 2,
  rotate: 360,
  scrollTrigger: {
    trigger: "#page1 #box",
    scroller: "body",
    markers: true,
    scrub: 1,
  },
});

// gsap.from("#page2 #box", {
// scale: 0,
// duration: 2,
// rotate: 360,
// scrollTrigger: {
//     trigger: "#page2 #box",
//     scroller: "body",
//     markers: true,
//     start: "top 60%",
// },
// });

gsap.from("#page2 h1", {
  opacity: 0,
  duration: 2,
  x: 500,
  scrollTrigger: {
    trigger: "#page2 h1",
    scroller: "body",
    markers: true,
    start: "toop 50%",
  },
});

gsap.from("#page2 h2", {
  opacity: 0,
  duration: 2,
  x: -500,
  scrollTrigger: {
    trigger: "#page2 h1",
    scroller: "body",
    markers: true,
    start: "toop 50%",
  },
});
