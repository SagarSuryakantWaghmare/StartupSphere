import "server-only";
import { defineLive } from "next-sanity";
import {client} from "@/sanity/lib/client";

const config = { client };

export const { sanityFetch, SanityLive } = defineLive(config);