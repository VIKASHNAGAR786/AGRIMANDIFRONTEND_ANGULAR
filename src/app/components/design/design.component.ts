import {
  Component,
  OnInit,
  OnDestroy,
  AfterViewInit,
  Inject,
  PLATFORM_ID,
  HostListener
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import * as THREE from 'three';
import { ColorserviceService } from '../../services/colorservice.service';

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.css']
})
export class DesignComponent implements OnInit, AfterViewInit, OnDestroy {
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;
  private sun!: THREE.Mesh;
  private clouds: THREE.Group[] = [];
  private animationId!: number;
  private angle: number = 0;

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private colorService: ColorserviceService) { }
  selectedColor: string = ''; // default
  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.colorService.selectedColor$.subscribe(color => {
        this.selectedColor = color;

        // 👇 Dispose previous scene & renderer if they exist
        if (this.renderer) {
          this.renderer.dispose();
          const canvas = document.querySelector('#background-wrapper canvas');
          if (canvas) canvas.remove();
          cancelAnimationFrame(this.animationId);
        }

        this.initThreeJS(this.selectedColor);
        this.animate(); // 🟢 Restart animation loop
      });
    }
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.animate();
    }
  }

  ngOnDestroy(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.renderer.dispose();
      cancelAnimationFrame(this.animationId);
    }
  }

  @HostListener('window:resize')
  onWindowResize(): void {
    if (this.camera && this.renderer) {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    }
  }

  private initThreeJS(color1: string): void {
    let hillColor: THREE.Color;

    if (color1.startsWith('#')) {
      hillColor = new THREE.Color(color1);
    } else {
      hillColor = new THREE.Color(0x28a745); // fallback or default
    }

    this.scene = new THREE.Scene();

    // Camera
    this.camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 2000);
    this.camera.position.set(0, 50, 500);

    // Renderer
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setClearColor(0x87ceeb); // Light blue sky
    document.getElementById('background-wrapper')?.appendChild(this.renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6);
    directionalLight.position.set(100, 200, 100);
    this.scene.add(ambientLight, directionalLight);

    // Sun
    const sunGeometry = new THREE.SphereGeometry(25, 64, 64);
    const sunMaterial = new THREE.MeshStandardMaterial({
      color: 0xffdd33,
      emissive: 0xffaa00,
      emissiveIntensity: 1.5,
      metalness: 0.1,
      roughness: 0.4
    });
    this.sun = new THREE.Mesh(sunGeometry, sunMaterial);
    this.sun.position.set(200, 150, -300);
    this.scene.add(this.sun);

    // ✨ Sun Glow (Soft Surrounding Light)
    const sunGlowMaterial = new THREE.MeshBasicMaterial({
      color: 0xffffcc,
      transparent: true,
      opacity: 0.25,
      depthWrite: false
    });
    const sunGlow = new THREE.Mesh(new THREE.SphereGeometry(50, 32, 32), sunGlowMaterial);
    sunGlow.position.copy(this.sun.position);
    this.scene.add(sunGlow);

    // ☀️ Directional Light (Sunlight effect)
    const sunlight = new THREE.DirectionalLight(0xfff3b0, 1.2);
    sunlight.position.copy(this.sun.position);
    this.scene.add(sunlight);


    // Sky dome
    const skyGeometry = new THREE.SphereGeometry(1000, 64, 64);

    const skyMaterial = new THREE.ShaderMaterial({
      side: THREE.BackSide,
      vertexShader: `
    varying vec3 vWorldPosition;
    void main() {
      vec4 worldPosition = modelMatrix * vec4(position, 1.0);
      vWorldPosition = worldPosition.xyz;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
      fragmentShader: `
    varying vec3 vWorldPosition;
    void main() {
      float h = normalize(vWorldPosition + vec3(0.0, 200.0, 0.0)).y;
      vec3 topColor = vec3(0.29, 0.63, 0.94);   // Top sky (deep blue)
      vec3 bottomColor = vec3(0.89, 0.96, 1.0); // Horizon (light blue / sky white)
      gl_FragColor = vec4(mix(bottomColor, topColor, max(h, 0.0)), 1.0);
    }
  `,
      uniforms: {}
    });

    const sky = new THREE.Mesh(skyGeometry, skyMaterial);
    this.scene.add(sky);


    // Hills

const hillWidth = 1200;
const hillDepth = 600;
const segmentsX = 100;
const segmentsZ = 50;

const hillGeometry = new THREE.PlaneGeometry(hillWidth, hillDepth, segmentsX, segmentsZ);
hillGeometry.rotateX(-Math.PI / 2);

const position = hillGeometry.attributes['position'];

// Procedural natural-looking hills using sine + cosine + randomness
for (let i = 0; i < position.count; i++) {
  const x = position.getX(i);
  const z = position.getZ(i);

  const height =
    Math.sin(x / 80) * 10 +
    Math.cos(z / 60) * 8 +
    Math.sin((x + z) / 100) * 5 +
    (Math.random() - 0.5) * 2; // small randomness to break symmetry

  position.setY(i, height);
}

position.needsUpdate = true;
hillGeometry.computeVertexNormals();

// Soft green material with slight reflectivity for grass feel
const hillMaterial = new THREE.MeshStandardMaterial({
  color: this.selectedColor, // natural green
  roughness: 0.9,  // matte like grass
  metalness: 0.1,  // subtle light response
  side: THREE.DoubleSide
});

const hills = new THREE.Mesh(hillGeometry, hillMaterial);
hills.position.y = -180;
this.scene.add(hills);

    // Clouds
    this.createClouds();

  }
  private createClouds(): void {
  const baseMaterial = new THREE.MeshLambertMaterial({ 
    color: 0xffffff, 
    transparent: true, 
    opacity: 0.85,
    depthWrite: false
  });

  for (let i = 0; i < 7; i++) {
    const cloud = new THREE.Group();

    // Create multiple spheres with varying sizes and positions for natural fluffiness
    const sphereSizes = [18, 14, 12, 10, 8];
    const sphereOffsets: [number, number, number][] = [
      [0, 0, 0],
      [-20, 5, 0],
      [20, 5, 0],
      [-10, 10, 5],
      [10, 10, -5]
    ];

    sphereSizes.forEach((size, idx) => {
      // Slight variation in color brightness for depth effect
      const shade = 0.9 + Math.random() * 0.1;
      const material = baseMaterial.clone();
      material.color = new THREE.Color(shade, shade, shade);
      const sphere = new THREE.Mesh(new THREE.SphereGeometry(size, 32, 32), material);

      sphere.position.set(...sphereOffsets[idx]);
      cloud.add(sphere);
    });

    // Randomize cloud position with wider spread
    cloud.position.set(
      Math.random() * 1200 - 600,  // X: wider spread
      Math.random() * 150 + 150,   // Y: higher clouds
      Math.random() * -200 - 250   // Z: random depth further from camera
    );

    // Optional: subtle random scale for variety
    const scale = 0.8 + Math.random() * 0.6;
    cloud.scale.set(scale, scale, scale);

    this.clouds.push(cloud);
    this.scene.add(cloud);
  }
}

private clock = new THREE.Clock(); // Add this at class level for tracking time

private animate = (): void => {
  this.animationId = requestAnimationFrame(this.animate);

  const delta = this.clock.getDelta(); // Time since last frame
  const elapsed = this.clock.getElapsedTime();

  // Smooth camera orbit using elapsed time
  const radius = 500;
  this.camera.position.x = radius * Math.sin(elapsed * 0.1); // Slower, smoother
  this.camera.position.z = radius * Math.cos(elapsed * 0.1);
  this.camera.lookAt(0, 0, 0);

  // Smooth cloud movement using delta
  const cloudSpeed = 20; // units per second
  this.clouds.forEach(cloud => {
    cloud.position.x += cloudSpeed * delta;
    if (cloud.position.x > 600) cloud.position.x = -600;
  });

  this.renderer.render(this.scene, this.camera);
};

}
