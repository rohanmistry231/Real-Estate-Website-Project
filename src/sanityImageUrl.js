import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// Create the Sanity client
const client = createClient({
  projectId: '95izzuph', // Replace with your project ID
  dataset: 'production',
  apiVersion: '2024-10-09',   // Use today's date or a specific version, e.g., '2021-03-25'
  useCdn: true,
});

// Create a builder to generate image URLs
const builder = imageUrlBuilder(client);

// Function to build image URLs
export function urlFor(source) {
  return builder.image(source);
}

export { client };
