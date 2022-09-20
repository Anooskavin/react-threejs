import React, { Component } from 'react';
import * as THREE from 'three';
// import {OrbitControls} from 'https://threejsfundamentals.org/threejs/resources/threejs/r115/examples/jsm/controls/OrbitControls.js';
class GeometryTexture extends Component {

    componentDidMount() {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 0.1, 1000)
        const renderer = new THREE.WebGLRenderer({
            antialias : true,
        })
        renderer.setSize( window.innerWidth, (window.innerHeight) );
        this.mount.appendChild(renderer.domElement)
        
        const loader = new THREE.TextureLoader();
        loader.load('https://static.vecteezy.com/system/resources/previews/007/620/155/original/school-classroom-background-with-some-furniture-vector.jpg' , function(texture)
            {
             scene.background = texture;  
            });
        
        const boxTexture = new THREE.TextureLoader().load('https://images.labroots.com/content_article_profile_image_d1bfc719c79ac3aebab469b70029c555e4899281_4582.png');
        const boxTexture1 = new THREE.TextureLoader().load('https://i.pinimg.com/736x/25/8f/74/258f743e7d99c42205a43813a210a12a.jpg');

        // Box 
        const box1 = new THREE.BoxGeometry(0.5,0.5,0.5)
        const mesh1 = new THREE.MeshBasicMaterial({
            map : boxTexture1,
        })
        const boxMesh1 = new THREE.Mesh(box1,mesh1)
        camera.position.z = 5;
        boxMesh1.position.x = 1
        boxMesh1.position.y = -1
        scene.add(boxMesh1)

        //Sphere
        const sphere1 = new THREE.SphereGeometry(0.25,32,16,0,6.283,0,3.14)
        const mesh2 = new THREE.MeshBasicMaterial({
            map : boxTexture,

        })
        const sphereMesh1 = new THREE.Mesh(sphere1,mesh2)
        camera.position.z = 5;
        sphereMesh1.position.x = -1.50
        sphereMesh1.position.y = 1.23
        scene.add(sphereMesh1)

        var animate = function (){
            sphereMesh1.rotation.z += .01
            // sphereMesh1.rotation.y += .01
            requestAnimationFrame(animate)
            renderer.render(scene, camera)

        }
        animate();

        // new OrbitControls(camera,renderer.domElement)
        renderer.render(scene,camera)

    }

    render() {
        return (
            <div ref={ref => this.mount = ref}>
            </div>
        );
    }
}

export default GeometryTexture;