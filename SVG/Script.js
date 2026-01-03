var path = `M 10 100 Q 250 100 450 100`;

var FinalPostion = `M 10 100 Q 500 100 990 100`;

var String = document.querySelector("#string");

String.addEventListener("mousemove", function (detil) {
  path = `M 10 100 Q 500 ${detil.y} 990 100`;

  gsap.to("svg path", {
    attr: { d: path },
    duration: 0.3,
    ease: "power3.out",
  });
});

String.addEventListener("mouseleave", function (detil) {
  path = `M 10 100 Q 500 ${detil.y} 990 100`;

  gsap.to("svg path", {
    attr: { d: FinalPostion },
    duration: 0.8,
    ease: "elastic.out(1,0.2",
  });
});
