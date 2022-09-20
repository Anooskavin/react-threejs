import React, { Component } from 'react';
import * as THREE from 'three';
import {OrbitControls} from 'https://threejsfundamentals.org/threejs/resources/threejs/r115/examples/jsm/controls/OrbitControls.js';
import { GUI } from 'dat.gui';
class Geometry extends Component {
    componentDidMount() {
        var scene = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
        var renderer = new THREE.WebGLRenderer({
            antialias: true
        })
        renderer.setClearColor(0xFDD023, 1);
        renderer.setSize(window.innerWidth, window.innerHeight)
        this.mount.appendChild(renderer.domElement)
        camera.position.z = 5;
        var boxGeometry = new THREE.BoxGeometry(1,1,1,1,1,16)
        var boxMaterial = new THREE.MeshBasicMaterial ({
            // wireframe : true
        })
        var boxMesh = new THREE.Mesh(boxGeometry,boxMaterial)
        boxMesh.position.x =-1;
        scene.add(boxMesh)
        new OrbitControls(camera,renderer.domElement)

        var light = new THREE.AmbientLight(0x654321,0.5)
        light.castShadow = true
        light.intensity=10
        scene.add(light)
        var light1 = new THREE.PointLight(0xffffff,0.5)
        light1.castShadow = true
        light1.intensity=5
        // light1.position.set(0,64,32)
        scene.add(light1)
        // boxMesh.position.set(0,0,-1000  )
        
        const gui = new GUI();
        const geometryFolder = gui.addFolder("Mesh Geometry")
        geometryFolder.open()
        const rotationFolder = geometryFolder.addFolder("Rotation")
        rotationFolder.add(boxMesh.rotation,'x',0,Math.PI).name('Rotate X axis')
        rotationFolder.add(boxMesh.rotation,'y',0,Math.PI).name('Rotate Y axis')
        rotationFolder.add(boxMesh.rotation,'z',0,Math.PI).name('Rotate Z axis')
        const scaleFolder = geometryFolder.addFolder("Scale")
        scaleFolder.add(boxMesh.scale,'x',0,2).name('Scale X axis')
        scaleFolder.add(boxMesh.scale,'y',0,2).name('Scale Y axis')
        scaleFolder.add(boxMesh.scale,'z',0,2).name('Scale Z axis')

        // const materialParams = {
        //       boxMeshColor: boxMesh.material.color.getHex(),
        //     };
        //     gui.add(boxMesh.material, 'wireframe');
        //     gui
        //       .addColor(materialParams, 'boxMeshColor')
        //       .onChange((value) => boxMesh.material.color.set(value));

        renderer.render(scene, camera)



        var animate = function (){
            boxMesh.rotation.x += .01
            boxMesh.rotation.y += .01
            requestAnimationFrame(animate)
            renderer.render(scene, camera)

        }
        animate();

    }
    render() {
        return (
            <div
                style={{ width: (100), height: (100), }}
                ref={ref => this.mount = ref}></div>
        );
    }
}

export default Geometry;


































        // const Circlegeometry = new THREE.CircleGeometry(3,6);
        // const Circlematerial = new THREE.MeshBasicMaterial({ color: 0xffffff});
        // const Circle = new THREE.Mesh(Circlegeometry, Circlematerial);
        // scene.add(Circle)

        // const Cubegeometry = new THREE.BoxGeometry(1, 1, 1,1,1);
        // const Cubematerial = new THREE.MeshBasicMaterial({ color: 0xffffff });
        // const cube = new THREE.Mesh(Cubegeometry, Cubematerial);
        // scene.add(cube)

        // const Conegeometry = new THREE.ConeGeometry(1,1);
        // const Conematerial = new THREE.MeshBasicMaterial({ color: 0x789456 });
        // const Cone = new THREE.Mesh(Conegeometry, Conematerial);
        // scene.add(Cone)



        // const Ringgeometry = new THREE.RingGeometry(1,2);
        // const Ringmaterial = new THREE.MeshBasicMaterial({ color: 0xcf8804 });
        // const Ring = new THREE.Mesh(Ringgeometry, Ringmaterial);
        // scene.add(Ring)