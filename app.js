gsap.from(".head", {duration: 2, opacity: 0, scale: 0.1, ease: "back"});

gsap.from(".circle", {duration: 1, opacity: 0, y: "random(-200, 200)", stagger: 0.25});

gsap.to("#purple", {duration: 2, backgroundColor: "purple"});

gsap.to("#blue", {duration: 2, backgroundColor: "blue"});

var tween = gsap.to(".head", {
  duration: 5, 
  y: 200, 
  backgroundColor: "yellow", 
  borderRadius: "20%", 
  border: "2px solid blue", 
  ease: "bounce", 
  rotation: 360
});

document.querySelector("#pause").onclick = () => tween.pause();
document.querySelector("#resume").onclick = () => tween.resume();
document.querySelector("#reverse").onclick = () => tween.reverse();
document.querySelector("#restart").onclick = () => tween.restart();