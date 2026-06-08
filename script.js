
const texts = [
    "Frontend Developer",
    "B.Tech CSIT Student",
    "Cloud Enthusiast",
    "Problem Solver",
    "DecodeLabs Intern"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {

    if (count === texts.length) {
        count = 0;
    }

    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.querySelector(".typing-text").textContent = letter;

    if (letter.length === currentText.length) {

        setTimeout(() => {

            index = 0;
            count++;
            type();

        }, 1500);

    } else {

        setTimeout(type, 100);

    }

})();




const observer = new IntersectionObserver(

(entries) => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},

{
threshold:0.15
}

);

document
.querySelectorAll(
".glass-card,.project-card,.hero-content,.hero-image,.stat-box"
)
.forEach(el => {

el.classList.add("hidden");
observer.observe(el);

});




const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {

let current = "";

sections.forEach(section => {

const sectionTop = section.offsetTop - 150;

if(scrollY >= sectionTop){

current = section.getAttribute("id");

}

});

navLinks.forEach(link => {

link.classList.remove("active");

if(
link.getAttribute("href") === "#" + current
){

link.classList.add("active");

}

});

});



window.addEventListener("mousemove",(e)=>{

const glow = document.querySelector(".background-glow");

let x = e.clientX / 25;
let y = e.clientY / 25;

glow.style.transform =
`translate(${x}px, ${y}px)`;

});




const particleContainer =
document.createElement("div");

particleContainer.classList.add("particles");

document.body.appendChild(
particleContainer
);

for(let i=0;i<50;i++){

let particle =
document.createElement("span");

particle.classList.add("particle");

particle.style.left =
Math.random()*100 + "%";

particle.style.animationDuration =
(5 + Math.random()*10) + "s";

particle.style.animationDelay =
Math.random()*5 + "s";

particleContainer.appendChild(
particle
);

}




window.addEventListener("scroll",()=>{

const navbar =
document.querySelector(".navbar");

if(window.scrollY > 50){

navbar.style.boxShadow =
"0 0 30px rgba(255,152,0,.3)";

}else{

navbar.style.boxShadow = "none";

}

});




const buttons =
document.querySelectorAll(
".btn,.btn-outline"
);

buttons.forEach(button=>{

button.addEventListener(
"mouseenter",
()=>{

button.style.transform =
"translateY(-5px)";

});

button.addEventListener(
"mouseleave",
()=>{

button.style.transform =
"translateY(0px)";

});

});