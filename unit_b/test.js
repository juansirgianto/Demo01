const images = ["../unit_a/ENTRANCE.jpg", "../unit_a/BED.jpg", "../unit_a/STUDYROOM.jpg", "../unit_a/ENSUITE.jpg", "../unit_a/KITCHEN.jpg", "../unit_a/LOUNGE.jpg", "../unit_a/PATIO_BACKYARD.jpg"];
let index = 0;

const carouselImage = document.getElementById("carouselImage");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const thumbnails = document.querySelectorAll(".thumbnail");

let isClosingByClickOutside = false;

function updateCarousel() {
  carouselImage.src = images[index];

  thumbnails.forEach((thumb, idx) => {
    if (idx === index) {
      thumb.classList.add("border-blue-500");
      thumb.classList.remove("border-transparent");
    } else {
      thumb.classList.remove("border-blue-500");
      thumb.classList.add("border-transparent");
    }
  });
}

prevBtn.addEventListener("click", () => {
  index = (index - 1 + images.length) % images.length;
  updateCarousel();
});

nextBtn.addEventListener("click", () => {
  index = (index + 1) % images.length;
  updateCarousel();
});

// Klik thumbnail
thumbnails.forEach((thumb) => {
  thumb.addEventListener("click", () => {
    index = parseInt(thumb.dataset.index);
    updateCarousel();
  });
});

// Inisialisasi pertama
updateCarousel();

// arrow thumbnail
const scrollContainer = document.getElementById("thumbnailScroll");
  const scrollAmount = 150; // jumlah pixel scroll setiap klik

  document.getElementById("thumbLeft").addEventListener("click", () => {
    scrollContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  });

  document.getElementById("thumbRight").addEventListener("click", () => {
    scrollContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  });

// active button
  const galleryBtn = document.getElementById('gallery');
  const floorPlanBtn = document.getElementById('floorPlan');
  const carouselWrapper = document.getElementById('carouselWrapper');
  const carousel = document.getElementById('carouselContainer');
  const thumbnail = document.getElementById('thumbnailScroll');
  const floorplanWrapper = document.getElementById('floorplanWrapper');
  const floorplan = document.getElementById('floorplanImage');
  const floorplanlvl = document.getElementById('floorPlanlvl');

  // Fungsi helper untuk update tombol aktif
  function setActiveButton(active) {
    if (active === 'gallery') {
      galleryBtn.classList.add('bg-[#f5f4ea]', 'text-[#2e3047]');
      floorPlanBtn.classList.remove('bg-[#f5f4ea]', 'text-[#2e3047]');
    } else if (active === 'floorplan') {
      floorPlanBtn.classList.add('bg-[#f5f4ea]', 'text-[#2e3047]');
      galleryBtn.classList.remove('bg-[#f5f4ea]', 'text-[#2e3047]');
    } else {
    // Jika tidak ada tombol aktif
    galleryBtn.classList.remove('bg-[#f5f4ea]', 'text-[#2e3047]');
    floorPlanBtn.classList.remove('bg-[#f5f4ea]', 'text-[#2e3047]');
  }
  }

  galleryBtn.addEventListener('click', () => {
    carouselWrapper.classList.remove('hidden');
    carousel.classList.remove('hidden');
    thumbnail.classList.remove('hidden');
    floorplan.classList.add('hidden');
    floorplanlvl.classList.add('hidden');
    floorplanWrapper.classList.add('hidden');
    setActiveButton('gallery');

    if (window.innerWidth <= 964) {
  document.getElementById('homedescription').classList.add('hidden');
}
  });

  floorPlanBtn.addEventListener('click', () => {
    carousel.classList.add('hidden');
    thumbnail.classList.add('hidden');
    floorplanWrapper.classList.remove('hidden');
    floorplan.classList.remove('hidden');
    floorplanlvl.classList.remove('hidden');
    carouselWrapper.classList.add('hidden');
    setActiveButton('floorplan');

    floorplan.src = floorplanImages[1];
  setActiveFloor(1);

  if (window.innerWidth <= 964) {
  document.getElementById('homedescription').classList.add('hidden');
}
  });

  // Set default active
  // setActiveButton('gallery');

  // Tombol lantai floorplan
const floor1Btn = document.getElementById('floor1');
const floor2Btn = document.getElementById('floor2');

// Gambar floorplan sesuai lantai
const floorplanImages = {
  1: '../unit_a/1707CC_REY_UNIT A3_REV5.png',  // default image
  2: '../unit_a/1937_CC_REY_UNIT A2_REV 1.png'          // ganti ini sesuai file kamu
};

// Event saat tombol 1 ditekan
floor1Btn.addEventListener('click', () => {
  floorplan.src = floorplanImages[1];
  setActiveFloor(1);
});

floor2Btn.addEventListener('click', () => {
  floorplan.src = floorplanImages[2];
  setActiveFloor(2);
});

const floor1Container = document.getElementById('floor1Container');
const floor2Container = document.getElementById('floor2Container');

function setActiveFloor(floor) {
  if (floor === 1) {
    floor1Container.classList.add('bg-[#f5f4ea]', 'text-[#2e3047]');
    floor1Container.classList.remove('bg-[#2e3047]', 'text-[#f5f4ea]');

    floor2Container.classList.remove('bg-[#f5f4ea]', 'text-[#2e3047]');
    floor2Container.classList.add('bg-[#2e3047]', 'text-[#f5f4ea]');
  } else if (floor === 2) {
    floor2Container.classList.add('bg-[#f5f4ea]', 'text-[#2e3047]');
    floor2Container.classList.remove('bg-[#2e3047]', 'text-[#f5f4ea]');

    floor1Container.classList.remove('bg-[#f5f4ea]', 'text-[#2e3047]');
    floor1Container.classList.add('bg-[#2e3047]', 'text-[#f5f4ea]');
  }
}

// Menutup Gallery saat klik di luar area carousel
carouselWrapper.addEventListener('click', (e) => {
  // Deteksi hanya jika klik langsung ke background luar
  if (e.target === e.currentTarget) {
    isClosingByClickOutside = true;
    carouselWrapper.classList.add('hidden');
    setActiveButton(null);

    // Tampilkan kembali deskripsi hanya jika benar klik luar
    if (window.innerWidth <= 964 && isClosingByClickOutside) {
      document.getElementById('homedescription').classList.remove('hidden');
    }

    // Reset flag
    isClosingByClickOutside = false;
  }
});


// Menutup Floorplan saat klik di luar gambar floorplan
floorplanWrapper.addEventListener('click', (e) => {
  if (e.target === floorplanWrapper) {
    floorplanWrapper.classList.add('hidden');
    floorplanlvl.classList.add('hidden');
    setActiveButton(null);
  }
  if (window.innerWidth <= 964) {
      document.getElementById('homedescription').classList.remove('hidden');
    }
});

// Fungsi untuk masuk ke fullscreen
function openFullscreen(element) {
  if (element.requestFullscreen) {
    element.requestFullscreen();
  } else if (element.webkitRequestFullscreen) { // Safari
    element.webkitRequestFullscreen();
  } else if (element.msRequestFullscreen) { // IE11
    element.msRequestFullscreen();
  }
}

// Event listener pada carousel
carouselImage.addEventListener('click', () => {
  openFullscreen(carouselImage);
});

// Event listener pada floorplan
floorplan.addEventListener('click', () => {
  openFullscreen(floorplan);
});