function sbkuchmain(){
  gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});






// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}
sbkuchmain();


var icon=document.querySelector("#leftnav i");
var menudown= document.querySelector("#fullscreennav")
var flag=0;

icon.addEventListener("click",function(){

 if(flag==0){
  menudown.style.top="0%"
  document.querySelector("#nav h4").style.color = "#232025"
  document.querySelector("#nav #leftnav h4").style.color="#232025"
  document.querySelector("#nav #leftnav i").style.color="#232025"
  flag=1
 }
 else{
  menudown.style.top="-100%"
  document.querySelector("#nav h4").style.color = "#D5CDC4"
  document.querySelector("#nav #leftnav h4").style.color="#D5CDC4"
  document.querySelector("#nav #leftnav i").style.color="#D5CDC4"
  flag=0
 }
  
})


gsap.to("#page6 img",{
  rotate:360,
  repeat:-1,
  duration:2,
  ease:Power0.easeNone
})




var t=gsap.timeline()

t.from("#nav",{
  opacity:0,
  duration:.7,
  y:-50
})

.from("#page1 h1",{
  opacity:0,
  duration:.8,
  y:80
})
.from("#page1 h2",{
  opacity:0,
  duration:.8,
  y:50,
  delay:-.5
})
.from("#page1 a",{
  opacity:0,
  duration:.7,
  x:50
})

.to("#page2 img",{
  scale:1.1,
  scrollTrigger:{
    trigger:"#page2 img",
    scroller:"#main",
    markers:false,
    scrub:3,
    start:"top 80%",
    end:"top 4%"
  }
})

.from("#page3 h1",{
  opacity:0,
  duration:.6,
  y:150,
  scrollTrigger:{
    trigger:"#page3",
    scroller:"#main",
    markers:false,
    start:"top 40%",
    end:"top 0%",
    scrub:3
  }
})
.from("#page3 h1 span",{
  opacity:0,
  duration:.1,
  y:150,
  scrollTrigger:{
    trigger:"#page3",
    scroller:"#main",
    markers:false,
    start:"top 40%",
    end:"top 0%",
    scrub:2
  }
})
.from("#page4 h1",{
  x:200,
  opacity:0,
  duration:7,
  scrollTrigger:{
    trigger:"#page4 h1",
    scroller:"#main",
    markers:false,
    scrub:2,
    start:"top 75%",
    end:"top 35%",
  }

})
.from("#page5 #leftside h1",{
  y:200,
  opacity:0,
  duration:.3,
  scrollTrigger:{
    trigger:"#page5 #leftside h1",
    scroller:"#main",
    markers:false,
    scrub:2,
    start:"top 95%",
    end:"top 75%",
  }
})
.from("#page5 #rightside h3",{
  y:200,
  opacity:0,
  duration:.3,
  scrollTrigger:{
    trigger:"#page5 #rightside h3",
    scroller:"#main",
    markers:false,
    scrub:2,
    start:"top 95%",
    end:"top 75%",
  }
})

.from("#page6 #centertxt h1",{
  x:-300,
  opacity:0,
  duration:.5,
  scrollTrigger:{
    trigger:"#page6 #centertxt h1",
    scroller:"#main",
    markers:false,
    scrub:1,
    start:"top 75%",
    end:"top 35%",
  }

})

.from("#page6 #centertxt h4",{
  x:300,
  opacity:0,
  duration:.5,
  scrollTrigger:{
    trigger:"#page6 #centertxt h4",
    scroller:"#main",
    markers:false,
    scrub:2.5,
    start:"top 75%",
    end:"top 35%",
  }

})

.from("#page7 h1",{
  opacity:0,
  duration:.1,
  y:200,
  scrollTrigger:{
    trigger:"#page7",
    scroller:"#main",
    markers:false,
    start:"top 65%",
    end:"top 20%",
    scrub:1,
    
  }
})
.from("#page7 h1 span",{
  opacity:0,
  duration:.1,
  y:400,
  scrollTrigger:{
    trigger:"#page7",
    scroller:"#main",
    markers:false,
    start:"top 65%",
    end:"top 20%",
    scrub:1,
  }
})
.from("#page9 #yesnodiv #yesdiv h1",{
  opacity:0,
  duration:.5,
  y:100,
  scrollTrigger:{
    trigger:"#page9",
    scroller:"#main",
    markers:false,
    scrub:1,
    end:"top 0%",
    start:"top 10%"
  }
})
.from("#page9 #yesnodiv #nodiv h1",{
  opacity:0,
  duration:.5,
  y:100,
  scrollTrigger:{
    trigger:"#page9",
    scroller:"#main",
    scrub:1,
    end:"top 0%",
    start:"top 10%",
    
  }
})


var slide1h1 = document.querySelectorAll("#page8 .slidesmoving1 h1")

slide1h1.forEach(function(elem){
  gsap.to(elem,{
    transform:'translateX(-100%)',
    duration:4,
    scrollTrigger:{
      trigger: "#page8",
      scroller:"#main",
      scrub:0
    }
  })
}) 

var slide2h1 = document.querySelectorAll("#page8 .slidesmoving2 h1")

slide2h1.forEach(function(elem){
  gsap.to(elem,{
    transform:'translateX(0%)',
    duration:4,
    scrollTrigger:{
      trigger: "#page8",
      scroller:"#main",
      scrub:0,
      
    }
  })
}) 

var dec = document.querySelector("#yesdiv img");
dec.addEventListener("mousemove",function(dets){
  dec.style.opacity=0
  dec.style.left = `${dets.x-120}px`
  dec.style.top = `${dets.y-500}px`  
})

dec.addEventListener("mouseleave",function(target){
  dec.style.opacity=0  
})

var deccc = document.querySelector("#nodiv img");
deccc.addEventListener("mousemove",function(dets){
  deccc.style.opacity=0
  deccc.style.left = `${dets.x}px`
  deccc.style.top = `${dets.y-150}px`  
})

deccc.addEventListener("mouseleave",function(){
  deccc.style.opacity=0  
})
