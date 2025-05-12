import {
  Component, AfterViewInit, ElementRef, ViewChild, Inject, PLATFORM_ID, Output, EventEmitter,
  HostListener, OnDestroy
} from '@angular/core';
import * as THREE from 'three';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-wheel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wheel.component.html',
  styleUrls: ['./wheel.component.css']
})
export class WheelComponent implements AfterViewInit, OnDestroy {

  @HostListener('document:keydown.escape', ['$event'])
  onEscape(event: KeyboardEvent) {
    this.showBigWheel = false;
  }

  @ViewChild('rendererContainer', { static: false }) rendererContainer!: ElementRef;
  @ViewChild('miniWheelContainer', { static: false }) miniWheelContainer!: ElementRef;
  @ViewChild('colorPicker', { static: false }) colorPickerRef!: ElementRef<HTMLInputElement>;

  @Output() colorSelected = new EventEmitter<string>();

  showBigWheel = false; // State: Controls modal display
  private colorPicker: HTMLInputElement;
  private platformBrowser: boolean;
  private outsideClickListener: any;
  private renderer: THREE.WebGLRenderer | null = null;
  private scene: THREE.Scene | null = null;
  private camera: THREE.PerspectiveCamera | null = null;
  private meshes: THREE.Mesh[] = [];
  private raycaster: THREE.Raycaster | null = null;
  private mouse: THREE.Vector2 = new THREE.Vector2();
  
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.platformBrowser = isPlatformBrowser(this.platformId);
    this.colorPicker = null!;
  }

  ngAfterViewInit(): void {
    if (!this.platformBrowser) return;
    this.colorPicker = this.colorPickerRef?.nativeElement;
    this.initMiniWheel();
  }

  ngOnDestroy(): void {
    // Clean up Three.js resources and event listeners to avoid memory leaks
    this.disposeThreeResources();
    if (this.outsideClickListener) {
      document.removeEventListener('click', this.outsideClickListener);
    }
  }

  openColorWheel(): void {
  this.showBigWheel = true;

  setTimeout(() => {
    this.colorPicker = this.colorPickerRef?.nativeElement;

    if (this.colorPicker && !this.colorPicker.hasAttribute('data-listener-added')) {
      this.colorPicker.addEventListener('input', (event: Event) => {
        const color = (event.target as HTMLInputElement).value;
        this.colorSelected.emit(color);
        this.showBigWheel = false;
      });
      this.colorPicker.setAttribute('data-listener-added', 'true');
    }

    this.initBigWheel();
    this.addOutsideClickListener();
  }, 0);
}
    
  private addOutsideClickListener() {
    this.outsideClickListener = (event: MouseEvent) => {
      const container = this.rendererContainer?.nativeElement;
      const colorPickerEl = this.colorPickerRef?.nativeElement;

      if (
        container &&
        colorPickerEl &&
        !container.contains(event.target as Node) &&
        !colorPickerEl.contains(event.target as Node)
      ) {
        colorPickerEl.style.visibility = 'hidden';
      }
    };

    document.addEventListener('click', this.outsideClickListener);
  }

  private initMiniWheel() {
  const container = this.miniWheelContainer.nativeElement;
  const scene = new THREE.Scene();

  // Camera
  const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 1000);
  camera.position.z = 6;

  // Renderer
  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setSize(100, 100);
  renderer.setPixelRatio(window.devicePixelRatio);
  container.appendChild(renderer.domElement);

  // Lighting
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
  const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
  directionalLight.position.set(0, 0, 10);
  scene.add(ambientLight, directionalLight);

  // Wheel design
  const radius = 2;
  const segments = 8;
  const colors = [
    '#FF0000', '#FF7F00', '#FFFF00', '#00FF00',
    '#00FFFF', '#0000FF', '#8B00FF', '#800080'
  ];

  for (let i = 0; i < segments; i++) {
    const startAngle = (i / segments) * Math.PI * 2;
    const endAngle = ((i + 1) / segments) * Math.PI * 2;
    const shape = new THREE.Shape();
    shape.moveTo(0, 0);
    shape.absarc(0, 0, radius, startAngle, endAngle, false);
    shape.lineTo(0, 0);

    const geometry = new THREE.ShapeGeometry(shape);
    geometry.computeVertexNormals();

    const material = new THREE.MeshStandardMaterial({
      color: colors[i],
      metalness: 0.5,
      roughness: 0.3,
      emissive: new THREE.Color(colors[i]),
      emissiveIntensity: 0.2,
      side: THREE.DoubleSide
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);
  }

  // Optional overlay: circular shine (semi-transparent white)
  const shineGeometry = new THREE.RingGeometry(radius * 0.95, radius, 64);
  const shineMaterial = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    transparent: true,
    opacity: 0.05,
    side: THREE.DoubleSide
  });
  const shineMesh = new THREE.Mesh(shineGeometry, shineMaterial);
  scene.add(shineMesh);

  // Animate
  function animate() {
    requestAnimationFrame(animate);
    scene.rotation.z += 0.01;
    renderer.render(scene, camera);
  }
  animate();
}

