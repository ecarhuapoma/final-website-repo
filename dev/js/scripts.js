import { gsap } from "gsap";
import { projects } from "./projects"
// import { brandProjects } from "./brandProjects";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger"
// import { naviOpen, naviClose } from "./naviAnim";
import { naviTL } from "./naviAnim";
import { scrollPage } from "./pageScroll";
import { scrollAnimation } from "./scrollAnimation";
// import { settingBranding, importingBranding } from "./brandingDetails";
gsap.registerPlugin(DrawSVGPlugin);
gsap.registerPlugin(ScrollTrigger);
gsap.set(".PATHCLASS",{alpha:0});
gsap.set(".stagger-btns",{alpha:0});

// let frost = new gsap.timeline();

window.addEventListener('load', function(){

    scrollAnimation("#welcome-div", "#welcome-div");

      

    scrollAnimation("#riselayout", "#riselayout");
    scrollAnimation("#petlayout", "#petlayout");
    scrollAnimation("#segnolayout", "#segnolayout");
});
// gsap.set("#projects header",{autoAlpha:0});
// gsap.set("#gallery",{autoAlpha:0})

window.addEventListener('load', function() {

    // console.log(projects[0].title);

    // populate the hero images
    // let heroImgArray = document.querySelectorAll('.bluetons');
    // // iterate over the heroImgArray and populate the background images
    // heroImgArray.forEach((heroImg, i) => {

    //     // first pass in the array
    //     // heroImg.style.backgroundImage = "url(./img/projects/turtles/turtle-1.jpg)";

    //     heroImg.style.backgroundImage = "url(" + projects[i].images[0] + ")";
    // });

    let heroLinks = document.querySelectorAll(".bluetons");

    heroLinks.forEach((link, i) => {
        // console.log("hello");

        link.addEventListener("click", () =>{
            
            localStorage.setItem("indexValue", i);
            link.href = "detail.html?=" + projects[i].title;
        });
    });
})



let navButtons = document.querySelectorAll(".nav-btns");

for (const button of navButtons){
    button.addEventListener("click", checkScrolling);
}



function checkScrolling(e) {
    
    const indexValue2 = [].indexOf.call(navButtons, e.target)
    if (indexValue2 != -1) {
        scrollPage(indexValue2);
        console.log(scrollPage(indexValue2));
    }
}


let canISeeMenu = false;
var headerButton = document.querySelector(".nameCircle");
headerButton.addEventListener('click', openCloseMenu);

function openCloseMenu(){
    if(canISeeMenu === false){
        naviTL.play();
        canISeeMenu = true;
    }
    else{
        naviTL.reverse();
        canISeeMenu = false;
    }
}
//