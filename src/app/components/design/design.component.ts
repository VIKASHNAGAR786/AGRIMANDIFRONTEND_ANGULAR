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
    this.createTractorWithFarmer();

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


private createTractorWithFarmer(): void {
  const tractor = new THREE.Group();

  // Tractor Body
  const bodyGeometry = new THREE.BoxGeometry(70, 30, 35);
  const bodyMaterial = new THREE.MeshStandardMaterial({
    color: 0x2e7d32,
    roughness: 0.5,
    metalness: 0.3
  });
  const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
  body.position.set(0, 15, 0);
  tractor.add(body);

  // Grill
  const grillGeometry = new THREE.PlaneGeometry(20, 15);
  const grillMaterial = new THREE.MeshStandardMaterial({
    color: 0x1b4d1b,
    roughness: 0.8,
    metalness: 0.4,
    side: THREE.DoubleSide
  });
  const grill = new THREE.Mesh(grillGeometry, grillMaterial);
  grill.position.set(35.5, 15, 0);
  grill.rotation.y = Math.PI / 2;
  tractor.add(grill);

  // Cabin Group
  const cabinGroup = new THREE.Group();

  const frameGeometry = new THREE.BoxGeometry(40, 25, 25);
  const frameMaterial = new THREE.MeshStandardMaterial({
    color: 0x2e7d32,
    roughness: 0.4,
    metalness: 0.7
  });
  const cabinFrame = new THREE.Mesh(frameGeometry, frameMaterial);
  cabinGroup.add(cabinFrame);

  const cabinWindowMaterial = new THREE.MeshStandardMaterial({
    color: 0xadd8e6,
    roughness: 0.1,
    metalness: 0,
    transparent: true,
    opacity: 0.5,
    side: THREE.DoubleSide
  });

  const frontWindowGeometry = new THREE.PlaneGeometry(35, 20);
  const frontWindow = new THREE.Mesh(frontWindowGeometry, cabinWindowMaterial);
  frontWindow.position.set(0, 0, 12.6);
  cabinGroup.add(frontWindow);

  const backWindow = new THREE.Mesh(frontWindowGeometry, cabinWindowMaterial);
  backWindow.position.set(0, 0, -12.6);
  backWindow.rotation.y = Math.PI;
  cabinGroup.add(backWindow);

  const sideWindowGeometry = new THREE.PlaneGeometry(25, 20);
  const leftWindow = new THREE.Mesh(sideWindowGeometry, cabinWindowMaterial);
  leftWindow.position.set(-20.1, 0, 0);
  leftWindow.rotation.y = Math.PI / 2;
  cabinGroup.add(leftWindow);

  const rightWindow = new THREE.Mesh(sideWindowGeometry, cabinWindowMaterial);
  rightWindow.position.set(20.1, 0, 0);
  rightWindow.rotation.y = -Math.PI / 2;
  cabinGroup.add(rightWindow);

  cabinGroup.position.set(0, 40, 0);
  tractor.add(cabinGroup);

  // Window (Front Decorative Box)
  const windowGeometry = new THREE.BoxGeometry(35, 10, 1);
  const windowMaterial = new THREE.MeshLambertMaterial({ color: 0x87ceeb, transparent: true, opacity: 0.6 });
  const window = new THREE.Mesh(windowGeometry, windowMaterial);
  window.position.set(0, 50, 13);
  tractor.add(window);

  // Tractor Front
  const frontGeometry = new THREE.CylinderGeometry(12, 12, 20, 32);
  const frontMaterial = new THREE.MeshLambertMaterial({ color: 0x004d00 });
  const front = new THREE.Mesh(frontGeometry, frontMaterial);
  front.rotation.x = Math.PI / 2;
  front.position.set(35, 25, 0);
  tractor.add(front);

  // Tractor Back
  const backGeometry = new THREE.BoxGeometry(20, 15, 10);
  const backMaterial = new THREE.MeshStandardMaterial({
    color: 0x064e03,
    roughness: 0.6,
    metalness: 0.3
  });
  const back = new THREE.Mesh(backGeometry, backMaterial);
  back.position.set(-35, 25, 0);
  tractor.add(back);

  const hitchGeometry = new THREE.CylinderGeometry(1.5, 1.5, 5, 16);
  const hitchMaterial = new THREE.MeshStandardMaterial({ color: 0x333333, roughness: 0.7, metalness: 0.8 });
  const hitch = new THREE.Mesh(hitchGeometry, hitchMaterial);
  hitch.rotation.z = Math.PI / 2;
  hitch.position.set(-45, 18, 0);
  tractor.add(hitch);

  // Wheels
  const tyreMaterial = new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.9, metalness: 0.1 });
  const rimMaterial = new THREE.MeshStandardMaterial({ color: 0x555555, roughness: 0.4, metalness: 0.8 });

  const tyreGeometry = new THREE.TorusGeometry(12, 3.5, 16, 100);
  const rimGeometry = new THREE.CylinderGeometry(7, 7, 6, 32);

  const wheelPositions = [
    [-30, 10, -15], [-30, 10, 15], [30, 10, -15], [30, 10, 15]
  ];

  for (const [x, y, z] of wheelPositions) {
    const wheelGroup = new THREE.Group();
    const tyre = new THREE.Mesh(tyreGeometry, tyreMaterial);
    tyre.rotation.x = Math.PI / 2;
    wheelGroup.add(tyre);

    const rim = new THREE.Mesh(rimGeometry, rimMaterial);
    rim.rotation.z = Math.PI / 2;
    wheelGroup.add(rim);

    const spokesCount = 8;
    for (let i = 0; i < spokesCount; i++) {
      const spoke = new THREE.Mesh(
        new THREE.CylinderGeometry(0.3, 0.3, 7, 8),
        rimMaterial
      );
      spoke.rotation.z = Math.PI / 2;
      spoke.rotation.y = (i * (2 * Math.PI)) / spokesCount;
      wheelGroup.add(spoke);
    }
    wheelGroup.position.set(x, y, z);
    tractor.add(wheelGroup);
  }

  // Farmer
  const farmerGroup = new THREE.Group();

  const head = new THREE.Mesh(
    new THREE.SphereGeometry(6, 32, 32),
    new THREE.MeshLambertMaterial({ color: 0xffcc99 })
  );
  head.position.set(0, 58, 0);
  farmerGroup.add(head);

  const torsoGeometry = new THREE.CylinderGeometry(4.5, 5.5, 14, 32);
  const torsoMaterial = new THREE.MeshStandardMaterial({
    color: 0x4169e1,
    roughness: 0.7,
    metalness: 0.1
  });
  const bodyMesh = new THREE.Mesh(torsoGeometry, torsoMaterial);
  bodyMesh.position.set(0, 51, 0);
  farmerGroup.add(bodyMesh);

  const beltGeometry = new THREE.TorusGeometry(5.2, 0.5, 8, 32);
  const beltMaterial = new THREE.MeshStandardMaterial({ color: 0x3e2723 });
  const belt = new THREE.Mesh(beltGeometry, beltMaterial);
  belt.rotation.x = Math.PI / 2;
  belt.position.set(0, 44.5, 0);
  farmerGroup.add(belt);

  const legGeometry = new THREE.CylinderGeometry(3, 3, 8, 32);
  const legMaterial = new THREE.MeshLambertMaterial({ color: 0x8b4513 });
  const leftLeg = new THREE.Mesh(legGeometry, legMaterial);
  leftLeg.position.set(-2, 43, 0);
  farmerGroup.add(leftLeg);
  const rightLeg = new THREE.Mesh(legGeometry, legMaterial);
  rightLeg.position.set(2, 43, 0);
  farmerGroup.add(rightLeg);

  const armGeometry = new THREE.CylinderGeometry(2, 2, 10, 32);
  const armMaterial = new THREE.MeshLambertMaterial({ color: 0xffcc99 });
  const leftArm = new THREE.Mesh(armGeometry, armMaterial);
  leftArm.position.set(-5, 52, 0);
  leftArm.rotation.z = Math.PI / 4;
  farmerGroup.add(leftArm);
  const rightArm = new THREE.Mesh(armGeometry, armMaterial);
  rightArm.position.set(5, 52, 0);
  rightArm.rotation.z = -Math.PI / 4;
  farmerGroup.add(rightArm);

  tractor.add(farmerGroup);
  tractor.position.set(-250, -120, 0);
  this.scene.add(tractor);
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
