// Modal.js
import React from 'react';

const Modal = ({ isOpen, onClose, content, isDarkMode }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div
        className={`p-8 rounded-lg shadow-lg w-11/12 md:w-2/3 lg:w-1/2 overflow-y-auto max-h-screen ${
          isDarkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-700'
        }`}
      >
        {/* Modal Header */}
        <div className="flex justify-between items-center pb-4">
          <h2 className="text-2xl font-bold">Property Gallery</h2>
          <button
            className={`text-2xl ${
              isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'
            }`}
            onClick={onClose}
          >
            &times;
          </button>
        </div>

        {/* Modal Content: Images and Videos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {content.map((item, index) => (
            <div key={index} className="space-y-2">
              {/* If it's an image, render it as an image */}
              {item.type === 'image' ? (
                <img
                  src={item.src}
                  alt={`Property ${index + 1}`}
                  className="w-full h-48 object-cover rounded-lg shadow-lg"
                />
              ) : (
                // If it's a video, render it in an iframe
                <iframe
                  src={item.src}
                  title={`Property Video ${index + 1}`}
                  className="w-full h-48 rounded-lg shadow-lg"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Modal;
