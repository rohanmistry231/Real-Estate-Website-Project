// sanityClient.js
import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: '88d8s4jz', // replace with your project ID
  dataset: 'production', // or the name of your dataset
  useCdn: true, // `false` if you want to ensure fresh data
});
