let gmapLoaded = false;
let gmapReadyResolver = null;

// Posisi default
const DEFAULT_POS = { lat: 51.192124, lng: 0.729676 };
const DEFAULT_ZOOM = 18;

// Callback saat script Google Maps selesai load
window.onGMapReady = function () {
  gmapLoaded = true;
  if (typeof gmapReadyResolver === "function") gmapReadyResolver();
};

// Lazy load Google Maps script
export function loadGoogleMapsOnce() {
  if (gmapLoaded || document.getElementById("gmaps-script")) {
    return Promise.resolve();
  }
  return new Promise((resolve) => {
    gmapReadyResolver = resolve;
    const s = document.createElement("script");
    s.id = "gmaps-script";
    s.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyD9GBnHqF_dKV_o4aLBVKBNhRCpLS-Nw80&callback=onGMapReady`;
    s.async = true;
    s.defer = true;
    document.head.appendChild(s);
  });
}

// Buka modal + tampilkan peta
// maps.js
export function openNeighborhoodDiscovery(path = '/Demo01/neighborhood/nd.html') {
  const modal = document.getElementById('mapModal');
  const content = document.getElementById('mapContent');
  const frame = document.getElementById('ndFrame');

  // set src hanya saat dibuka agar ringan
  if (frame.src === 'about:blank') {
    frame.src = path; // pastikan path sesuai lokasi file nd.html kamu
  }

  modal.classList.remove('hidden');
  // trigger reflow biar animasi jalan
  void content.offsetWidth;
  content.classList.remove('translate-x-[100vw]', 'opacity-0');
}

export function closeMapModal() {
  const modal = document.getElementById('mapModal');
  const content = document.getElementById('mapContent');
  const frame = document.getElementById('ndFrame');

  content.classList.add('translate-x-[100vw]', 'opacity-0');
  setTimeout(() => {
    modal.classList.add('hidden');
    // optional: kosongkan src untuk hentikan aktivitas di dalam iframe
    // frame.src = 'about:blank';
  }, 400);
}

