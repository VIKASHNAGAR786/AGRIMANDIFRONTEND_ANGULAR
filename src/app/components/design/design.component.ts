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
    const hillMaterial = new THREE.MeshBasicMaterial({ color: hillColor });
    const hills = new THREE.Mesh(hillGeometry, hillMaterial);
    hills.rotation.x = -Math.PI / 2;
    hills.position.y = -150;
    this.scene.add(hills);

    // Clouds
    this.createClouds();
    this.createTractorWithFarmer();

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
private createTractorWithFarmer(): void {
  const tractor = new THREE.Group();

  // Tractor Body
  const bodyGeometry = new THREE.BoxGeometry(70, 30, 35); // more detailed body
  const bodyMaterial = new THREE.MeshLambertMaterial({ color: 0x2e7d32 }); // dark green
  const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
  body.position.set(0, 15, 0);
  tractor.add(body);

  // Tractor Cabin (with windows)
  const cabinGeometry = new THREE.BoxGeometry(40, 25, 25);
  const cabinMaterial = new THREE.MeshLambertMaterial({ color: 0x81c784 }); // light green
  const cabin = new THREE.Mesh(cabinGeometry, cabinMaterial);
  cabin.position.set(0, 40, 0);
  tractor.add(cabin);

  // Add windows to the tractor cabin
  const windowGeometry = new THREE.BoxGeometry(35, 10, 1);
  const windowMaterial = new THREE.MeshLambertMaterial({ color: 0x87ceeb, transparent: true, opacity: 0.6 });
  const window = new THREE.Mesh(windowGeometry, windowMaterial);
  window.position.set(0, 50, 13); // Add at the front for a window effect
  tractor.add(window);

  // Tractor Front (more realistic)
  const frontGeometry = new THREE.CylinderGeometry(12, 12, 20, 32);
  const frontMaterial = new THREE.MeshLambertMaterial({ color: 0x004d00 }); // dark green
  const front = new THREE.Mesh(frontGeometry, frontMaterial);
  front.rotation.x = Math.PI / 2;
  front.position.set(35, 25, 0);
  tractor.add(front);

  // Tractor Back (additional part for detail)
  const backGeometry = new THREE.CylinderGeometry(10, 10, 15, 32);
  const backMaterial = new THREE.MeshLambertMaterial({ color: 0x006400 }); // dark green
  const back = new THREE.Mesh(backGeometry, backMaterial);
  back.rotation.x = Math.PI / 2;
  back.position.set(-35, 25, 0);
  tractor.add(back);

  // Wheels (more realistic with larger sizes and details)
  const wheelMaterial = new THREE.MeshLambertMaterial({ color: 0x000000 });
  const wheelGeometry = new THREE.CylinderGeometry(12, 12, 6, 32);
  const wheelPositions = [
    [-30, 10, -15], [-30, 10, 15], [30, 10, -15], [30, 10, 15]
  ];
  for (const [x, y, z] of wheelPositions) {
    const wheel = new THREE.Mesh(wheelGeometry, wheelMaterial);
    wheel.rotation.z = Math.PI / 2;
    wheel.position.set(x, y, z);
    tractor.add(wheel);
  }

  // Farmer (more realistic features)
  const farmerGroup = new THREE.Group();

  // Farmer Head (better detail)
  const head = new THREE.Mesh(
    new THREE.SphereGeometry(6, 32, 32),
    new THREE.MeshLambertMaterial({ color: 0xffcc99 })
  );
  head.position.set(0, 58, 0);
  farmerGroup.add(head);

  // Farmer Body (realistic)
  const bodyMesh = new THREE.Mesh(
    new THREE.CylinderGeometry(5, 5, 12, 32),
    new THREE.MeshLambertMaterial({ color: 0x0000ff }) // blue shirt
  );
  bodyMesh.position.set(0, 49, 0);
  farmerGroup.add(bodyMesh);

  // Farmer Legs (two cylinders)
  const legGeometry = new THREE.CylinderGeometry(3, 3, 8, 32);
  const legMaterial = new THREE.MeshLambertMaterial({ color: 0x8b4513 }); // brown pants
  const leftLeg = new THREE.Mesh(legGeometry, legMaterial);
  leftLeg.position.set(-2, 43, 0);
  farmerGroup.add(leftLeg);
  
  const rightLeg = new THREE.Mesh(legGeometry, legMaterial);
  rightLeg.position.set(2, 43, 0);
  farmerGroup.add(rightLeg);

  // Farmer Arms (simple cylinders)
  const armGeometry = new THREE.CylinderGeometry(2, 2, 10, 32);
  const armMaterial = new THREE.MeshLambertMaterial({ color: 0xffcc99 }); // skin color

  const leftArm = new THREE.Mesh(armGeometry, armMaterial);
  leftArm.position.set(-5, 52, 0);
  leftArm.rotation.z = Math.PI / 4;
  farmerGroup.add(leftArm);

  const rightArm = new THREE.Mesh(armGeometry, armMaterial);
  rightArm.position.set(5, 52, 0);
  rightArm.rotation.z = -Math.PI / 4;
  farmerGroup.add(rightArm);

  tractor.add(farmerGroup);

  // Position the entire tractor and farmer in the scene
  tractor.position.set(-250, -120, 0); // Adjust based on your scene

  this.scene.add(tractor);
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
