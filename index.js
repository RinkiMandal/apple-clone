function loco(){
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
}); 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();

}

loco()

// let crsr = document.querySelector(".cursor")
// let main = document.querySelector("#main")
// document.addEventListener("mousemove",function(dets){
//   crsr.style.left = dets.x + 20+"px"
//   crsr.style.top = dets.y + 20+"px"
// })



gsap.to("#page>video",{
    scrollTrigger:{
        trigger:"#page>video",
        start:"1% top",
        end:"bottom top",
        // markers:true,
        scroller:"#main"
    },
    onStart:()=>{
        document.querySelector("#page>video").play()
    }
})
gsap.to("#page",{
  scrollTrigger:{
    trigger:"#page",
    start:"top top",
    end:"bottom top",
    scroller:"#main",
    pin:true
  }
})

gsap.to("#page-bottom",{
  scrollTrigger:{
    trigger:"#page-bottom",
    start:"5% top",
    end:"bottom top",
    scroller:"#main",
  },
  opacity:0
})

let tl = gsap.timeline({
  scrollTrigger:{
    trigger:"#page1",
    start:"top top",
    scrub:1,
    scroller:"#main",
    pin:true
  }
})

tl.to("#page1>h1",{
  top:"-50%",
})
let tl1 = gsap.timeline({
  scrollTrigger:{
    trigger:"#page2",
    start:"top top",
    scrub:1,
    scroller:"#main",
    pin:true
  }
})
tl1.to("#page2>h1",{
  top:"-50%"
})

let tl2 =  gsap.timeline({
  scrollTrigger:{
    trigger:"#page3",
    start:"top top",
    scrub:1,
    scroller:"#main",
    pin:true
  }
})
tl2.to("#page3>h1",{
  top:"-50%"
})

let tl3 = gsap.timeline({
  scrollTrigger:{
    trigger:"#page4",
    start:"top top",
    scrub:1,
    scroller:"#main",
    pin:true
  }
})
tl3.to("#page4>h1",{
  top:"-50%"
})

let tl4 = gsap.timeline({
  scrollTrigger:{
    trigger:"#page5",
    start:"top top",
    scrub:1,
    scroller:"#main",
    pin:true
  }
})
tl4.to("#page5>img",{
  x:30,
  rotate:20,
  scale:2
})

let tl5 = gsap.timeline({
  scrollTrigger:{
    trigger:"#page6",
    start:"top top",
    scrub:2,
    scroller:"#main",
    pin:true
  }
})
tl5.to("#page6 h5,h3",{
  top:"-50%"
})

let tl6 = gsap.timeline({
  scrollTrigger:{
    trigger:"#page8",
    start:"top top",
    scrub:2,
    scroller:"#main",
    pin:true
  }
})
tl6.to("#page8 h1,h6",{
  top:"-50%"
})

let tl7 = gsap.timeline({
  scrollTrigger:{
    trigger:"#page10",
    start:"top top",
    scrub:2,
    scroller:"#main",
    pin:true
  }
})
tl7.to("#page10 h1,h5",{
  top:"-50%"
})




// var imageUrls = [];
// har.log.entries.forEach(function(entry){
//   if(entry.response.content.mimeType.indexOf("image/") !==0) return;
//   imageUrls.push(entry.request.url);
// });
// console.log(imageUrls.join("\n"));


























