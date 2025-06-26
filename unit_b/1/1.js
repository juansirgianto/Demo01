const images = ["../../unit_a/1/ENTRANCE.jpg", "../../unit_a/1/BEDROOM.jpg", "../../unit_a/1/STUDYROOM.jpg", "../../unit_a/1/ENSUITE.jpg",
   "../../unit_a/1/KITCHEN.jpg", "../../unit_a/1/LOUNGE.jpg", "../../unit_a/1/PATIO_BACKYARD.jpg"];
let index = 0;

const carouselImage = document.getElementById("carouselImage");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const thumbnails = document.querySelectorAll(".thumbnail");

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
  const carousel = document.getElementById('carouselContainer');
  const thumbnail = document.getElementById('thumbnailScroll');
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
    }
  }

  galleryBtn.addEventListener('click', () => {
    carousel.classList.remove('hidden');
    thumbnail.classList.remove('hidden');
    floorplan.classList.add('hidden');
    floorplanlvl.classList.add('hidden');
    setActiveButton('gallery');
  });

  floorPlanBtn.addEventListener('click', () => {
    carousel.classList.add('hidden');
    thumbnail.classList.add('hidden');
    floorplan.classList.remove('hidden');
    floorplanlvl.classList.remove('hidden');
    setActiveButton('floorplan');

    floorplan.src = floorplanImages[1];
  setActiveFloor(1);
  });

  // Set default active
  setActiveButton('gallery');

  // Tombol lantai floorplan
const floor1Btn = document.getElementById('floor1');
const floor2Btn = document.getElementById('floor2');

// Gambar floorplan sesuai lantai
const floorplanImages = {
  1: './1707CC_REY_UNIT A3_REV5.png',  // default image
  2: './1937_CC_REY_UNIT A2_REV 1.png'          // ganti ini sesuai file kamu
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