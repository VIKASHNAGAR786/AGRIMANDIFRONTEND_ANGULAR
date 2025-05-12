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
    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(100, 100);
    container.appendChild(renderer.domElement);

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
      shape.arc(0, 0, radius, startAngle, endAngle, false);
      shape.lineTo(0, 0);

      const geometry = new THREE.ShapeGeometry(shape);
      const material = new THREE.MeshBasicMaterial({
        color: colors[i],
        side: THREE.DoubleSide
      });

      const mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);
    }

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

    // Clear any previous resources if necessary
    this.disposeThreeResources();

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    this.camera.position.z = 5;

    this.renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(this.renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0x555555, 1);
    this.scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5).normalize();
    this.scene.add(directionalLight);

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
      shape.arc(0, 0, radius, startAngle, endAngle, false);
      shape.lineTo(0, 0);

      const geometry = new THREE.ShapeGeometry(shape);
      const material = new THREE.MeshStandardMaterial({
        color: colors[i],
        side: THREE.DoubleSide,
        metalness: 0.3,
        roughness: 0.4
      });

      const mesh = new THREE.Mesh(geometry, material);
      mesh.userData = { colorIndex: i };
      this.meshes.push(mesh);
      this.scene.add(mesh);

      // Glowing effect
      const glowMaterial = new THREE.ShaderMaterial({
        uniforms: {
          color: { value: new THREE.Color(0xffff00) },
          opacity: { value: 0.4 }
        },
        vertexShader: `void main() { gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
        fragmentShader: `void main() { gl_FragColor = vec4(color, opacity); }`,
        side: THREE.BackSide,
        transparent: true,
        blending: THREE.AdditiveBlending,
      });
      const glow = new THREE.Mesh(geometry, glowMaterial);
      glow.scale.set(1.05, 1.05, 1.05);
      this.scene.add(glow);
    }

    // Handle mouse click
    this.renderer.domElement.addEventListener('click', (event: MouseEvent) => {
      event.stopPropagation();

      const rect = this.renderer!.domElement.getBoundingClientRect();
      this.mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      this.mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      this.raycaster!.setFromCamera(this.mouse, this.camera!);
      const intersects = this.raycaster!.intersectObjects(this.meshes);

      if (intersects.length > 0) {
        const selectedShape = intersects[0].object as THREE.Mesh;

        if (this.colorPicker && selectedShape.material instanceof THREE.MeshStandardMaterial) {
          const currentColor = `#${selectedShape.material.color.getHexString()}`;
          this.colorPicker.value = currentColor;

          this.colorPicker.style.left = `${event.clientX}px`;
          this.colorPicker.style.top = `${event.clientY}px`;
          this.colorPicker.style.visibility = 'visible';
          this.colorPicker.focus();
          this.colorPicker.click();
        }
      }
    });

    // Animate wheel
    const animate = () => {
      requestAnimationFrame(animate);
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
