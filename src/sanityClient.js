// sanityClient.js
import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: '95izzuph', // replace with your project ID
  dataset: 'production', // or the name of your dataset
  apiVersion: '2024-10-09',   // Use today's date or a specific version, e.g., '2021-03-25'
  useCdn: true, // `false` if you want to ensure fresh data
});
