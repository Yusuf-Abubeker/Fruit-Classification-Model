// ModelTest.js
import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { loadModel, predictImage } from "./model";
import { preprocessImage } from "./ImageProcessing";

const ModelTest = () => {
  const [model, setModel] = useState(null);
  const [predictions, setPredictions] = useState({ label: "", probability: 0 });
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const initializeModel = async () => {
      try {
        const loadedModel = await loadModel();
        setModel(loadedModel);
        setLoading(false);
      } catch (error) {
        console.error("Failed to initialize the model:", error);
        toast.error("Failed to initialize the model.", {
          position: "bottom-center",
        });
      }
    };

    initializeModel();
  }, []);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  const testModel = async () => {
    try {
      setLoading(true); // Set loading state when testing

      if (!selectedImage) {
        console.error("Please upload an image before testing the model.");
        toast.error("Please upload an image before testing the model.", {
          position: "bottom-center",
        });
        setLoading(false);
        return;
      }

      const img = document.getElementById("test-image");
      const processedImage = preprocessImage(img);
      const predictions = await predictImage(model, processedImage);

      setPredictions(predictions);
      setLoading(false); // Reset loading state after testing
    } catch (error) {
      console.error("Error testing the model:", error);
      toast.error("Error testing the model", {
        position: "bottom-center",
      });
      setLoading(false); // Reset loading state on error
    }
  };

  return (
    <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">
          Image Classifier
        </h1>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="mb-4 p-3 border w-full rounded"
        />
        {selectedImage && (
          <img
            id="test-image"
            src={selectedImage}
            alt="Test Image"
            className="mb-4 w-full h-64 object-cover rounded transition-transform transform hover:scale-105"
          />
        )}
        <button
          onClick={testModel}
          className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition duration-300"
        >
          {loading ? "Testing..." : "Test Model"}
        </button>
        {loading && (
          <div className="mt-4 text-center">
            <div className="loader ease-linear border-t-4 border-blue-500 border-solid h-6 w-6 mx-auto"></div>
            <p className="text-sm text-gray-600 mt-2">Testing in progress...</p>
          </div>
        )}
        {!loading && predictions.label && (
          <>
            <div className="mt-4">
              <p className="text-lg font-semibold">Predicted Class:</p>
              <p className="text-xl text-blue-700">{predictions.label}</p>
            </div>
            <div className="mt-2">
              <p className="text-lg font-semibold">Predicted Probability:</p>
              <p className="text-xl text-green-700">
                {predictions.probability.toFixed(4)}
              </p>
            </div>
          </>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default ModelTest;
