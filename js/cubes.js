import * as THREE from 'https://unpkg.com/three@0.160.0/build/three.module.js';

export function createCubes(scene) {
  // 🔺 Cube 0
  const cubeGeometry = new THREE.BoxGeometry(0.25, 0.13, 0.15);
  const cubeMaterial = new THREE.MeshBasicMaterial({
    color: 0xff0000,
    transparent: true,
    opacity: 0.2
  });
  const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
  cube.position.set(0.18, 0.05, 0.15);
  cube.rotation.set(0, Math.PI / 5.9, 0);
  cube.userData.status = 'sold';
  scene.add(cube);

  // 🔺 Cube 1
  const cubeGeometry1 = new THREE.BoxGeometry(0.25, 0.13, 0.15);
  const cubeMaterial1 = new THREE.MeshBasicMaterial({
    color: 0x0000ff,
    transparent: true,
    opacity: 0.2
  });
  const cube1 = new THREE.Mesh(cubeGeometry1, cubeMaterial1);
  cube1.position.set(-0.18, 0.07, 0.36);
  cube1.rotation.set(0, Math.PI / 30, 0);
  cube1.userData.status = 'available';
  scene.add(cube1);

  // // 🔺 Cube 2
  const cubeGeometry2 = new THREE.BoxGeometry(0.17, 0.10, 0.22);
  const cubeMaterial2 = new THREE.MeshBasicMaterial({
    color: 0xffff00,
    transparent: true,
    opacity: 0.2
  });
  const cube2 = new THREE.Mesh(cubeGeometry2, cubeMaterial2);
  cube2.position.set(1.15, 0, -0.57);
  cube2.rotation.set(0, Math.PI / 0.78, 0);
  cube2.userData.status = 'booked';
  scene.add(cube2);

  // // 🔺 Cube 3
  // const cubeGeometry3 = new THREE.BoxGeometry(0.25, 0.25, 0.28);
  // const cubeMaterial3 = new THREE.MeshBasicMaterial({
  //   color: 0x0000ff,
  //   transparent: true,
  //   opacity: 0.2
  // });
  // const cube3 = new THREE.Mesh(cubeGeometry3, cubeMaterial3);
  // cube3.position.set(0.52, 0.05, -0.74);
  // cube3.rotation.set(0, Math.PI / 3.3, 0);
  // cube3.userData.status = 'available';
  // scene.add(cube3);
  // // 🔺 Cube 4
  // const cubeGeometry4 = new THREE.BoxGeometry(0.25, 0.25, 0.28);
  // const cubeMaterial4 = new THREE.MeshBasicMaterial({
  //   color: 0x0000ff,
  //   transparent: true,
  //   opacity: 0.2
  // });
  // const cube4 = new THREE.Mesh(cubeGeometry4, cubeMaterial4);
  // cube4.position.set(-0.20, 0.05, 0.15);
  // cube4.rotation.set(0, Math.PI / 2, 0);
  // cube4.userData.status = 'available';
  // scene.add(cube4);

  const cubes = [cube, cube1, cube2];
  // const cubes = [cube, cube1, cube2, cube3, cube4];

  const cubePOIs = [
    {
      id: 'cube0',
      mesh: cube,
      position: cube.position,
      descriptionId: 'cubedescription',
      camera_position: new THREE.Vector3(0.66, 0.68, 1.01),
      camera_target: new THREE.Vector3(0.18, 0.05, 0.15),
    },
    {
      id: 'cube1',
      mesh: cube1,
      position: cube1.position,
      descriptionId: 'cubedescription1',
      camera_position: new THREE.Vector3(-0.07, 0.68, 1.24),
      camera_target: new THREE.Vector3(-0.18, 0.07, 0.36),
    },
    {
      id: 'cube2',
      mesh: cube2,
      position: cube2.position,
      descriptionId: 'cubedescription2',
      camera_position: new THREE.Vector3(0.68, 0.68, 0.20),
      camera_target: new THREE.Vector3(1.15, 0, -0.57),
    },
    // {
    //   id: 'cube3',
    //   mesh: cube3,
    //   position: cube3.position,
    //   descriptionId: 'cubedescription3'
    // },
    // {
    //   id: 'cube4',
    //   mesh: cube4,
    //   position: cube4.position,
    //   descriptionId: 'cubedescription4'
    // }
  ];

  return { cubes, cubePOIs };
}
