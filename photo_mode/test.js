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
    img.setAttribute("y", "-50");
  }
}
window.addEventListener("resize", adjustImagePosition);
window.addEventListener("DOMContentLoaded", adjustImagePosition);

// Path Responsive
function adjustPathPosition() {
  const ids = ["clusterPath", "clusterPath2", "clusterPath3", "clusterPath4"];
  const width = window.innerWidth;

  ids.forEach(id => {
    const path = document.getElementById(id);
    if (!path) return;

    if (width <= 768) {
      path.setAttribute("transform", "translate(-500, -50)");
    } else if (width <= 1024) {
      path.setAttribute("transform", "translate(-500, -50)");
    } else {
      path.setAttribute("transform", "translate(0, 0)");
    }
  });
}

window.addEventListener("resize", adjustPathPosition);
window.addEventListener("DOMContentLoaded", adjustPathPosition);

// Label A
function adjustLabelAPosition() {
  const width = window.innerWidth;

  const rectA = document.getElementById("label-rectA");
  const unitA = document.getElementById("label-unitA");
  const statusA = document.getElementById("label-statusA");
  const priceA = document.getElementById("label-priceA");

  if (!rectA || !unitA || !statusA || !priceA) return;

  if (width <= 768) {
    // HP
    rectA.setAttribute("x", "240");
    rectA.setAttribute("y", "100");

    unitA.setAttribute("x", "300");
    unitA.setAttribute("y", "120");

    statusA.setAttribute("x", "300");
    statusA.setAttribute("y", "140");

    priceA.setAttribute("x", "300");
    priceA.setAttribute("y", "160");

  } else if (width <= 1024) {
    // Tablet
    rectA.setAttribute("x", "203");
    rectA.setAttribute("y", "354");

    unitA.setAttribute("x", "263");
    unitA.setAttribute("y", "374");

    statusA.setAttribute("x", "263");
    statusA.setAttribute("y", "394");

    priceA.setAttribute("x", "263");
    priceA.setAttribute("y", "414");

  } else {
    // Desktop
    // rectB.setAttribute("x", "600");
    // rectB.setAttribute("y", "375");

    // unitB.setAttribute("x", "660");
    // unitB.setAttribute("y", "395");

    // statusB.setAttribute("x", "660");
    // statusB.setAttribute("y", "415");

    // priceB.setAttribute("x", "660");
    // priceB.setAttribute("y", "435");
  }
}

window.addEventListener("resize", adjustLabelAPosition);
window.addEventListener("DOMContentLoaded", adjustLabelAPosition);

// Label B
function adjustLabelBPosition() {
  const width = window.innerWidth;

  const rectB = document.getElementById("label-rectB");
  const unitB = document.getElementById("label-unitB");
  const statusB = document.getElementById("label-statusB");
  const priceB = document.getElementById("label-priceB");

  if (!rectB || !unitB || !statusB || !priceB) return;

  if (width <= 768) {
    // HP
    rectB.setAttribute("x", "240");
    rectB.setAttribute("y", "100");

    unitB.setAttribute("x", "300");
    unitB.setAttribute("y", "120");

    statusB.setAttribute("x", "300");
    statusB.setAttribute("y", "140");

    priceB.setAttribute("x", "300");
    priceB.setAttribute("y", "160");

  } else if (width <= 1024) {
    // Tablet
    rectB.setAttribute("x", "104");
    rectB.setAttribute("y", "323");

    unitB.setAttribute("x", "164");
    unitB.setAttribute("y", "343");

    statusB.setAttribute("x", "164");
    statusB.setAttribute("y", "363");

    priceB.setAttribute("x", "164");
    priceB.setAttribute("y", "383");

  } else {
    // Desktop
    // rectB.setAttribute("x", "600");
    // rectB.setAttribute("y", "375");

    // unitB.setAttribute("x", "660");
    // unitB.setAttribute("y", "395");

    // statusB.setAttribute("x", "660");
    // statusB.setAttribute("y", "415");

    // priceB.setAttribute("x", "660");
    // priceB.setAttribute("y", "435");
  }
}

window.addEventListener("resize", adjustLabelBPosition);
window.addEventListener("DOMContentLoaded", adjustLabelBPosition);


