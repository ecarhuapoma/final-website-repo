import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(ScrollTrigger);



// export function riseDraw(){
//     const tl2 = new gsap.timeline();

//     tl2.fromTo(".riseSVG",{drawsvg:"0%"}),(".riseSVG",{drawsvg:"100%"});

// }



export function scrollAnimation(animationElement, triggerElement){

    const tl = new gsap.timeline();


    tl.fromTo(animationElement,
    
        { 
            alpha: 0,
            y:"+=100"
            
            
        },
        
        
        {
                alpha: 1,
                y:"-=100",
                stagger: 2,
       
                scrollTrigger: {
                    trigger: triggerElement,
                    start: "top 90%",
                    end: "bottom 70%",
                    toggleActions: "restart none resume none",
                    scrub: true
                }
            });

}