// model.js
import * as tf from "@tensorflow/tfjs";
import { loadLayersModel } from "@tensorflow/tfjs";

const loadModel = async () => {
  try {
    const loadedModel = await loadLayersModel("/tfmodel/model.json");
    return loadedModel;
  } catch (error) {
    console.error("Error loading the model:", error);
    throw error;
  }
};

const predictImage = async (model, processedImage) => {
  try {
    const predictions = await model.predict(processedImage).data();
    const predictedClass = tf.argMax(predictions).dataSync()[0];
    const classIndices = {
      0: "Banana",
      1: "Bean",
      2: "Bitter Gourd",
      3: "Bottle Gourd",
      4: "Brinjal",
      5: "Broccoli",
      6: "Cabbage",
      7: "Capsicum",
      8: "Carrot",
      9: "Cauliflower",
      10: "Cucumber",
      11: "Papaya",
      12: "Potato",
      13: "Pumpkin",
      14: "Radish",
      15: "Tomato",
    };
    const predictedLabel = classIndices[predictedClass];
    const predictedProbability = predictions[predictedClass];
    return { label: predictedLabel, probability: predictedProbability };
  } catch (error) {
    console.error("Error making predictions:", error);
    throw error;
  }
};

export { loadModel, predictImage };
