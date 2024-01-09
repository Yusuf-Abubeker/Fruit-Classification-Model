// imageProcessing.js
import * as tf from '@tensorflow/tfjs';

const IMAGE_SIZE = 224;

const preprocessImage = (img) => {
  return tf.tidy(() => {
    const tensor = tf.browser.fromPixels(img).toFloat();
    const resized = tf.image.resizeBilinear(tensor, [IMAGE_SIZE, IMAGE_SIZE]);
    const normalized = resized.div(tf.scalar(255.0));
    const batched = normalized.expandDims(0);
    return batched;
  });
};

export { preprocessImage };
