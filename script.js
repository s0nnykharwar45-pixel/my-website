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



/* ==========================================================
   Interactive Project Cube
========================================================== */

const cubeCanvas = document.getElementById("projectCube");

if (cubeCanvas) {

    const cubeScene = new THREE.Scene();

    const cubeCamera = new THREE.PerspectiveCamera(
        45,
        cubeCanvas.clientWidth / cubeCanvas.clientHeight,
        0.1,
        100
    );

    cubeCamera.position.z = 5;

    const cubeRenderer = new THREE.WebGLRenderer({
        canvas: cubeCanvas,
        alpha: true,
        antialias: true
    });

    cubeRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    cubeRenderer.setSize(
        cubeCanvas.clientWidth,
        cubeCanvas.clientHeight
    );

    // Temporary colors
    // Replace these later with your images

    const materials = [

        new THREE.MeshStandardMaterial({ color: 0x8b5cf6 }),
        new THREE.MeshStandardMaterial({ color: 0x06b6d4 }),
        new THREE.MeshStandardMaterial({ color: 0x22c55e }),
        new THREE.MeshStandardMaterial({ color: 0xec4899 }),
        new THREE.MeshStandardMaterial({ color: 0xf97316 }),
        new THREE.MeshStandardMaterial({ color: 0xffffff })

    ];

    const cube = new THREE.Mesh(

        new THREE.BoxGeometry(2,2,2),

        materials

    );

    cubeScene.add(cube);

    const light1 = new THREE.PointLight(0x7df9ff, 5);

    light1.position.set(5,5,5);

    cubeScene.add(light1);

    const light2 = new THREE.AmbientLight(0xffffff,1.4);

    cubeScene.add(light2);

    let targetY = 0;

    document.querySelectorAll(".cube-list li").forEach(item=>{

        item.addEventListener("click",()=>{

            targetY = Number(item.dataset.face) * Math.PI/3;

        });

    });

    function animateCube(){

        requestAnimationFrame(animateCube);

        cube.rotation.x += 0.003;

        cube.rotation.y += (targetY-cube.rotation.y)*0.08;

        cubeRenderer.render(cubeScene,cubeCamera);

    }

    animateCube();

    window.addEventListener("resize",()=>{

        cubeCamera.aspect =
        cubeCanvas.clientWidth/cubeCanvas.clientHeight;

        cubeCamera.updateProjectionMatrix();

        cubeRenderer.setSize(
            cubeCanvas.clientWidth,
            cubeCanvas.clientHeight
        );

    });

}
