import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';
import imageminPngquant from 'imagemin-pngquant';

(async () => {
  await imagemin(['*/*.{jpg,png,svg}'], {
    destination: 'build/img',
    plugins: [imageminPngquant({ speed: 1, quality: [0.8, 0.8] })],
  });
})();

(async () => {
  await imagemin(['*/*.{jpg,png,svg}'], {
    destination: 'build/img',
    plugins: [imageminWebp({ method: 6, quality: 80 })],
  });
})();
