// ./schemas/featuredProperty.js

export default {
  name: 'featuredProperty',
  title: 'Featured Property',
  type: 'document',
  fields: [
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{ type: 'image' }],
      options: {
        hotspot: true, // Enables image cropping
      },
    },
  ],
};
