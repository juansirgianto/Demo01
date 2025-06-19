const svg = document.getElementById("map-svg");
const width = window.innerWidth;
const height = window.innerHeight;

// Sesuaikan viewBox agar koordinat SVG = koordinat piksel
svg.setAttribute("viewBox", `0 0 ${width} ${height}`);

const container = document.getElementById("tracking-area");
const cursorInfo = document.getElementById("cursorInfo");
const xLine = document.getElementById("xLine");
const yLine = document.getElementById("yLine");

let lastCopied = ""; // untuk mencegah copy terus-terusan

container.addEventListener("mousemove", (e) => {
  const rect = container.getBoundingClientRect();
  const x = Math.round(e.clientX - rect.left);
  const y = Math.round(e.clientY - rect.top);

  const coordText = `X: ${x}, Y: ${y}`;
  cursorInfo.innerText = coordText;
  cursorInfo.style.left = `${e.clientX + 15}px`;
  cursorInfo.style.top = `${e.clientY + 15}px`;

  xLine.style.top = `${e.clientY}px`;
  yLine.style.left = `${e.clientX}px`;

  const copyText = `${x},${y}`;
  if (copyText !== lastCopied) {
    navigator.clipboard.writeText(copyText).catch((err) => {
      console.error("Copy failed: ", err);
    });
    lastCopied = copyText;
  }
});

// Bg Responsive
function adjustImagePosition() {
  const img = document.getElementById("bgImage");
  const width = window.innerWidth;

  if (width <= 768) {
    // Mobile
    img.setAttribute("x", "-500");
    img.setAttribute("y", "-100");
  } else if (width <= 1024) {
    // Tablet
    img.setAttribute("x", "-500");
    img.setAttribute("y", "-100");
  } else {
    // Desktop
    img.setAttribute("x", "0");
    img.setAttribute("y", "-120");
  }
}

// Path Responsive
function adjustPathPosition() {
  const path = document.getElementById("clusterPath");
  const width = window.innerWidth;

  if (width <= 768) {
    path.setAttribute("transform", "translate(-500, -50)");
  } else if (width <= 1024) {
    path.setAttribute("transform", "translate(-500, 20)");
  } else {
    path.setAttribute("transform", "translate(0, 0)");
  }
}

window.addEventListener("resize", adjustPathPosition);
window.addEventListener("DOMContentLoaded", adjustPathPosition);

window.addEventListener("resize", adjustImagePosition);
window.addEventListener("DOMContentLoaded", adjustImagePosition);