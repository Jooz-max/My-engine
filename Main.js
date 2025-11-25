// ----------------------------
// Left Pane IMPORT button logic
// ----------------------------
const importBtn = document.getElementById("import-btn");

importBtn.addEventListener("click", () => {
    alert("IMPORT button clicked! You can add drag-and-drop or file loading logic here later.");
});

// ----------------------------
// Right Pane CODE button logic
// ----------------------------
const codeBtn = document.getElementById("btn-code");
const codeOptions = document.getElementById("code-options");

codeBtn.addEventListener("click", () => {
    codeOptions.style.display = codeOptions.style.display === "flex" ? "none" : "flex";
});

// ----------------------------
// THREE.js 3D Scene Setup (scrollable, grid, gizmo)
// ----------------------------
const center = document.getElementById("center-viewport");

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x151515);

const camera = new THREE.PerspectiveCamera(75, center.clientWidth / center.clientHeight, 0.1, 1000);
camera.position.set(5, 5, 5);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(center.clientWidth, center.clientHeight);
center.innerHTML = "";
center.appendChild(renderer.domElement);

// Grid helper
const grid = new THREE.GridHelper(20, 20, 0x3a8bff, 0x333333);
scene.add(grid);

// Orbit Controls
const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;

// Light
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(10, 10, 10);
scene.add(light);

// Gizmo placeholder
const gizmoBox = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshStandardMaterial({ color: 0xff0000, opacity: 0.5, transparent: true })
);
scene.add(gizmoBox);

const transformControls = new THREE.TransformControls(camera, renderer.domElement);
transformControls.attach(gizmoBox);
scene.add(transformControls);

// Handle window resize
window.addEventListener('resize', () => {
    camera.aspect = center.clientWidth / center.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(center.clientWidth, center.clientHeight);
});

// Animate loop
function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}
animate();
