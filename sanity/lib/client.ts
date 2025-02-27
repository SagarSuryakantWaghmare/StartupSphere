import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

if (!projectId || !dataset || !apiVersion) {
  throw new Error('Missing required environment variables')
}

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, 
})
