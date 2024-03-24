import React, { useState } from "react";

const Navbar = (props) => {
  console.log(props);
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-white text-xl font-bold rounded-sm inline-block p-2">
              <img
                src={props.imageBase64}
                alt=""
                className="rounded-sm border border-gray-300 shadow-md  h-16 w-16 object-cover"
              />
            </span>
          </div>

          <div className="hidden md:block">
            <div className="flex items-center ml-10 space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                {props.textInput1}
              </a>
              <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                {props.textInput2}
              </a>
              <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                {props.textInput3}
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
