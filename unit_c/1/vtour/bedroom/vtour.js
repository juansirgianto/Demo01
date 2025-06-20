import { Viewer } from '@photo-sphere-viewer/core';
import { MarkersPlugin } from '@photo-sphere-viewer/markers-plugin';

// 🎯 Custom Marker Element with Animated Tooltip
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
  padding: 0;
  border: none;
  background: none;
  color: white;
  border-radius: 50%;
  cursor: pointer;
  filter: drop-shadow(0 10px 5px rgba(0, 0, 0, 0.2));
}

.tooltip {
  box-sizing: border-box;
  width: auto;
  left: calc(50% - 40px);
  position: absolute;
  bottom: calc(100% + 10px);
  background: rgba(30, 30, 30, 0.8);
  color: white;
  text-shadow: 0 1px #000;
  border-radius: 10px;
  transform-origin: 50% calc(100% + 35px);
  transform: rotate(30deg);
  opacity: 0;
  padding: 5px;
  font-weight: 500;
  white-space: nowrap; /* ✅ Hindari break ke bawah */
}

.tooltip-balcony{
  left: calc(50% - 70px);
}
.tooltip.bottom {
  bottom: auto;
  top: calc(100% + 10px);
  transform-origin: 50% -35px;
}

.tooltip.hovered {
  animation: show 300ms ease forwards;
}
.tooltip.hiding {
  animation: hide 200ms ease forwards;
}

.tooltip::after {
  content: '';
  border: 10px solid transparent;
  border-top-color: rgba(30,30,30,0.8);
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -10px;
}
.tooltip.bottom::after {
  border-top-color: transparent;
  border-bottom-color: rgba(30,30,30,0.8);
  top: auto;
  bottom: 100%;
}

button:hover + .tooltip {
  animation: show 300ms ease forwards;
  opacity: 1;
}

@keyframes show {
  0% { transform: rotate(30deg); opacity: 0; }
  70% { transform: rotate(-10deg); }
  100% { transform: rotate(0deg); opacity: 1; }
}
@keyframes hide {
  0% { transform: rotate(0deg); opacity: 1; }
  100% { transform: rotate(30deg); opacity: 0; }
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

    // Tambahkan class khusus jika id berbeda
    const markerId = this.getAttribute('id');
    if (markerId === 'custom-marker-element2') {
      tooltip.classList.add('tooltip-balcony');
    } else if (markerId === 'custom-marker-element') {
      tooltip.classList.add('tooltip-entrance');
    } else if (markerId === 'custom-marker-element3') {
      tooltip.classList.add('tooltip-bathroom');
    }

    tooltip.innerHTML = '<slot></slot>';
    dom.appendChild(tooltip);

    button.addEventListener('click', () => {
      this.dispatchEvent(new CustomEvent('marker-click', {
        bubbles: true,
        composed: true,
        detail: { id: this.getAttribute('id') },
      }));
    });

    button.addEventListener('mouseleave', () => {
      tooltip.classList.add('hiding');
    });

    dom.addEventListener('animationend', () => {
      tooltip.classList.remove('hiding');
    });
  }

  updateMarker({ position, viewerSize }) {
    const tooltip = this.shadowRoot.querySelector('.tooltip');
    if (tooltip) {
      tooltip.classList.toggle('bottom', position.y < viewerSize.height / 3);
    }
  }
}

// 🧩 Register custom element
customElements.define('custom-marker', CustomMarkerElement);

// 🎥 Create Viewer
const viewer = new Viewer({
  container: document.getElementById('viewer'),
  panorama: './bedroom.jpg',
  defaultZoomLvl: 0,
  plugins: [
    [MarkersPlugin, {
      markers: [
        {
          id: 'go-entrance',
          element: document.getElementById('custom-marker-element'),
          position: { yaw: -3.3, pitch: -0.3 },
          anchor: 'bottom center',
          zIndex: 10,
        },
        {
          id: 'go-balcony',
          element: document.getElementById('custom-marker-element2'),
          position: { yaw: -0.2, pitch: -0.2 },
          anchor: 'bottom center',
          zIndex: 10,
        },
        {
          id: 'go-bathroom',
          element: document.getElementById('custom-marker-element3'),
          position: { yaw: -2.3, pitch: -0.2 },
          anchor: 'bottom center',
          zIndex: 10,
        },
      ],
    }],
  ],
});

// 🧭 Marker Click = Ganti Halaman
document.getElementById('custom-marker-element').addEventListener('marker-click', () => {
  window.location.href = '../'; // ganti dengan path yang kamu mau
});
document.getElementById('custom-marker-element2').addEventListener('marker-click', () => {
  window.location.href = '../balcony/'; // ganti dengan path yang kamu mau
});
document.getElementById('custom-marker-element3').addEventListener('marker-click', () => {
  window.location.href = '../bathroom/'; // ganti dengan path yang kamu mau
});
