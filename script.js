// LOADER
window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    gsap.to(loader, {
        opacity: 0,
        duration: 1,
        onComplete: () => {
            loader.style.display = "none";
        }
    });

    AOS.init({
        duration: 1000,
        once: true
    });

});

// CUSTOM CURSOR
if(window.innerWidth > 900){

    const cursor = document.querySelector(".cursor");
    const trail = document.querySelector(".cursor-trail");

    document.addEventListener("mousemove", (e) => {

        gsap.to(cursor,{
            x:e.clientX,
            y:e.clientY,
            duration:0.1
        });

        gsap.to(trail,{
            x:e.clientX,
            y:e.clientY,
            duration:0.2
        });

    });

}

// HERO ANIMATION
gsap.from(".hero-left h1",{
    y:50,
    opacity:0,
    duration:1
});

gsap.from(".hero-right",{
    x:100,
    opacity:0,
    duration:1
});

// CONTACT FORM
const form = document.getElementById("contactForm");

form.addEventListener("submit",(e)=>{

    e.preventDefault();

    alert("✨ Message Sent Successfully!");

    form.reset();

});