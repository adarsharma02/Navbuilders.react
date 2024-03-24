import React, { useState } from "react";
import Navbar from "./Navbar";

function App() {
  const [formData, setFormData] = useState({
    textInput1: "",
    textInput2: "",
    textInput3: "",
    image: null,
    imageBase64: null, // Add a new state for base64 representation
  });
  const [hidePage, setHidePage] = useState(true);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setFormData({
        ...formData,
        image: file.name,
        imageBase64: reader.result, // Set base64 representation
      });
    };

    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setHidePage(true);
  };

  const showNavbar = () => {
    setHidePage(false);
  };

  return (
    <>
      <Navbar {...formData} />
      {!hidePage && (
        <div className="App bg-gray-200 min-h-screen flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold mb-4">
              Form with Text Inputs and Image Upload
            </h1>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="textInput1"
                  className="block text-sm font-medium text-gray-700"
                >
                  Text Input 1:
                </label>
                <input
                  type="text"
                  id="textInput1"
                  name="textInput1"
                  value={formData.textInput1}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="textInput2"
                  className="block text-sm font-medium text-gray-700"
                >
                  Text Input 2:
                </label>
                <input
                  type="text"
                  id="textInput2"
                  name="textInput2"
                  value={formData.textInput2}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="textInput3"
                  className="block text-sm font-medium text-gray-700"
                >
                  Text Input 3:
                </label>
                <input
                  type="text"
                  id="textInput3"
                  name="textInput3"
                  value={formData.textInput3}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="image"
                  className="block text-sm font-medium text-gray-700"
                >
                  Upload Image:
                </label>
                <input
                  type="file"
                  id="image"
                  name="image"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                />
              </div>
              <button
                type="submit"
                className="inline-block px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
      <button
        onClick={showNavbar}
        type="button"
        className="inline-block px-12 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
      >
        Set Your navbar
      </button>
    </>
  );
}

export default App;
