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

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.initThreeJS();
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

  private initThreeJS(): void {
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
    const sunMaterial = new THREE.MeshBasicMaterial({ color: 0xffdd33 });
    this.sun = new THREE.Mesh(sunGeometry, sunMaterial);
    this.sun.position.set(200, 150, -300);
    this.scene.add(this.sun);

    // Sun glow
    const sunGlowMaterial = new THREE.MeshBasicMaterial({
      color: 0xffff99,
      transparent: true,
      opacity: 0.3
    });
    const sunGlow = new THREE.Mesh(new THREE.SphereGeometry(40, 32, 32), sunGlowMaterial);
    sunGlow.position.copy(this.sun.position);
    this.scene.add(sunGlow);

    // Sky dome
    const skyGeometry = new THREE.SphereGeometry(1000, 32, 32);
    const skyMaterial = new THREE.MeshBasicMaterial({ color: 0x81d4fa, side: THREE.BackSide });
    const sky = new THREE.Mesh(skyGeometry, skyMaterial);
    this.scene.add(sky);

    // Hills
    const hillGeometry = new THREE.PlaneGeometry(1200, 600);
    const hillMaterial = new THREE.MeshBasicMaterial({ color: 0x388e3c });
    const hills = new THREE.Mesh(hillGeometry, hillMaterial);
    hills.rotation.x = -Math.PI / 2;
    hills.position.y = -150;
    this.scene.add(hills);

    // Clouds
    this.createClouds();
  }

  private createClouds(): void {
    const baseMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });

    for (let i = 0; i < 5; i++) {
      const cloud = new THREE.Group();

      const sphere1 = new THREE.Mesh(new THREE.SphereGeometry(15, 32, 32), baseMaterial);
      const sphere2 = new THREE.Mesh(new THREE.SphereGeometry(12, 32, 32), baseMaterial);
      const sphere3 = new THREE.Mesh(new THREE.SphereGeometry(10, 32, 32), baseMaterial);

      sphere1.position.set(0, 0, 0);
      sphere2.position.set(-15, 5, 0);
      sphere3.position.set(15, 5, 0);

      cloud.add(sphere1, sphere2, sphere3);
      cloud.position.set(Math.random() * 800 - 400, Math.random() * 100 + 100, -300);

      this.clouds.push(cloud);
      this.scene.add(cloud);
    }
  }

  private animate = (): void => {
    this.animationId = requestAnimationFrame(this.animate);

    // Rotate camera slowly around center
    this.angle += 0.001;
    this.camera.position.x = 500 * Math.sin(this.angle);
    this.camera.position.z = 500 * Math.cos(this.angle);
    this.camera.lookAt(0, 0, 0);

    // Animate clouds left to right
    this.clouds.forEach(cloud => {
      cloud.position.x += 0.3;
      if (cloud.position.x > 600) cloud.position.x = -600;
    });

    this.renderer.render(this.scene, this.camera);
  };
}
