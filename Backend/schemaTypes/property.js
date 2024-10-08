// schemas/property.js
export default {
  name: 'property',
  type: 'document',
  title: 'Property',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Property Name',
    },
    {
      name: 'price',
      type: 'string', // Keeping price as a string for easier display and formatting
      title: 'Price',
      description: 'Enter the property price (e.g., ₹27,000,000/Onwards).',
    },
    {
      name: 'propertyType',
      type: 'string',
      title: 'Property Type',
      description: 'Type of property (e.g., Flats/Apartments, Villas, Independent Houses).',
    },
    {
      name: 'propertyStatus',
      type: 'string',
      title: 'Property Status',
      description: 'Current status of the property (e.g., New Projects, Ready to Move, Under Construction).',
    },
    {
      name: 'location',
      type: 'string',
      title: 'Location',
      description: 'Enter the complete address of the property.',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'Provide a brief description of the property.',
    },
    {
      name: 'imageGallery',
      type: 'array',
      title: 'Image Gallery',
      of: [{ type: 'image' }],
      options: {
        hotspot: true, // Enables image cropping and positioning
      },
    },
    {
      name: 'videoGallery',
      type: 'array',
      title: 'Video Gallery',
      of: [{ type: 'file' }],
    },
    {
      name: 'features',
      type: 'array',
      title: 'Features',
      of: [{ type: 'string' }],
      description: 'Add features such as "Swimming Pool", "Gym", "Garden", etc.',
    },
    {
      name: 'area',
      type: 'number',
      title: 'Area (sqft)',
      description: 'Specify the total area of the property in square feet.',
    },
    {
      name: 'bedrooms',
      type: 'number',
      title: 'Bedrooms',
      description: 'Specify the number of bedrooms in the property.',
    },
    {
      name: 'bathrooms',
      type: 'number',
      title: 'Bathrooms',
      description: 'Specify the number of bathrooms in the property.',
    },
    {
      name: 'availableFor',
      type: 'string',
      title: 'Available For',
      description: 'Specify whether the property is available for Sale or Rent.',
      options: {
        list: [
          { title: 'Sale', value: 'Sale' },
          { title: 'Rent', value: 'Rent' }
        ], // Dropdown options for Sale or Rent
        layout: 'radio', // Optional: display options as radio buttons
      },
    }
  ],
};
