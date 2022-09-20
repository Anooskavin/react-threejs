import React, { Component } from 'react';
import * as THREE from 'three';
class TestthreeOne extends Component {
    
    componentDidMount(){
        var scene = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera(35,window.innerWidth/window.innerHeight,0.1,3000)
        var renderer = new THREE.WebGLRenderer({
               antialias : true})
        renderer.setClearColor( 0xa83632, 1 );
        renderer.setPixelRatio(window.devicePixelRatio)
        renderer.setSize(window.innerWidth,window.innerHeight)
        this.mount.appendChild( renderer.domElement );
        var geometry = new THREE.CapsuleGeometry( 20, 20, 4, 8 );
        var material = new THREE.MeshPhongMaterial({
            color : 0x000000
        });
        var mesh = new THREE.Mesh(geometry,material)
        var light = new THREE.AmbientLight(0x654321,0.5)
        light.castShadow = true
        light.intensity=10
        scene.add(light)
        var light1 = new THREE.PointLight(0xffffff,0.5)
        light1.castShadow = true
        light1.intensity=3
        // light1.position.set(0,64,32)
        console.log(light1)
        scene.add(light1)
        mesh.position.set(0,0,-1000  )
        scene.add(mesh)

        

        var change = function (){
            requestAnimationFrame(change)
         mesh.rotation.x+=0.01;
         mesh.rotation.y+=0.01;    
         renderer.render(scene,camera)
         
        }
        change();
        
        

    }


    render() { 
        return (
            
            <div  ref={ref => (this.mount=ref)}>
            
            </div>
        );
    }
}
 
export default TestthreeOne;