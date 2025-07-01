import { Viewer } from '@photo-sphere-viewer/core';
import { MarkersPlugin } from '@photo-sphere-viewer/markers-plugin';

// 🧩 Register custom element (jika belum)
class CustomMarkerElement extends HTMLElement {
  constructor() {
    super();
    const dom = this.attachShadow({ mode: 'open' });

    const style = document.createElement('style');
    style.textContent = `
:host {
  display: block;
  position: relative;
  width: 50px;
  height: 50px;
}
button {
  width: 100%;
  height: 100%;
  border: none;
  background: none;
  color: white;
  border-radius: 50%;
  cursor: pointer;
  filter: drop-shadow(0 10px 5px #2e3047);
}
.tooltip {
  position: absolute;
  bottom: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%);
  background: #2e3047;
  color: white;
  padding: 5px 10px;
  border-radius: 8px;
  white-space: nowrap;
  font-weight: 500;
  opacity: 0;
  transition: opacity 0.3s;
}
.tooltip::after {
  content: '';
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -6px;
  border-width: 6px;
  border-style: solid;
  border-color: #2e3047 transparent transparent transparent;
}
button:hover + .tooltip {
  opacity: 1;
}
`;
    dom.appendChild(style);

    const button = document.createElement('button');
    button.innerHTML = `
      <svg viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="25" fill="currentColor" />
        <circle cx="50" cy="50" r="40" stroke-width="10" fill="none" stroke="currentColor" />
      </svg>
    `;
    dom.appendChild(button);

    const tooltip = document.createElement('div');
    tooltip.classList.add('tooltip');
    tooltip.innerHTML = '<slot></slot>';
    dom.appendChild(tooltip);

    button.addEventListener('click', this.handleClick.bind(this));
    button.addEventListener('touchstart', this.handleClick.bind(this), { passive: true });
  }

  handleClick() {
    this.dispatchEvent(new CustomEvent('marker-click', {
      bubbles: true,
      composed: true,
      detail: { id: this.getAttribute('id') },
    }));
  }
}

customElements.define('custom-marker', CustomMarkerElement);

// 🎥 Inisialisasi viewer
const viewer = new Viewer({
  container: document.getElementById('viewer'),
  panorama: './ENTRANCE_.jpg',
  defaultZoomLvl: 0,
  plugins: [
    [MarkersPlugin]
  ],
});

const markers = viewer.getPlugin(MarkersPlugin);

// 🔄 Semua marker HTML diambil dari DOM
const markerElements = {
  'study-marker': document.getElementById('custom-marker-element'),
  'kitchen-marker': document.getElementById('custom-marker-element2'),
  'bedroom-marker': document.getElementById('custom-marker-element3'),
  'entrance': document.getElementById('custom-marker-element4'),
  'kitchen-patio': document.getElementById('custom-marker-element5'),
  'lounge-marker': document.getElementById('custom-marker-element6'),
  'patio-marker': document.getElementById('custom-marker-element7'),
  'balcony-marker': document.getElementById('custom-marker-element8'),
  'bathroom-marker': document.getElementById('custom-marker-element9'),
};