private initBigWheel() {
  const container = this.rendererContainer.nativeElement;
  const width = container.clientWidth;
  const height = container.clientHeight;

  this.disposeThreeResources(); // Clean previous resources
  this.scene = new THREE.Scene();
  this.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
  this.camera.position.z = 6;

  this.renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  this.renderer.setSize(width, height);
  this.renderer.setPixelRatio(window.devicePixelRatio);
  container.appendChild(this.renderer.domElement);

  // Lights
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
  const directionalLight = new THREE.DirectionalLight(0xffffff, 1.2);
  directionalLight.position.set(3, 3, 5);
  this.scene.add(ambientLight, directionalLight);

  // Wheel
  const radius = 2.5;
  const segments = 8;
  const colors = [
    '#FF0000', '#FF7F00', '#FFFF00', '#00FF00',
    '#00FFFF', '#0000FF', '#8B00FF', '#800080'
  ];
  this.meshes = [];
  this.raycaster = new THREE.Raycaster();

  for (let i = 0; i < segments; i++) {
    const startAngle = (i / segments) * Math.PI * 2;
    const endAngle = ((i + 1) / segments) * Math.PI * 2;

    const shape = new THREE.Shape();
    shape.moveTo(0, 0);
    shape.absarc(0, 0, radius, startAngle, endAngle, false);
    shape.lineTo(0, 0);

    const extrudeSettings = {
      depth: 0.3,
      bevelEnabled: false
    };
    const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);

    const material = new THREE.MeshStandardMaterial({
      color: colors[i],
      metalness: 0.4,
      roughness: 0.3,
      emissive: new THREE.Color(colors[i]),
      emissiveIntensity: 0.1,
      side: THREE.DoubleSide
    });

    const mesh = new THREE.Mesh(geometry, material);
    mesh.userData = { colorIndex: i };
    this.meshes.push(mesh);
    this.scene.add(mesh);

    // Glow Shader (fixed version)
    const glowMaterial = new THREE.ShaderMaterial({
      uniforms: {
        glowColor: { value: new THREE.Color(colors[i]) },
        viewVector: { value: this.camera.position }
      },
      vertexShader: `
        uniform vec3 viewVector;
        varying float intensity;
        void main() {
          vec3 vNormal = normalize(normalMatrix * normal);
          vec3 vNormView = normalize(normalMatrix * viewVector);
          intensity = pow(0.7 - dot(vNormal, vNormView), 2.0);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 glowColor;
        varying float intensity;
        void main() {
          gl_FragColor = vec4(glowColor * intensity, 0.5);
        }
      `,
      side: THREE.BackSide,
      blending: THREE.AdditiveBlending,
      transparent: true
    });

    const glowMesh = new THREE.Mesh(geometry.clone(), glowMaterial);
    glowMesh.scale.multiplyScalar(1.08);
    this.scene.add(glowMesh);
  }

  // Add glossy glass ring overlay
  const shineRing = new THREE.RingGeometry(radius * 0.9, radius, 64);
  const shineMaterial = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    opacity: 0.07,
    transparent: true,
    side: THREE.DoubleSide
  });
  const shineMesh = new THREE.Mesh(shineRing, shineMaterial);
  this.scene.add(shineMesh);

  // Mouse interaction
  this.renderer.domElement.addEventListener('click', (event: MouseEvent) => {
    const rect = this.renderer!.domElement.getBoundingClientRect();
    this.mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    this.mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

    this.raycaster!.setFromCamera(this.mouse, this.camera!);
    const intersects = this.raycaster!.intersectObjects(this.meshes);

    if (intersects.length > 0) {
      const selected = intersects[0].object as THREE.Mesh;
      if (this.colorPicker && selected.material instanceof THREE.MeshStandardMaterial) {
        const currentColor = `#${selected.material.color.getHexString()}`;
        
      console.log('Selected color:', currentColor);  // Print the color in console

        this.colorPicker.value = currentColor;
        this.colorPicker.style.left = `${event.clientX}px`;
        this.colorPicker.style.top = `${event.clientY}px`;
        this.colorPicker.style.visibility = 'visible';
        this.colorPicker.focus();
        this.colorPicker.click();
      }

      // Click glow pulse effect
      selected.scale.set(1.1, 1.1, 1.1);
      setTimeout(() => selected.scale.set(1, 1, 1), 200);
    }
  });

  // Animate
  const animate = () => {
    requestAnimationFrame(animate);
    this.scene!.rotation.z += 0.002; // Smooth slow spin
    this.renderer!.render(this.scene!, this.camera!);
  };
  animate();
}


  private disposeThreeResources() {
    if (this.scene) {
      this.scene.traverse((object) => {
        if (object instanceof THREE.Mesh) {
          object.geometry.dispose();
          object.material.dispose();
        }
      });
      this.scene = null;
    }

    if (this.renderer) {
      this.renderer.dispose();
      this.renderer = null;
    }

    if (this.raycaster) {
      this.raycaster = null;
    }
  }
}
