import { gsap } from "gsap";



export const naviTL = new gsap.timeline({paused:true});
naviTL.to(".PATHCLASS",{alpha:1});
naviTL.to(".stagger-btns",{stagger:.2,duration:.5,alpha:1},"-=.2");


// export function naviOpen(){
//     naviTL.to(".PATHCLASS",{alpha:1});
//     naviTL.to(".stagger-btns",{stagger:.2,duration:.5,alpha:1},"-=.2");
// }

// export function naviClose(){
//     naviTL.reverse();
// }