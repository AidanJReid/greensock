var tr = gsap.timeline({repeat:6, repeatDelay:1, yoyo:true});
tr.to("h2", {duration: 0.2, className:"+=superShadow", top:"-=10px", ease:"power1.in", stagger: 0.3}, "start")

//animation powered by GSAP JS
//http:www.greensock.com/gsap/
  



/*
special thanks to Daniel Riemer who created the text-shadow style and original pen

https://codepen.io/zitrusfrisch

*/

var tl = gsap.timeline();

tl.from(".head", {duration: 2, opacity: 0, scale: 0.1, ease: "back"});

tl.from(".circle", {duration: 1, opacity: 0, y: "random(-200, 200)", stagger: 0.25});

tl.to("#red", {duration: 1, backgroundColor: "red"});

tl.to("#orange", {duration: 1, backgroundColor: "orange"});

tl.to(".green", {duration: 1, backgroundColor: "green"});

var tween = tl.to(".head", {
  duration: 3,
  y: 200, 
  backgroundColor: "yellow", 
  borderRadius: "20%", 
  border: "1px solid blue", 
  ease: "bounce", 
  rotation: 360
});

document.querySelector("#pause").onclick = () => tween.pause();
document.querySelector("#resume").onclick = () => tween.resume();
document.querySelector("#reverse").onclick = () => tween.reverse();
document.querySelector("#restart").onclick = () => tween.restart();