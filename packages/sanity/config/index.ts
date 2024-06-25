import { structureTool } from 'sanity/structure'
import { structure } from '@structure'
import { media, mediaAssetSource } from 'sanity-plugin-media'
import { visionTool } from '@sanity/vision'

import { types } from '@schema'

import type { AssetSource, PluginOptions } from 'sanity'

export const createSharedPluginOptions = (): Partial<PluginOptions> => ({
  plugins: [
    structureTool({
      structure,
    }),
    media(),
    visionTool(),
  ],
  schema: {
    types,
  },
  form: {
    file: {
      assetSources: (previousAssetSources: AssetSource[]) =>
        previousAssetSources.filter(
          assetSource => assetSource !== mediaAssetSource,
        ),
    },
    image: {
      assetSources: (previousAssetSources: AssetSource[]) =>
        previousAssetSources.filter(
          assetSource => assetSource !== mediaAssetSource,
        ),
    },
  },
})

export const mergePluginOptions = <T extends Partial<PluginOptions>>(
  sharedOptions: T,
  workspaceOptions: T,
): T => ({
  ...sharedOptions,
  ...workspaceOptions,
  plugins: [
    ...(sharedOptions.plugins || []),
    ...(workspaceOptions.plugins || []),
  ],
  schema: {
    ...(sharedOptions.schema || []),
    ...(workspaceOptions.schema || []),
  },
})
