import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Modal from "./Modal";
import { client, urlFor } from "../sanityImageUrl";
import { useTheme } from "../ThemeContext"; // Import the useTheme hook
import "./Property.css"; // Import your custom CSS file for animations

const Properties = () => {
  const { isDarkMode } = useTheme(); // Get the isDarkMode value from the context
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [availabilityFilter, setAvailabilityFilter] = useState("");
  const [sortOrder, setSortOrder] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const query = '*[_type == "property"]';
      const data = await client.fetch(query);
      setProperties(data);
      setFilteredProperties(data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    let filtered = properties;

    if (searchTerm) {
      const lowercasedTerm = searchTerm.toLowerCase();
      filtered = filtered.filter(
        (property) =>
          property.name.toLowerCase().includes(lowercasedTerm) ||
          property.location.toLowerCase().includes(lowercasedTerm) ||
          property.propertyType?.toLowerCase().includes(lowercasedTerm) ||
          property.propertyStatus?.toLowerCase().includes(lowercasedTerm) ||
          property.availableFor?.toLowerCase().includes(lowercasedTerm)
      );
    }

    if (availabilityFilter) {
      filtered = filtered.filter(
        (property) =>
          property.availableFor.toLowerCase() ===
          availabilityFilter.toLowerCase()
      );
    }

    if (sortOrder) {
      filtered = [...filtered].sort((a, b) => {
        const priceA = a.price || 0;
        const priceB = b.price || 0;
        if (sortOrder === "lowToHigh") {
          return priceA - priceB; // Sort in ascending order
        } else if (sortOrder === "highToLow") {
          return priceB - priceA; // Sort in descending order
        }
        return 0;
      });
    }

    setFilteredProperties(filtered);
  }, [searchTerm, availabilityFilter, sortOrder, properties]);

  const handleMorePhotos = (property) => {
    setSelectedProperty(property);
    setIsModalOpen(true);
  };

  const buildVideoUrl = (video) => {
    if (video?.asset?._ref) {
      // eslint-disable-next-line
      const [_, id, extension] = video.asset._ref.split("-");
      return `https://cdn.sanity.io/files/${client.config().projectId}/${
        client.config().dataset
      }/${id}.${extension}`;
    }
    return "";
  };

  return (
    <div
      className={`container mx-auto px-5 py-20 ${
        isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black"
      }`}
    >
      <h1 className="text-4xl font-bold text-center mb-8">Properties</h1>

      {/* Sorting, Availability Filter, and Search Bar Layout */}
      <div className="flex flex-col md:flex-row justify-between mb-8">
        {/* Sorting Dropdown */}
        <div className="flex justify-center md:w-1/4 mb-4 md:mb-0">
          <select
            className={`border rounded px-4 py-2 ${
              isDarkMode ? "bg-gray-700 text-white" : "bg-white"
            }`}
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="">Sort By</option>
            <option value="lowToHigh">Price: Low to High</option>
            <option value="highToLow">Price: High to Low</option>
          </select>
        </div>

        {/* Availability Filter Buttons */}
        <div className="flex justify-center space-x-4 mb-4 md:mb-0 md:w-1/2">
          <button
            className={`px-4 py-2 rounded ${
              availabilityFilter === "Sale"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
            onClick={() => setAvailabilityFilter("Sale")}
          >
            Sale
          </button>
          <button
            className={`px-4 py-2 rounded ${
              availabilityFilter === "Rent"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
            onClick={() => setAvailabilityFilter("Rent")}
          >
            Rent
          </button>
          <button
            className={`px-4 py-2 rounded ${
              availabilityFilter === ""
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
            onClick={() => setAvailabilityFilter("")}
          >
            All
          </button>
        </div>

        {/* Search Bar */}
        <div className="flex justify-center md:w-1/4">
          <input
            type="text"
            placeholder="Search by name, location, type..."
            className={`border rounded px-4 py-2 w-full ${
              isDarkMode ? "bg-gray-700 text-white" : "bg-white"
            }`}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Property Cards */}
      {filteredProperties.length > 0 ? (
        filteredProperties.map((property) => (
          <div
            key={property._id}
            className={`property-card flex flex-col lg:flex-row ${
              isDarkMode ? "bg-gray-700" : "bg-white"
            } p-6 mb-6 rounded-lg shadow-[0_2px_8px_0px_rgba(0,0,0,0.4)] animate-fade-in`}
          >
            {/* Left Section: Property Details */}
            <div className="lg:w-1/2 w-full space-y-6 lg:mr-6">
              <h2
                className={`text-2xl font-bold ${
                  isDarkMode ? "text-indigo-400" : "text-indigo-600"
                }`}
              >
                {property.name}
              </h2>

              <div className="text-lg">
                <strong>Price:</strong> <span>{property.price}</span>
              </div>
              <div className="text-lg">
                <strong>Property Type:</strong>{" "}
                <span>{property.propertyType || "N/A"}</span>
              </div>
              <div className="text-lg">
                <strong>Property Status:</strong>{" "}
                <span>{property.propertyStatus || "N/A"}</span>
              </div>
              <div className="text-lg">
                <strong>Area:</strong>{" "}
                <span>{property.area || "N/A"} sqft</span>
              </div>
              <div className="text-lg">
                <strong>Bedrooms:</strong>{" "}
                <span>{property.bedrooms || "N/A"}</span>
              </div>
              <div className="text-lg">
                <strong>Bathrooms:</strong>{" "}
                <span>{property.bathrooms || "N/A"}</span>
              </div>
              <div className="text-lg">
                <strong>Location:</strong> <span>{property.location}</span>
              </div>
              <div className="text-lg">
                <strong>Description:</strong>{" "}
                <span>{property.description}</span>
              </div>
              <div className="text-lg">
                <strong>Available For:</strong>{" "}
                <span>{property.availableFor || "N/A"}</span>
              </div>
              <div>
                <h3
                  className={`text-xl font-medium ${
                    isDarkMode ? "text-gray-300" : "text-gray-800"
                  } mb-3`}
                >
                  Features:
                </h3>
                <ul
                  className={`list-disc pl-5 space-y-1 ${
                    isDarkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {property.features?.map((feature, index) => (
                    <li
                      key={index}
                      className={isDarkMode ? "text-gray-300" : "text-gray-800"}
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                to="/contact"
                className="contact-button inline-block text-center bg-indigo-600 text-white rounded-lg px-6 py-3 hover:bg-indigo-700 transition duration-300 ease-in-out w-auto"
              >
                <span className="text-lg font-semibold">
                  Contact for Details
                </span>
              </Link>
            </div>

            {/* Right Section: Image and Video Gallery Preview */}
            <div className="lg:w-1/2 w-full space-y-6 lg:mt-0 mt-6">
              <div className="grid grid-cols-2 gap-4">
                {property.imageGallery?.slice(0, 3).map((image, index) => (
                  <img
                    key={index}
                    src={urlFor(image).url()}
                    alt={`Property ${index + 1}`}
                    className="w-full h-48 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out"
                  />
                ))}
                <button
                  className={`w-full h-48 flex items-center justify-center rounded-lg shadow-lg ${
                    isDarkMode
                      ? "bg-gray-600 text-white"
                      : "bg-gray-100 text-indigo-600"
                  } font-semibold hover:bg-indigo-100 transition duration-300 ease-in-out`}
                  onClick={() => handleMorePhotos(property)}
                >
                  Click Here for More Photos
                </button>
              </div>
              {property.videoGallery?.slice(0, 1).map((video, index) => (
                <video
                  key={index}
                  controls
                  className="w-full h-48 object-cover rounded-lg shadow-lg"
                  src={buildVideoUrl(video)}
                >
                  Your browser does not support the video tag.
                </video>
              ))}
            </div>
          </div>
        ))
      ) : (
        <p className="text-lg text-center text-gray-600">
          No properties found.
        </p>
      )}

      {/* Modal Component */}
      {selectedProperty && (
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          content={[
            ...selectedProperty.imageGallery.map((img) => ({
              type: "image",
              src: urlFor(img).url(),
            })),
            ...selectedProperty.videoGallery.map((vid) => ({
              type: "video",
              src: buildVideoUrl(vid),
            })),
          ]}
          isDarkMode={isDarkMode} // Pass the dark mode state
        />
      )}
    </div>
  );
};

export default Properties;
