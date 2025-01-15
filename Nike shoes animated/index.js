var t = gsap.timeline();

gsap.set(".a",{opacity:0,y:50})
gsap.set("#right>img",{opacity:0,y:35, scale:1.6})

t

.from("#left",{
   width:0,
   duration:1.5,
   ease: Expo.easeInOut
})
.from("#right",{
  width:0,
  duration:1.5,
  ease: Expo.easeInOut
})

.to(".a",{
  opacity:1,
  y:0,
  stagger:.1,
  duration:2,
  ease: Expo.easeInOut,
  delay:-1.6
})


.to("#right>img",{
  opacity:1,
  y:0,
  duration:2,
  ease: Expo.easeInOut,
  delay:-1.1,
  scale:1
})
