import { useEffect, useState } from "react";
import * as THREE from "three";

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import { KTX2Loader } from "three/examples/jsm/loaders/KTX2Loader";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader";

// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import { baseHeroAnimations } from "components/pages/index/hero/animation/Hero.Animation";
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
// import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';

import { Water } from 'three/examples/jsm/objects/Water2';



import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

//import{ fragment } from "./shaders/fragmentShader";
//import{ vertex } from "./shaders/vertexShader";



// COMPONENETS
import Button from "components/lib/button/Button"
import { Inbox } from "react-feather";
// import Loading from '../../../global/Loading/Loading';
// import Button from "components/lib/button/Button";
// import { TextureLoader } from "three";





const Hero = () => {
    let water: any
    let _leptop: any
    const [cursor,] = useState({ x: 0, y: 0 })


    useEffect(() => {
        init();
        baseHeroAnimations()
    });





    const init = () => {
        const canvas = document.querySelector(".hero_landing_canvas") as HTMLElement;

        const sizes = {
            width: window.innerWidth,
            height: window.innerWidth < 750 ? window.innerHeight * .5 : window.innerHeight
        }





        //============================ SCENE
        const scene = new THREE.Scene();
        // scene.fog = new THREE.Fog(0x0076FF, 38, 50);






        //============================ LIGHT
        var lighth = new THREE.HemisphereLight(0xffffff, 0x45EBFF, 3.5);
        scene.add(lighth);









        //============================ CAMERA
        let camera = new THREE.PerspectiveCamera(13, sizes.width / sizes.height, 0.01, 1000);
        scene.add(camera)

        // const controls = new OrbitControls(camera, (canvas as HTMLElement));
        // controls.enableDamping = true





        //============================ RENDERER
        const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, premultipliedAlpha: false, })
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.outputEncoding = THREE.sRGBEncoding;
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 1.25;
        renderer.setSize(sizes.width, sizes.height);
        renderer.physicallyCorrectLights = true;





        //============================ POSTPROCESSING 
        let parameters = { minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter, format: THREE.RGBAFormat, stencilBuffer: false };
        let renderTarget = new THREE.WebGLRenderTarget(sizes.width, sizes.height, parameters);


        let composer = new EffectComposer(renderer, renderTarget);
        const renderPass = new RenderPass(scene, camera);
        renderPass.clear = false
        renderPass.clearAlpha = 0












        //============================ ENV
        let envmapLoader = new THREE.PMREMGenerator(renderer)







        //============================ MESH AND GEOMETRY
        const loader = new GLTFLoader();
        const dracoLoader = new DRACOLoader();
        dracoLoader.setDecoderPath('/third_party/draco/');
        loader.setDRACOLoader(dracoLoader);



        var ktx2Loader = new KTX2Loader()
            .setTranscoderPath('/third_party/basis/')
            .detectSupport(renderer)




        ktx2Loader.load('/hdr_textures/sky.ktx2', async (texture) => {
            texture.encoding = THREE.sRGBEncoding
            scene.background = texture;


            ktx2Loader.load('/textures/scene.ktx2', async (colorTexture) => {
                new RGBELoader().setPath("/hdr_textures/").load("main.hdr", (hdrmap: any) => {
                    let envmap = envmapLoader.fromCubemap(hdrmap)

                    // gsap.to(envmap.texture, {
                    //     rotationY: Math.PI *2,
                    //     ease: 'none',
                    //     duration: 6,
                    //     repeat: -1
                    // })
                    colorTexture.flipY = false
                    colorTexture.encoding = THREE.sRGBEncoding



                    const sceneMatterial = new THREE.MeshStandardMaterial({
                        metalness: 0.9,
                        envMap: envmap.texture,
                        envMapIntensity: 0.8,
                        map: colorTexture,
                    });



                    ktx2Loader.load('/textures/normals (Custom).ktx2', async (normalMapTexture) => {
                        let shineMaterial = new THREE.MeshStandardMaterial({
                            color: 0x000000,
                            // roughnessMap: roughnessMapTexture,
                            roughness: .3,
                            normalMap: normalMapTexture,
                            normalScale: new THREE.Vector2(.5, .5),
                            emissive: 0x3357FA,
                            emissiveIntensity: 0.005,
                            envMap: envmap.texture,
                            envMapIntensity: 10,
                            side: THREE.DoubleSide,
                        });

                        const geometry = new THREE.SphereGeometry(2.4, 32, 32);
                        const sphere = new THREE.Mesh(geometry, shineMaterial);
                        sphere.position.set(5, -3, 4)
                        scene.add(sphere);

                        const sphere1 = new THREE.Mesh(geometry, shineMaterial);
                        sphere1.position.set(1, 3, -8)
                        scene.add(sphere1);

                        const small_geometry = new THREE.SphereGeometry(.5, 14, 14);
                        const small_sphere = new THREE.Mesh(small_geometry, shineMaterial);
                        small_sphere.position.set(-1, -2, 4)
                        scene.add(small_sphere);

                        [small_sphere, sphere1, sphere].map((mesh) => mesh.material.flatShading = false)


                        gsap.to(sphere.rotation, {
                            x: Math.PI * 2,
                            duration: 16,
                            ease: 'none',
                            repeat: -1,
                        })
                        gsap.to(sphere1.rotation, {
                            x: Math.PI * 2,
                            duration: 16,
                            ease: 'none',
                            repeat: -1,
                        })

                        gsap.fromTo(small_sphere.position, {
                            y: -1.9,
                        }, {
                            y: -2.2,
                            repeat: -1,
                            duration: 3,
                            yoyo: true,
                            ease: 'none'
                        })

                    })



                    const waterGeometry = new THREE.PlaneGeometry(20, 20);

                    water = new Water(waterGeometry, {
                        color: '#23A9D3',
                        scale: 10,
                        reflectivity: 1.2,
                        flowSpeed: .2,
                        flowDirection: new THREE.Vector2(1, 1),
                        textureWidth: 1024,
                        textureHeight: 1024,
                    });

                    water.position.y = -2.65;
                    water.rotation.x = Math.PI * - 0.5;
                    scene.add(water);




                    loader.load(
                        '/glb/hero_section_for_web.glb',
                        (gltf) => {
                            gltf.scene.traverse((child: THREE.Object3D) => {
                                if ((child as THREE.Mesh).isMesh) {
                                    (child as THREE.Mesh).material = sceneMatterial;
                                    (child as THREE.Mesh).castShadow = true;
                                    (child as THREE.Mesh).receiveShadow = true;
                                }

                                if (child.name == 'Camera') {
                                    camera.position.set(
                                        child.position.x + 20,
                                        child.position.y - 1.5,
                                        child.position.z + 8)

                                    const tl = gsap.timeline()
                                    tl.to(camera.position, {
                                        x: child.position.x,
                                        delay: 3,
                                        duration: 5,
                                        ease: 'power4.out'
                                    })
                                        .fromTo('.animate_UI', {
                                            x: 15,
                                            opacity: 0,
                                        }, {
                                            x: 0,
                                            opacity: 1,
                                            duration: 1,
                                            stagger: {
                                                each: 0.3
                                            }
                                        })
                                }
                                if (child.name == 'Lenovo_laptop001') {
                                    _leptop = child as THREE.Mesh


                                    const tl = gsap.timeline()
                                    tl.add('laptop')
                                    tl.fromTo(child.position, {
                                        y: -.2,
                                    }, {
                                        y: .145,
                                        repeat: -1,
                                        duration: 3,
                                        yoyo: true,
                                        ease: 'power1.out'
                                    }, 'laptop')
                                }
                            })

                            gltf.scene.castShadow = true;
                            gltf.scene.receiveShadow = true;
                            gltf.scene.position.set(0, 0, 0);
                            // console.log(gltf.scene);
                            scene.add(gltf.scene);
                        },
                    );
                })
            })
        }, function () {
            console.log('onProgress');
        }, function (e) {
            console.error(e);
        });





        //============================ RESIZE
        window.addEventListener("resize", () => {
            sizes.width = window.innerWidth;
            sizes.height = window.innerWidth < 750 ? window.innerHeight * .5 : window.innerHeight;
            camera.aspect = sizes.width / sizes.height;
            camera.updateProjectionMatrix();

            renderer.setSize(sizes.width, sizes.height);
            composer.setSize(sizes.width, sizes.height);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            composer.setSize(window.innerWidth, window.innerHeight);
        })




        //============================  MOUSEMOVE EVENT
        window.addEventListener("mousemove", (e) => {
            cursor.x = (e.clientX / window.innerWidth) * 0.01;
            cursor.y = - (e.clientY / window.innerHeight) * 0.01;
        })





        const animate = () => {
            requestAnimationFrame(animate);
            if (camera && _leptop) {
                gsap.to(camera!.rotation, { y: cursor.x });
                gsap.to(camera!.rotation, { x: cursor.y });


                gsap.to(_leptop!.rotation, { y: cursor.x * 35 });
                gsap.to(_leptop!.rotation, { x: cursor.y * 15 });
            }

            renderer.render(scene, camera);
        }
        renderer.clear();
        animate()
    }







    return (
        <>
            <div className="hero">
                <div className="hero_container">
                    <canvas className="hero_landing_canvas" />
                    <div className="introduction">
                        <div className="introduction-container">
                            <div className="heading hero_anim">
                                <h1 className="f-weight-bl f-size-h1">
                                    Building a better web
                                </h1>
                            </div>

                            <div className="line hero_line hero_anim"></div>

                            <div className="paragraph hero_anim">
                                <p className="f-weight-l f-size-p2">
                                    We at <strong>Oxeni</strong> are dedicated to bringing a new
                                    era of design to the web. We want our customers to have web
                                    experiences they can be proud of.
                                </p>
                            </div>

                            <div className="contact_btn hero_anim">
                                <a href="mailto: hello@oxeni.dev" rel="noopener noreferrer">
                                    <Button
                                        className="hero_button"
                                        color="black"
                                        size="large"
                                        width="20rem"
                                        iconRight={<Inbox color="#80888E" size={28} />}

                                    >
                                        <p
                                            className="f-size-p2 f-weight-r primary-white contactUs"
                                        >
                                            contact us
                                        </p>
                                    </Button>
                                </a>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}




export default Hero
