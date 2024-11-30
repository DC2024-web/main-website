"use client"
import React, { useEffect, useRef, useState } from "react";
import "./ThreeDImage.css";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import * as THREE from "three";

const ThreeDImage = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const varwidth = window.innerWidth / 3 < 300 ? 300 : window.innerWidth / 3;
  const varheight = window.innerHeight / 3 < 300 ? 300 : window.innerHeight / 3;
  
  useEffect(() => {
    // Scene, Camera, Renderer setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75, // Field of View
      window.innerWidth / window.innerHeight, // Aspect Ratio
      0.1, // Near clipping plane
      1000 // Far clipping plane
    );

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(varwidth, varheight);
    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    const backLight = new THREE.PointLight(0x2e88ff, 3, 20);
    backLight.position.set(-5, 5, -5);
    backLight.intensity = 20;
    scene.add(backLight);

    const fillLight = new THREE.PointLight(0xFF0000, 0.7, 20);
    fillLight.position.set(-5, 0, 5);
    fillLight.intensity = 40;
    scene.add(fillLight);

    const keyLight = new THREE.PointLight(0x2e88ff, 2, 20);
    keyLight.position.set(5, 0, 0);
    keyLight.intensity = 50;
    scene.add(keyLight);

    const keyLight2 = new THREE.PointLight(0xFF0000, 2, 20);
    keyLight2.position.set(0, 5, 0);
    keyLight2.intensity = 30;
    scene.add(keyLight2); 

    const keyLight3 = new THREE.PointLight(0xffffff, 2, 20);
    keyLight3.position.set(-5, -5, -5);
    keyLight3.intensity = 30;
    scene.add(keyLight3);

    // Create a geometry (cube)
    const geometry = new THREE.BoxGeometry(3, 3);

    // Create a material with a shiny, metallic look
    const material = new THREE.MeshStandardMaterial({
      color: 0x0077ff,
      metalness: 0.7, // Makes it look metallic
      roughness: 0.2, // Makes it shiny
    });

    // Create the cube and add it to the scene
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    // Create a star field
    const starGeometry = new THREE.BufferGeometry();
    const starCount = 800; // Number of stars
    const positions = new Float32Array(starCount * 3); // Array for positions

    for (let i = 0; i < starCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 100; // Random positions in a range
    }

    starGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );

    const starMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.1,
    });
    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars); // Add stars to the scene

    // Animation function
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate the stars for a slight twinkling effect
      scene.rotation.y += 0.001;
      scene.rotation.x += 0.002;

      renderer.render(scene, camera);
    };
    animate();

    // Handle window resize
    const handleResize = () => {
      const width = window.innerWidth / 3 < 300 ? 300 : window.innerWidth / 3;
      const height =
        window.innerHeight / 3 < 300 ? 300 : window.innerHeight / 3;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      // Remove event listener
      window.removeEventListener("resize", handleResize);

      // Remove the renderer DOM element
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }

      // Properly dispose of the scene
      scene.traverse((object) => {
        const mesh = object as THREE.Mesh;
        if (mesh.geometry) {
          mesh.geometry.dispose();
        }

        if (mesh.material) {
          if ((mesh.material as THREE.Material).isMaterial) {
            // Dispose material
            (mesh.material as THREE.Material).dispose();
          } else {
            // If material is an array, dispose of each element
            (mesh.material as THREE.Material[]).forEach((material: THREE.Material) => material.dispose());
          }
        }
      });

      // Dispose of the renderer
      renderer.dispose();
    };
  }, []);

  return (
    <>
      <div ref={mountRef} className="three-main-container" />
    </>
  );
};

export default ThreeDImage;
