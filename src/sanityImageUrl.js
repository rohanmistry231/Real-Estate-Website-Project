import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// Create the Sanity client
const client = createClient({
  projectId: '88d8s4jz', // Replace with your project ID
  dataset: 'production',
  useCdn: true,
});

// Create a builder to generate image URLs
const builder = imageUrlBuilder(client);

// Function to build image URLs
export function urlFor(source) {
  return builder.image(source);
}

export { client };
