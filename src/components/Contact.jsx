// ContactPage.js
import React from 'react';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    // Handle form submission (you can send the form data to your server here)

    // Display a success message
    toast.success('Message sent successfully!', { position: 'bottom-center' });
  };

  return (
    <div className="bg-gray-100 min-h-screen">

      <div className="container mx-auto mt-8">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold mb-6 text-gray-800">Contact Us</h1>
          <p className="text-lg text-gray-600 mb-4">
            Have a question or feedback? Reach out to us using the form below.
          </p>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-600 text-sm font-medium mb-2"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                {...register("name", { required: "Name is required" })}
                className={`border focus:border-blue-500 focus:outline-none ${
                  errors.name ? "border-red-500" : "border-gray-300"
                } rounded-md p-2 w-full transition duration-300`}
                placeholder="Enter your name"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-600 text-sm font-medium mb-2"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "Invalid email address",
                  },
                })}
                className={`border focus:border-blue-500 focus:outline-none ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } rounded-md p-2 w-full transition duration-300`}
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-gray-600 text-sm font-medium mb-2"
              >
                Your Message
              </label>
              <textarea
                id="message"
                {...register("message", { required: "Message is required" })}
                rows="4"
                className={`border focus:border-blue-500 focus:outline-none ${
                  errors.message ? "border-red-500" : "border-gray-300"
                } rounded-md p-2 w-full transition duration-300`}
                placeholder="Enter your message"
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default ContactPage;