// Label C
function adjustLabelCPosition() {
  const width = window.innerWidth;

  // Ambil elemen
  const rectC = document.getElementById("label-rectC");
  const unitC = document.getElementById("label-unitC");
  const statusC = document.getElementById("label-statusC");
  const priceC = document.getElementById("label-priceC");

  // Pastikan semua ada
  if (!rectC || !unitC || !statusC || !priceC) return;

  if (width <= 768) {
    // HP
    unitC.setAttribute("x", "300");
    statusC.setAttribute("x", "300");
    priceC.setAttribute("x", "300");
  } else if (width <= 1024) {
    // Tablet
    rectC.setAttribute("x", "840");
    rectC.setAttribute("y", "550");

    unitC.setAttribute("x", "900");
    unitC.setAttribute("y", "570");

    statusC.setAttribute("x", "900");
    statusC.setAttribute("y", "590");

    priceC.setAttribute("x", "900");
    priceC.setAttribute("y", "610");
  } else {
    // Desktop
    unitC.setAttribute("x", "1407");
    statusC.setAttribute("x", "1407");
    priceC.setAttribute("x", "1407");
  }
}

window.addEventListener("resize", adjustLabelCPosition);
window.addEventListener("DOMContentLoaded", adjustLabelCPosition);

// Label D
function adjustLabelDPosition() {
  const width = window.innerWidth;

  const rectD = document.getElementById("label-rectD");
  const unitD = document.getElementById("label-unitD");
  const statusD = document.getElementById("label-statusD");
  const priceD = document.getElementById("label-priceD");

  if (!rectD || !unitD || !statusD || !priceD) return;

  if (width <= 768) {
    // HP
    rectD.setAttribute("x", "240");
    rectD.setAttribute("y", "100");

    unitD.setAttribute("x", "300");
    unitD.setAttribute("y", "120");

    statusD.setAttribute("x", "300");
    statusD.setAttribute("y", "140");

    priceD.setAttribute("x", "300");
    priceD.setAttribute("y", "160");

  } else if (width <= 1024) {
    // Tablet
    rectD.setAttribute("x", "458");
    rectD.setAttribute("y", "388");

    unitD.setAttribute("x", "518");
    unitD.setAttribute("y", "408");

    statusD.setAttribute("x", "518");
    statusD.setAttribute("y", "428");

    priceD.setAttribute("x", "518");
    priceD.setAttribute("y", "448");

  } else {
    // Desktop
    // rectB.setAttribute("x", "600");
    // rectB.setAttribute("y", "375");

    // unitB.setAttribute("x", "660");
    // unitB.setAttribute("y", "395");

    // statusB.setAttribute("x", "660");
    // statusB.setAttribute("y", "415");

    // priceB.setAttribute("x", "660");
    // priceB.setAttribute("y", "435");
  }
}

window.addEventListener("resize", adjustLabelDPosition);
window.addEventListener("DOMContentLoaded", adjustLabelDPosition);

const clusters = ['A', 'B', 'C', 'D']; // Tambahkan 'C', 'D' jika ada

// Event listener untuk setiap cluster unit
clusters.forEach(unit => {
  const clusterEl = document.getElementById(`cluster-${unit}`);
  const descToShow = document.getElementById(`homedescription${unit}`);

  if (clusterEl && descToShow) {
    clusterEl.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation(); // Penting: mencegah event bubbling ke document

      // Sembunyikan semua deskripsi
      clusters.forEach(u => {
        const desc = document.getElementById(`homedescription${u}`);
        if (desc) desc.classList.add('hidden');
      });

      // Tampilkan deskripsi unit yang diklik
      descToShow.classList.remove('hidden');
    });
  }
});

// Mencegah klik dalam deskripsi menutupnya
clusters.forEach(unit => {
  const desc = document.getElementById(`homedescription${unit}`);
  if (desc) {
    desc.addEventListener('click', function (e) {
      e.stopPropagation(); // Jangan trigger penutupan global
    });
  }
});

// Klik di mana pun pada dokumen untuk menyembunyikan semua deskripsi
document.addEventListener('click', function () {
  clusters.forEach(unit => {
    const desc = document.getElementById(`homedescription${unit}`);
    if (desc) desc.classList.add('hidden');
  });
});