import * as THREE from 'https://unpkg.com/three@0.160.0/build/three.module.js';

export function createPins(scene) {
  const loader = new THREE.TextureLoader();

  function createPin(position, svgURL, name, status, price) {
  const pinGroup = new THREE.Group();
  pinGroup.userData = { name, status, price };

  loader.load(svgURL, texture => {
    const material = new THREE.SpriteMaterial({ map: texture, transparent: true });
    const sprite = new THREE.Sprite(material);
    sprite.scale.set(0.1, 0.1, 1);
    sprite.center.set(0.5, 0); // Ujung bawah pin menyentuh lantai
    sprite.position.set(0, 0.1, 0);
    pinGroup.add(sprite);

    pinGroup.position.copy(position); // Set posisi SETELAH sprite ditambahkan
    scene.add(pinGroup);
  });

  return pinGroup;
}

const pin0 = createPin(
  new THREE.Vector3(0.18, 0.08, 0.15),
  'assets/pin1.svg',
  'Unit A',
  'Sold',
  '1,325,000 $'
);

const pin1 = createPin(
  new THREE.Vector3(-0.18, 0.1, 0.36),
  'assets/pin2.svg',
  'Unit B',
  'Available',
  '985,000 $'
);

const pin2 = createPin(
  new THREE.Vector3(1.15, 0.02, -0.57),
  'assets/pin3.svg',
  'Unit C',
  'Booked',
  '695,000 $'
);

const pin3 = createPin(
  new THREE.Vector3(0.48, 0.05, -0.2),
  'assets/pin2.svg',
  'Unit D',
  'Available',
  '2,200,000 $'
);

  const pins = [pin0, pin1, pin2, pin3];

  const pinPOIs = [
    {
      id: 'pin0',
      mesh: pin0,
      position: pin0.position,
      descriptionId: 'pindescription',
      camera_position: new THREE.Vector3(0.66, 0.68, 1.01),
      camera_target: pin0.position,
    },
    {
      id: 'pin1',
      mesh: pin1,
      position: pin1.position,
      descriptionId: 'pindescription1',
      camera_position: new THREE.Vector3(-0.07, 0.68, 1.24),
      camera_target: pin1.position,
    },
    {
      id: 'pin2',
      mesh: pin2,
      position: pin2.position,
      descriptionId: 'pindescription2',
      camera_position: new THREE.Vector3(0.68, 0.68, 0.20),
      camera_target: pin2.position,
    },
    {
      id: 'pin3',
      mesh: pin3,
      position: pin3.position,
      descriptionId: 'pindescription3',
      camera_position: new THREE.Vector3(0.80, 0.68, 0.57),
      camera_target: pin3.position,
    },
  ];

  return { pins, pinPOIs };
}
