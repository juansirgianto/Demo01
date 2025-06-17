import { PLYLoader } from './libs/PLYLoader.js';

LumaSplatsThree.fromPLY = async function (url) {
  return new Promise((resolve, reject) => {
    const loader = new PLYLoader();
    loader.load(
      url,
      function (geometry) {
        geometry.computeVertexNormals();
        const material = new THREE.PointsMaterial({ size: 0.01, vertexColors: true });
        const points = new THREE.Points(geometry, material);
        resolve(points); // hasilnya Points biasa, bukan LumaSplat
      },
      undefined,
      function (error) {
        reject(error);
      }
    );
  });
};