// 🧭 Daftar scene
const scenes = {
  entrance: {
    panorama: './ENTRANCE_.jpg',
    markers: [
      {
        id: 'to-study',
        element: markerElements['study-marker'],
        position: { yaw: 1.3, pitch: -0.2 },
      },
      {
        id: 'to-kitchen',
        element: markerElements['kitchen-marker'],
        position: { yaw: 0.2, pitch: -0.1 },
      },
      {
        id: 'to-bedroom',
        element: markerElements['bedroom-marker'],
        position: { yaw: -0.1, pitch: 0.4 },
      },
    ],
  },
  studyroom: {
    panorama: './study.jpg',
    markers: [
      {
        id: 'back-to-entrance',
        element: markerElements['entrance'],
        position: { yaw: -1.5, pitch: -0.2 },
      },
    ],
  },
  kitchen: {
    panorama: './kitchen.jpg',
    markers: [
      {
        id: 'back-to-entrance',
        element: markerElements['entrance'],
        position: { yaw: -3.5, pitch: -0.2 },
      },
      {
        id: 'to-kitchen-patio',
        element: markerElements['kitchen-patio'],
        position: { yaw: -0.3, pitch: -0.1 },
      },
      {
        id: 'to-lounge',
        element: markerElements['lounge-marker'],
        position: { yaw: -1.75, pitch: -0.1 },
      },
    ],
  },
  kitchenpatio: {
    panorama: './kitchenpatio.jpg',
    markers: [
      {
        id: 'back-to-entrance',
        element: markerElements['entrance'],
        position: { yaw: 2.6, pitch: -0.08 },
      },
      {
        id: 'to-patio',
        element: markerElements['patio-marker'],
        position: { yaw: 0.2, pitch: -0.1 },
      },
      {
        id: 'to-lounge',
        element: markerElements['lounge-marker'],
        position: { yaw: 3.2, pitch: -0.1 },
      },
    ],
  },
  patio: {
    panorama: './patio.jpg',
    markers: [
      {
        id: 'to-kitchen-patio',
        element: markerElements['kitchen-patio'],
        position: { yaw: 2, pitch: -0.2 },
      },
    ],
  },
  lounge: {
    panorama: './lounge.jpg',
    markers: [
      {
        id: 'to-kitchen',
        element: markerElements['kitchen-marker'],
        position: { yaw: 1.3, pitch: -0.2 },
      },
    ],
  },
  bedroom: {
    panorama: './bedroom.jpg',
    markers: [
      {
        id: 'back-to-entrance',
        element: markerElements['entrance'],
        position: { yaw: -3.3, pitch: -0.3 },
      },
      {
        id: 'to-balcony',
        element: markerElements['balcony-marker'],
        position: { yaw: -0.2, pitch: -0.2 },
      },
      {
        id: 'to-bathroom',
        element: markerElements['bathroom-marker'],
        position: { yaw: -2.3, pitch: -0.2 },
      },
    ],
  },
  balcony: {
    panorama: './balcony.jpg',
    markers: [
      {
        id: 'to-bedroom',
        element: markerElements['bedroom-marker'],
        position: { yaw: -0.65, pitch: -0.2 },
      },
    ],
  },
  bathroom: {
    panorama: './bathroom.jpg',
    markers: [
      {
        id: 'to-bedroom',
        element: markerElements['bedroom-marker'],
        position: { yaw: 2.8, pitch: -0.2 },
      },
    ],
  },
};

// 🌐 Fungsi untuk pindah scene
function switchScene(sceneName) {
  const scene = scenes[sceneName];
  if (!scene) return;
  markers.clearMarkers();

  viewer.setPanorama(scene.panorama).then(() => {
    scene.markers.forEach(marker => {
      markers.addMarker({
        id: marker.id,
        element: marker.element,
        position: marker.position,
        anchor: 'bottom center',
        zIndex: 10,
      });
    });
  });
}

// 🔁 Marker click handler
document.addEventListener('marker-click', (e) => {
  const id = e.detail.id;

  if (id === 'custom-marker-element') {
    switchScene('studyroom');
  } else if (id === 'custom-marker-element2') {
    switchScene('kitchen');
  } else if (id === 'custom-marker-element3') {
    switchScene('bedroom');
  } else if (id === 'custom-marker-element4') {
    switchScene('entrance');
  } else if (id === 'custom-marker-element5') {
    switchScene('kitchenpatio');
  } else if (id === 'custom-marker-element6') {
    switchScene('lounge');
  } else if (id === 'custom-marker-element7') {
    switchScene('patio');
  } else if (id === 'custom-marker-element8') {
    switchScene('balcony');
  } else if (id === 'custom-marker-element9') {
    switchScene('bathroom');
  }
});

// 🚀 Load scene pertama
switchScene('entrance');

// 🎮 Tombol VR
document.getElementById('vrButton').addEventListener('click', () => {
  window.open('./vr.html', '_blank');
});
