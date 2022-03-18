import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

let idArray = ["#welcome_section","#rise_section","#petsupply_section","#dalsegno_section"];

export function scrollPage(index){
    gsap.to(window, {duration: 1, scrollTo:idArray[index]});
    console.log("fciuj");
}