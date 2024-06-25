import path from 'path'
import { defineCliConfig } from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: process.env.SANITY_STUDIO_PROJECT_ID,
    dataset: process.env.SANITY_STUDIO_DATASET,
  },
  graphql: [
    {
      id: 'affiliate-template-production',
      workspace: 'affiliate-template-production',
      playground: true,
    },
    {
      id: 'affiliate-template-staging',
      workspace: 'affiliate-template-staging',
      playground: true,
    },
  ],
  vite: {
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, 'components'),
        '@config': path.resolve(__dirname, 'config'),
        '@schema': path.resolve(__dirname, 'schema'),
        '@structure': path.resolve(__dirname, 'structure'),
      },
    },
  },
})
