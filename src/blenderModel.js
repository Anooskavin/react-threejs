

import React, { Component } from 'react';
import * as THREE from "three";
// import GLTFLoader from 'three-gltf-loader';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { EXRLoader } from 'three/examples/jsm/loaders/EXRLoader.js';
import { OrbitControls } from 'https://threejsfundamentals.org/threejs/resources/threejs/r115/examples/jsm/controls/OrbitControls.js';
// import { DRACOLoader } from 'https://github.com/mrdoob/three.js/blob/master/examples/js/loaders/DRACOLoader.js';
// import file from "../public/";
// import { OrbitControls } from './jsm/controls/OrbitControls.js';
// import { GLTFLoader } from './jsm/loaders/GLTFLoader.js';


class blenderModel extends Component {
  componentDidMount() {

    var scene = new THREE.Scene();
    scene.background = new THREE.Color(0xdddddd);
    var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    var width = 100;
    var height = 100;
    var intensity = 1.4;
    var rectLight = new THREE.RectAreaLight(0xffffff, intensity, width, height);
    rectLight.position.set(1, 1, 10);
    rectLight.lookAt(1, 1, 3);
    scene.add(rectLight)

    let renderer = new THREE.WebGL1Renderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    this.mount.appendChild(renderer.domElement);


    camera.position.z = 5;

    // let loader = new THREE.TextureLoader();
    // loader.load('https://dm0qx8t0i9gc9.cloudfront.net/watermarks/image/rDtN98Qoishumwih/vintage-menu-card-design-for-sweet-donuts-shop-or-restaurantflyer-or-menu-card-for-sweet-donuts-shop_SB_PM.jpg', function (texture) {
    //   scene.background = texture;
    // });

    const API = {
      color: 0xC0C0C0, // sRGB
      exposure: 1.0
    };

    const manager = new THREE.LoadingManager(render);

    // matcap
    const loaderEXR = new EXRLoader(manager);
    // const matcap = loaderEXR.load('040full.exr');


    let loader = new GLTFLoader();
    loader.load(
      "carshowroom.gltf",
      (gltf) => {
        // console.log(gltf);
        // scene.add(gltf.scene);

        var mesh = gltf.scene;
        // mesh.position.y = - 0.25;
        mesh.material = new THREE.MeshMatcapMaterial({

          color: new THREE.Color().setHex(API.color).convertSRGBToLinear(),
          // matcap: matcap,

        });
        scene.add( mesh);

      },
      // called while loading is progressing
      (xhr) => {
        console.log((xhr.loaded / xhr.total * 100) + '% lloadedoaded');
      },
      // called when loading has errors
      (error) => {
        console.log(error)
        console.log('An error happened ' + error);

      }
    );

    //  loader = new THREE.TextureLoader();
    //   loader.load('https://static.vecteezy.com/system/resources/previews/007/620/155/original/school-classroom-background-with-some-furniture-vector.jpg' , function(texture)
    //   {
    //    scene.background = texture;  
    //   });


    function render() {

      renderer.render(scene, camera);

    }

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.addEventListener('change', render); // use if there is no animation loop
    // controls.minDistance = 
    controls.target.set(0, 0, - 0.2);
    controls.update();
    var animate = function () {
      requestAnimationFrame(animate);
      // console.log(scene)
      renderer.render(scene, camera);
    };
    animate();


  }



  render() {
    return (

      <div ref={ref => (this.mount = ref)}>

      </div>
    );
  }
}

export default blenderModel;



























































// var scene = new THREE.Scene();
//         var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/(window.innerHeight), 0.2, 1000 );
//         camera.lookAt( 50,75,92);
//         var renderer = new THREE.WebGL1Renderer();
//         renderer.setClearColor( 0xffffff, 1 );
//         renderer.setPixelRatio(window.devicePixelRatio)
//         renderer.setSize( window.innerWidth, (window.innerHeight) );
//         this.mount.appendChild( renderer.domElement );
//         const loader = new GLTFLoader();
// loader.load(
//     'play-area.gltf',
//     ( gltf ) => {
//         // called when the resource is loaded
//         scene.add( gltf.scene );
//     },
//     ( xhr ) => {
//         // called while loading is progressing
//         console.log( `${( xhr.loaded / xhr.total * 100 )}% loaded` );
//     },
//     ( error ) => {
//         // called when loading has errors
//         console.error( 'An error happened', error );
//     },
// );
// renderer.render( scene, camera );