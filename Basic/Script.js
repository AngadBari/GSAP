gsap.to("#box1", {
  x: 1000,
  duration: 2,
  delay: 1,
  rotate: 360,
  backgroundColor: "blue",
  borderRadius: "50%",
  repeat: -1,
  yoyo: true,
});

gsap.from("#box2", {
  x: 1000,
  duration: 2,
  delay: 1,
  rotate: 360,
  backgroundColor: "blue",
  borderRadius: "50%",
});

gsap.to("#text-con h2", {
  y: -20,
  duration: 0.5,
  stagger: 0.5,
});
gsap.from("#box3", {
  y: 1000,
  duration: 2,
  delay: 1,
  rotate: 360,
  backgroundColor: "pink",
  borderRadius: "50%",
  repeat: -1,
  yoyo: true,
});
