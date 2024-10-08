// Import required dependencies
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { client } from '../sanityClient'; // Import your Sanity client
import { FaChartBar, FaHome, FaKey } from 'react-icons/fa'; // Import specific icons from react-icons
import { useTheme } from '../ThemeContext'; // Import the ThemeContext
import './Home.css'; // Import CSS file

const Home = () => {
  const { isDarkMode } = useTheme(); // Get dark mode state
  const [featuredImages, setFeaturedImages] = useState([]); // State to hold featured images
  const [loading, setLoading] = useState(true); // Loading state
  const [activeSection, setActiveSection] = useState('home'); // State to manage active section

  // Fetch featured images from Sanity
  useEffect(() => {
    const fetchFeaturedImages = async () => {
      const query = `*[_type == "featuredProperty"]{
        images[]{asset->{url}}
      }`;
      try {
        const data = await client.fetch(query);
        const images = data.flatMap(property => property.images.map(image => image.asset.url));
        setFeaturedImages(images);
      } catch (error) {
        console.error("Error fetching featured images:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedImages();
  }, []);

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };

  // Toggle function
  const toggleSection = (section) => {
    setActiveSection(section);
  };

  if (loading) {
    return <div>Loading...</div>; // Loading state
  }

  return (
    <div className={`text-gray-800 body-font ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      {/* Navbar Section */}
      <nav className={`navbar ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <ul className={`${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
          <li onClick={() => toggleSection('home')}>Home</li>
          <li onClick={() => toggleSection('contact')}>Contact</li>
        </ul>
      </nav>

      {/* Render content based on active section */}
      {activeSection === 'home' ? (
        <>
          {/* Landscape Image Section with Carousel */}
          <section className="relative mb-10">
            {/* Slider for featured images */}
            <Slider {...settings}>
              {featuredImages.map((imageUrl, index) => (
                <div key={index}>
                  <img
                    alt={`featured-image-${index}`}
                    className="object-cover object-center w-full h-96"
                    src={imageUrl}
                  />
                </div>
              ))}
            </Slider>
          </section>

          {/* Highlighted Explore Properties Button */}
          <div className="highlight-container">
            <a href="/properties" className="highlighted-text">
              Explore Properties
            </a>
          </div>

          {/* About Section */}
          <section className={`container pt-4 pb-2 mb-0 mx-auto px-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`} id="about">
            <div className="lg:w-4/6 mx-auto px-2">
              <div className="flex flex-col sm:flex-row px-4">
                <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8 px-2">
                  <div className={`w-24 h-24 rounded-full inline-flex items-center justify-center ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'} text-gray-400`}>
                    <img
                      className="rounded-full h-24 w-24"
                      src="logo.png"
                      alt="Profile"
                      loading="lazy" // Apply lazy loading
                    />
                  </div>
                  <div className="flex flex-col items-center text-center justify-center mt-4">
                    <h2 className="font-medium title-font text-lg">
                      Dsouza Philip
                    </h2>
                    <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                    <p className="text-base">
                      I Am A Real-Estate Agent Who Has Been In Business Since 2012, With Many Successful Deals With Various Clients.
                    </p>
                  </div>
                </div>
                <div className={`sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left px-2`}>
                  <p className="leading-relaxed text-lg mb-4">
                    I am a licensed professional working with property channel partners working in Surat, Gujarat. Best known for renting and selling properties in Surat - Athwalines, Ghod Dod, Bhatar, Vesu, Pal Adajan, Jahangirpura.
                  </p>
                  <p className="leading-relaxed text-lg mb-4">
                    PROPERTY CHANNEL PARTNERS
                  </p>
                  <p className="leading-relaxed text-lg mb-4">
                    For more information contact me on - 
                  </p>
                  <a
                    href="/contact"
                    className="text-indigo-500 inline-flex items-center"
                  >
                    Get in Touch
                  </a>
                </div>
              </div>
            </div>
          </section>


          {/* Additional Feature Section */}
<section className={`body-font ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
<div className={`container px-5 py-6 mx-auto flex flex-wrap ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}>
    <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
      <div className="relative w-full h-full max-h-[35rem] max-w-4xl mx-auto">
        <img
          alt="feature"
          className="object-cover object-center w-full h-full"
          src="02.jpg"
          loading="lazy" // Apply lazy loading
        />
      </div>
    </div>
    <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
      <div className="flex flex-col mb-10 lg:items-start items-center">
        <div className="flex items-center justify-center w-16 h-16 rounded-full shadow-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white mb-5">
          <FaChartBar className="w-10 h-10" />
        </div>
        <div className="flex-grow">
          <h2 className={`text-lg title-font font-medium mb-3 ${isDarkMode ? 'text-gray-200' : 'text-gray-900'}`}>
            Since 2012
          </h2>
          <p className={`leading-relaxed text-base ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}>
            I have been in business since 2012 and have been providing great service with many happy customers.
          </p>
        </div>
      </div>
      <div className="flex flex-col mb-10 lg:items-start items-center">
        <div className="flex items-center justify-center w-16 h-16 rounded-full shadow-lg bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 text-white mb-5">
          <FaHome className="w-10 h-10" />
        </div>
        <div className="flex-grow">
          <h2 className={`text-lg title-font font-medium mb-3 ${isDarkMode ? 'text-gray-200' : 'text-gray-900'}`}>
            Licensed Real Estate Agent
          </h2>
          <p className={`leading-relaxed text-base ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}>
            Get your properties sold or bought with trustworthy professionals like myself.
          </p>
        </div>
      </div>
      <div className="flex flex-col mb-10 lg:items-start items-center">
        <div className="flex items-center justify-center w-16 h-16 rounded-full shadow-lg bg-gradient-to-r from-red-400 via-yellow-500 to-orange-500 text-white mb-5">
          <FaKey className="w-10 h-10" />
        </div>
        <div className="flex-grow">
          <h2 className={`text-lg title-font font-medium mb-3 ${isDarkMode ? 'text-gray-200' : 'text-gray-900'}`}>
            "Every Dream is Important"
          </h2>
          <p className={`leading-relaxed text-base ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}>
            We are here to provide what your dream is, no matter how small or how big.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

        </>
      ) : (
        // Add content for the contact section if needed
        <div>Contact Section</div>
      )}
    </div>
  );
};

export default Home;
