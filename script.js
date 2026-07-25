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
import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.179/build/three.module.js";

// ===============================
// Project Cube
// ===============================

const canvas = document.getElementById("projectCube");

if (canvas) {

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(
        45,
        canvas.clientWidth / canvas.clientHeight,
        0.1,
        100
    );

    camera.position.z = 5;

    // Renderer
    const renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: true
    });

    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Lights
    const ambient = new THREE.AmbientLight(0xffffff, 1.4);
    scene.add(ambient);

    const light = new THREE.PointLight(0x7df9ff, 8);
    light.position.set(5,5,5);
    scene.add(light);

    // Materials
    const materials = [

        new THREE.MeshStandardMaterial({color:0x8b5cf6}),
        new THREE.MeshStandardMaterial({color:0x00e5ff}),
        new THREE.MeshStandardMaterial({color:0x00ff99}),
        new THREE.MeshStandardMaterial({color:0xff4fd8}),
        new THREE.MeshStandardMaterial({color:0xff9800}),
        new THREE.MeshStandardMaterial({color:0xffffff})

    ];

    // Cube
    const cube = new THREE.Mesh(

        new THREE.BoxGeometry(2,2,2),

        materials

    );

    scene.add(cube);

    // Mouse Rotation

    let mouseX = 0;
    let mouseY = 0;

    window.addEventListener("mousemove",(e)=>{

        mouseX = (e.clientX/window.innerWidth-.5)*0.8;
        mouseY = (e.clientY/window.innerHeight-.5)*0.6;

    });

    // Animation

    function animate(){

        requestAnimationFrame(animate);

        cube.rotation.y += 0.008;

        cube.rotation.x += (mouseY-cube.rotation.x)*0.05;

        cube.rotation.y += (mouseX-cube.rotation.y)*0.02;

        renderer.render(scene,camera);

    }

    animate();

    // Resize

    window.addEventListener("resize",()=>{

        camera.aspect = canvas.clientWidth/canvas.clientHeight;

        camera.updateProjectionMatrix();

        renderer.setSize(canvas.clientWidth,canvas.clientHeight);

    });

}
