
import React,{Component} from "react";
import * as THREE from 'three';
// import OrbitControls from "three-orbitcontrols";
import {OrbitControls} from 'https://threejsfundamentals.org/threejs/resources/threejs/r115/examples/jsm/controls/OrbitControls.js';
class Testthree extends Component{

    componentDidMount() {
        var scene = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/(window.innerHeight), 0.2, 1000 );
        camera.lookAt( 50,75,92);
        var renderer = new THREE.WebGL1Renderer();
        renderer.setSize( window.innerWidth, (window.innerHeight) );
        this.mount.appendChild( renderer.domElement );
        var geometry = new THREE.BoxGeometry();
        var material = new THREE.MeshBasicMaterial( { color: 0x00ff00, wireframe: true} );
        var cube = new THREE.Mesh( geometry, material );
        scene.add( cube );
        camera.position.z = 5;
        var animate = function () {
          requestAnimationFrame( animate );
          cube.rotation.x += 0.01;
          cube.rotation.y += 0.01;
          renderer.render( scene, camera );
        };
        animate();
        var handleWindowResize = () =>{
            camera.aspect = (window.innerWidth, window.innerHeight);
            camera.updateProjectionMatrix();
            renderer.setSize( window.innerWidth, (window.innerHeight) );
            renderer.render( scene, camera );


        }
        new OrbitControls(camera,renderer.domElement)
        window.addEventListener("resize",handleWindowResize)
      }
      render() {
        return (
          <div  className="canvas" ref={ref => (this.mount = ref)} />
        )
      }
}
export default Testthree;