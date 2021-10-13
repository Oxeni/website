
import { useEffect, useState } from "react";
import * as THREE from "three";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader";
// import { FlakesTexture } from "three/examples/jsm/textures/FlakesTexture";
// const FlakesTexture = require("three/examples/jsm/textures/FlakesTexture");
import gsap from "gsap";
// import { fragment } from "./shaders/fragmentShader";
// import { vertex } from "./shaders/vertexShader";





const OxeniCube = () => {

    const [cursor,] = useState({ x: 0, y: 0 })


    useEffect(() => {
        init();
    }, []);





    const init = () => {
        const canvas = document.querySelector<HTMLCanvasElement>(".oxeni_cubes");
        const clock = new THREE.Clock();

        const sizes = {
            width: window.innerWidth,
            height: window.innerHeight
        }


        // SCENE
        const scene = new THREE.Scene();
        // scene.background = new THREE.Color(0xdddddd);





        // CAMERA
        const camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.set(0, 0, 8.8);
        scene.add(camera)




        // RENDERER
        const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true })
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.outputEncoding = THREE.sRGBEncoding;
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 1.25;
        renderer.setSize(sizes.width, sizes.height);



        let envmapLoader = new THREE.PMREMGenerator(renderer)


        // MESH AND GEOMETRY
        let cube1: THREE.Mesh
        let cube2: THREE.Mesh
        new RGBELoader().setPath("/hdr_textures/").load("cayley_interior_2k.hdr", (hdrmap: any) => {
            let envmap = envmapLoader.fromCubemap(hdrmap)
            // let texture = new THREE.CanvasTexture(new FlakesTexture());
            // texture.wrapS = THREE.RepeatWrapping;
            // texture.wrapT = THREE.RepeatWrapping;
            // texture.repeat.x = 10;
            // texture.repeat.y = 6;

            const boxMaterial = {
                clearcoat: 1.0,
                clearcoatRoughness: 0.1,
                metalness: 1,
                roughness: 0.15,
                color: "#FFFFFF",
                normalScale: new THREE.Vector2(0.15, 0.15),
                envMap: envmap.texture
            }

            const geometry = new THREE.BoxBufferGeometry(0.8, 0.8, 0.8);
            const material = new THREE.MeshPhysicalMaterial(boxMaterial);


            cube1 = new THREE.Mesh(geometry, material)
            cube1.rotateZ(90)
            cube1.rotateY(45)
            cube1.rotateX(90)
            cube1.position.set(3.6, 1.5, 0)

            cube2 = new THREE.Mesh(geometry, material)
            cube2.rotateX(.9)
            cube2.rotateZ(.80)
            cube2.position.set(-3.5, .4, 0)



            // const gui = new GUI()
            // gui.add(cube2.position, "x", -5, 5, .1)
            // gui.add(cube2.position, "y", -5, 5, .1)
            // gui.add(cube2.position, "z", -5, 5, .1)

            scene.add(cube1);
            scene.add(cube2);
        })






        //LIGTH
        let pointLigtht1 = new THREE.PointLight(0xffffff, 0.5);
        pointLigtht1.position.set(10, 10, 10);
        scene.add(pointLigtht1)

        let pointLigtht2 = new THREE.PointLight(0xffffff, 1);
        pointLigtht2.position.set(-10, 5, 0);
        scene.add(pointLigtht2)






        // RESIZE
        window.addEventListener("resize", () => {
            sizes.width = window.innerWidth;
            sizes.height = window.innerHeight;

            camera.aspect = sizes.width / sizes.height;
            camera.updateProjectionMatrix();

            renderer.setSize(sizes.width, sizes.height);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        })




        //  MOUSEMOVE EVENT
        window.addEventListener("mousemove", (e) => {
            cursor.x = (e.clientX / window.innerWidth) * 2.4 - 1;
            cursor.y = - (e.clientY / window.innerHeight) * 2.4 + 1;
        })




        const animate = () => {
            const elapsedTime = clock.getElapsedTime();

            if (cube1 && cube1 != undefined) {
                gsap.to(cube1.rotation, { y: (- elapsedTime * 0.2 * Math.PI * 0.2) })
                gsap.to(cube1.rotation, { y: ((- elapsedTime * Math.PI * 0.5) + Math.sin(cursor.x)) })
                gsap.to(cube1.rotation, { x: Math.sin(cursor.y) })

                gsap.to(cube2.rotation, { y: (- elapsedTime * 0.13 * Math.PI * 0.13) })
                gsap.to(cube2.rotation, { y: ((- elapsedTime * Math.PI * -0.9) + Math.sin(cursor.x)) })
                gsap.to(cube2.rotation, { x: Math.sin(cursor.y) })
            }

            renderer.clear();
            renderer.render(scene, camera);
            requestAnimationFrame(animate);
        }


        animate()
    }













    return (
        <>
            <canvas className="oxeni_cubes" />
        </>
    )
}

export default OxeniCube
