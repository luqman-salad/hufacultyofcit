"use client";

import { NextStudio } from "next-sanity/studio";
import config from "../../../sanity.config"; // Ensure this path is correct relative to the new folder

export default function StudioPage() {
  return <NextStudio config={config} />;
}