"use client";

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { apiVersion, dataset, projectId } from "./src/sanity/env";
import { schemaTypes } from "./src/sanity/schemaTypes";

export default defineConfig({
  name: "uxbureau",
  title: "UX Bureau",
  basePath: "/studio",
  projectId: projectId || "missing-project-id",
  dataset,
  apiVersion,
  schema: { types: schemaTypes },
  plugins: [structureTool()],
});
