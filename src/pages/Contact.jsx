import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { useTheme } from '../ThemeContext'; // Adjust the path as needed

const Contact = () => {
  const { isDarkMode } = useTheme(); // Get dark mode state

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Sending...');

    emailjs
      .send(
        'service_gpc9m5e',
        'template_xbohk5l',
        formData,
        'u4s2Fhgf3ElcZ-T92'
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          setStatus('Message sent successfully!');
          setFormData({
            name: '',
            email: '',
            message: '',
          });
        },
        (error) => {
          console.error('FAILED...', error);
          setStatus('Failed to send message. Please try again later.');
        }
      );
  };

  return (
    <div className={`container mx-auto px-5 py-20 grid grid-cols-1 md:grid-cols-2 gap-8 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      {/* Location Section */}
      <div className={`p-6 rounded-lg shadow-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <h2 className={`text-2xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-black'}`}>Our Location</h2>
        <img
          src="contact.jpg"
          alt="Location"
          className="w-full h-60 object-cover rounded-lg mb-4"
          loading="lazy"
        />
        <p className={`mb-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
          <strong>Address:</strong> 33 / Aadarsh Pacchat varg society, Near Gokulam dairy, Athwa lines surat, 395001
        </p>
        <p className={`mb-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
          <strong>Phone:</strong> 91+ <span className="text-indigo-500 font-bold">9879747956</span> OR <span className="text-indigo-500 font-bold">9426231643</span>
        </p>
        <p className={`mb-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
          <strong>Email:</strong> Capfoundation.philip@gmail.com
        </p>
        <iframe
          title="location"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3720.3797558550286!2d72.809132!3d21.177068!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e741b14ac09%3A0x93f7fa0face22f76!2sAdarsh%20Society%2C%20Athwa%2C%20Surat%2C%20Gujarat%20395001!5e0!3m2!1sen!2sin!4v1727928331405!5m2!1sen!2sin"
          width="100%"
          height="200"
          allowFullScreen=""
          loading="lazy"
          className="rounded-lg"
        ></iframe>
      </div>

      {/* Contact Form Section */}
      <div className={`p-6 rounded-lg shadow-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <h2 className={`text-2xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-black'}`}>Get in Touch</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className={`block ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`mt-1 block w-full p-2 border ${isDarkMode ? 'border-gray-600 bg-gray-700 text-white' : 'border-gray-300 text-black'}`}
              placeholder="Your Name"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className={`block ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`mt-1 block w-full p-2 border ${isDarkMode ? 'border-gray-600 bg-gray-700 text-white' : 'border-gray-300 text-black'}`}
              placeholder="Your Email"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className={`block ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className={`mt-1 block w-full p-2 border ${isDarkMode ? 'border-gray-600 bg-gray-700 text-white' : 'border-gray-300 text-black'}`}
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className={`font-semibold py-2 px-4 rounded ${isDarkMode ? 'bg-indigo-600 text-white' : 'bg-indigo-600 text-white'}`}
          >
            Send Message
          </button>
        </form>
        {status && <p className={`mt-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{status}</p>}
      </div>
    </div>
  );
};

export default Contact;
