import { Component, AfterViewInit, ElementRef, ViewChild, Inject, PLATFORM_ID } from '@angular/core';
import * as THREE from 'three';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-wheel',
  standalone: true,
  imports: [],
  templateUrl: './wheel.component.html',
  styleUrls: ['./wheel.component.css']
})
export class WheelComponent implements AfterViewInit {
  @ViewChild('rendererContainer', { static: false }) rendererContainer!: ElementRef;
  private colorPicker: HTMLInputElement;
  private raycaster: THREE.Raycaster;
  private mouse: THREE.Vector2;
  private selectedShape: THREE.Mesh | null = null;
  private selectedColor: string = ''; // Variable to store the selected color

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.raycaster = new THREE.Raycaster();
    this.mouse = new THREE.Vector2();
    // Initialize color picker to null (we'll assign it only when running on the browser)
    this.colorPicker = null!;
  }

  ngAfterViewInit(): void {
    // Ensure that this code only runs in the browser environment
    if (!isPlatformBrowser(this.platformId)) return;

    // Now we can safely access document and other browser-specific objects
    this.colorPicker = document.getElementById('colorPicker') as HTMLInputElement;

    const container = this.rendererContainer.nativeElement;
    const width = container.clientWidth;
    const height = container.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x000000, 0); // Transparent background
    container.appendChild(renderer.domElement);

    // Add ambient and directional lighting
    const ambientLight = new THREE.AmbientLight(0x555555, 1);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5).normalize();
    scene.add(directionalLight);

    const radius = 2;
    const segments = 8;
    const colors = [
      '#FF0000', '#FF7F00', '#FFFF00', '#00FF00',
      '#00FFFF', '#0000FF', '#8B00FF', '#800080'
    ];

    const meshes: THREE.Mesh[] = [];

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
        metalness: 0.5,
        roughness: 0.4
      });
      const mesh = new THREE.Mesh(geometry, material);
      mesh.userData = { colorIndex: i }; // Store the index for later use
      meshes.push(mesh);
      scene.add(mesh);

      // Add edges
      const edgeGeometry = new THREE.EdgesGeometry(geometry);
      const edgeMaterial = new THREE.LineBasicMaterial({ color: 'black', linewidth: 3 });
      const edge = new THREE.LineSegments(edgeGeometry, edgeMaterial);
      scene.add(edge);

      // Optional glowing effect
      const glowMaterial = new THREE.ShaderMaterial({
        uniforms: {
          color: { value: new THREE.Color(0xffff00) },
          opacity: { value: 0.8 }
        },
        vertexShader: `void main() { gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
        fragmentShader: `void main() { gl_FragColor = vec4(color, opacity); }`,
        side: THREE.BackSide,
        blending: THREE.AdditiveBlending,
        transparent: true
      });
      const glowMesh = new THREE.Mesh(geometry, glowMaterial);
      glowMesh.scale.set(1.05, 1.05, 1.05);
      scene.add(glowMesh);
    }

    // Listen for mouse click events on the canvas
    renderer.domElement.addEventListener('click', (event) => this.onMouseClick(event, meshes, camera, scene, renderer));

    // Event listener for the color picker
    if (this.colorPicker) {
      this.colorPicker.addEventListener('input', (event: Event) => {
        if (this.selectedShape) {
          const newColor = (event.target as HTMLInputElement).value;
          if (this.selectedShape.material instanceof THREE.MeshStandardMaterial) {
            this.selectedShape.material.color.set(newColor); // Update color of selected shape
            this.selectedColor = newColor; // Store the new color in the variable
            console.log('Selected Color:', this.selectedColor); // Print the color to the console
          }
        }
      });
    }

    // Hide the color picker when clicked outside
    window.addEventListener('click', (event) => {
      if (!container.contains(event.target as Node)) {
        if (this.colorPicker) {
          this.colorPicker.style.display = 'none'; // Hide color picker if clicked outside
        }
      }
    });

    function animate() {
      requestAnimationFrame(animate);
      scene.rotation.z += 0.01;
      scene.children.forEach((child, index) => {
        if (child instanceof THREE.Mesh) {
          child.rotation.z += 0.01 * (index % 2 === 0 ? 1 : -1);
        }
      });
      renderer.render(scene, camera);
    }

    animate();
  }

  // Mouse click handler
  onMouseClick(event: MouseEvent, meshes: THREE.Mesh[], camera: THREE.PerspectiveCamera, scene: THREE.Scene, renderer: THREE.WebGLRenderer) {
    if (!isPlatformBrowser(this.platformId)) return; // Ensure this runs only in the browser

    const rect = renderer.domElement.getBoundingClientRect();
    this.mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    this.mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

    // Set up raycaster
    this.raycaster.setFromCamera(this.mouse, camera);

    // Check for intersections
    const intersects = this.raycaster.intersectObjects(meshes);

    if (intersects.length > 0) {
      this.selectedShape = intersects[0].object as THREE.Mesh;  // Select the intersected object
      if (this.colorPicker) {
        this.colorPicker.style.display = 'block'; // Show color picker
        if (this.selectedShape.material instanceof THREE.MeshStandardMaterial) {
          this.colorPicker.value = this.selectedShape.material.color.getHexString(); // Set current color to color picker
        }
      }
    }
  }
}
