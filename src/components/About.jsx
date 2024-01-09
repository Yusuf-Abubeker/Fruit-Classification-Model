// AboutPage.js
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialLight } from "react-syntax-highlighter/dist/esm/styles/prism";

const codeSnippet = `
import tensorflow as tf
from tensorflow.keras import layers, models
from tensorflow.keras.preprocessing.image import ImageDataGenerator
from tensorflow.keras.applications import MobileNetV2

# Define constants
IMAGE_SIZE = (224, 224)  # MobileNetV2 input size
BATCH_SIZE = 32
EPOCHS = 10

# Define the path to your dataset
train_data_dir = 'C:/Users/Yusuf Bin/Downloads/archive/Vegetable Images/train'
validation_data_dir = 'C:/Users/Yusuf Bin/Downloads/archive/Vegetable Images/validation'

# Create data generators with data augmentation for training
train_datagen = ImageDataGenerator(
    rescale=1./255,
    shear_range=0.2,
    zoom_range=0.2,
    horizontal_flip=True
)

train_generator = train_datagen.flow_from_directory(
    train_data_dir,
    target_size=IMAGE_SIZE,
    batch_size=BATCH_SIZE,
    class_mode='categorical'
)

# Data generator for validation data (only rescaling)
validation_datagen = ImageDataGenerator(rescale=1./255)

validation_generator = validation_datagen.flow_from_directory(
    validation_data_dir,
    target_size=IMAGE_SIZE,
    batch_size=BATCH_SIZE,
    class_mode='categorical'
)

# Load MobileNetV2 as the base model (excluding the top)
base_model = MobileNetV2(
    input_shape=(IMAGE_SIZE[0], IMAGE_SIZE[1], 3),
    include_top=False,
    weights='imagenet'
)

# Freeze the base model layers
for layer in base_model.layers:
    layer.trainable = False

# Build the model on top of the base model
model = models.Sequential()

model.add(base_model)
model.add(layers.GlobalAveragePooling2D())
model.add(layers.Dense(512, activation='relu'))
model.add(layers.Dropout(0.5))
model.add(layers.Dense(len(train_generator.class_indices), activation='softmax'))

# Compile the model
model.compile(optimizer='adam',
              loss='categorical_crossentropy',
              metrics=['accuracy'])

# Train the model
model.fit(
    train_generator,
    steps_per_epoch=train_generator.samples // BATCH_SIZE,
    epochs=EPOCHS,
    validation_data=validation_generator,
    validation_steps=validation_generator.samples // BATCH_SIZE
)

# Save the model
model.save('fruit_classification_model.h5')
`;

const AboutPage = () => {
  const classList = [
    "Banana",
    "Bean",
    "Bitter_Gourd",
    "Bottle_Gourd",
    "Brinjal",
    "Broccoli",
    "Cabbage",
    "Capsicum",
    "Carrot",
    "Cauliflower",
    "Cucumber",
    "Papaya",
    "Potato",
    "Pumpkin",
    "Radish",
    "Tomato",
  ];
  return (
    <div className="bg-gray-100 min-h-screen">


      <div className="container mx-auto mt-8">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold mb-6 text-gray-800">About Us</h1>
          <p className="text-lg text-gray-600 mb-4">
            Welcome to our Image Classifier application!
          </p>
          <p className="text-lg text-gray-600 mb-4">
            Our mission is to provide an easy-to-use image classification tool
            that helps users identify objects in images effortlessly.
          </p>
          <p className="text-lg text-gray-600 mb-4">
            Feel free to explore the features of our application and test the
            model with your own images. If you have any questions or feedback,
            please reach out to us!
          </p>

          <div className="mt-8">
            <h2 className="text-3xl font-semibold mb-4">How Our Model Works</h2>
            <p className="text-lg text-gray-600 mb-4">
              Here is a snippet of the code that powers our image classification
              model:
            </p>

            <SyntaxHighlighter language="python" style={materialLight}>
              {codeSnippet}
            </SyntaxHighlighter>

            <p className="text-lg text-gray-600 mt-4">
              This code defines the architecture, data augmentation, and
              training process of our model using TensorFlow and Keras. Explore
              our application to experience the power of our image
              classification model!
            </p>
          </div>

          <div className="mt-8">
            <h2 className="text-3xl font-semibold mb-4">Supported Classes</h2>
            <p className="text-lg text-gray-600 mb-4">
              Our model is trained to classify images into the following
              classes:
            </p>
            <ul className="list-disc pl-6">
              {classList.map((className) => (
                <li key={className} className="text-gray-700">
                  {className}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
