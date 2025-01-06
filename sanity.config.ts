'use client'

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\app\studio\[[...tool]]\page.tsx` route
 */

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import {apiVersion, dataset, projectId} from './sanity/env'
 import schemas from './sanity/schemaTypes/schemas'
import {structure} from './sanity/structure'

export default defineConfig({
projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string,
title: process.env.NEXT_PUBLIC_SANITY_PROJECT_TITLE as string,
dataset: "production",
// apiVErsion: "2023-06-18",
  basePath:                        '/studio',
  // basePath: "/admin",
  // projectId,
  // dataset,
  // Add and edit the content schema in the './sanity/schemaTypes' folder
   schemas,
  plugins: [
    structureTool({structure}),
    // Vision is for querying with GROQ from inside the Studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({defaultApiVersion: apiVersion}),
  ],
})


