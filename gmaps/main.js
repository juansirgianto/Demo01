let map, overlay;

function initMap() {
  // Inisialisasi peta
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -8.8, lng: 115.2 }, // Contoh: Bukit, Bali
    zoom: 17,
    mapId: "YOUR_MAP_ID", // opsional jika pakai peta kustom
    disableDefaultUI: true
  });

  // Tambah custom WebGL overlay untuk Three.js
  overlay = new google.maps.WebGLOverlayView();

  overlay.onAdd = () => {
    // Setup scene Three.js
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera();
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    overlay.scene = scene;
    overlay.camera = camera;
    overlay.renderer = renderer;

    // Tambah objek 3D
    const geometry = new THREE.BoxGeometry(10, 10, 10);
    const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
  };

  overlay.onContextRestored = ({ gl }) => {
    overlay.renderer.domElement.style.position = 'absolute';
    document.body.appendChild(overlay.renderer.domElement);
  };

  overlay.onDraw = ({ transformer }) => {
    const latLngAltitude = transformer.fromLatLngAltitude({
      lat: -8.8,
      lng: 115.2,
      altitude: 10
    });

    overlay.camera.projectionMatrix = transformer.getCameraMatrix();
    overlay.scene.children[0].position.copy(latLngAltitude);
    overlay.renderer.render(overlay.scene, overlay.camera);
    overlay.requestRedraw();
  };

  overlay.setMap(map);
}

window.initMap = initMap;

// Tunggu Maps siap
window.addEventListener('load', () => {
  initMap();
});
