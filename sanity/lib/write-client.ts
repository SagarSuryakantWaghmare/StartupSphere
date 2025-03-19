import "server-only";

import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId, token } from "../env";

export const writeClient = createClient({
  projectId,
  dataset,
  apiVersion: '2023-10-01', 
  useCdn: false,
  token,
});

if (!writeClient.config().token) {
  throw new Error("Write token not found.");
}