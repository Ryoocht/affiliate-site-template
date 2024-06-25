import { defineConfig } from 'sanity'
import { productionConfig, stagingConfig } from '@config/workspaces'
import { createSharedPluginOptions, mergePluginOptions } from '@config'

import type { PluginOptions, WorkspaceOptions } from 'sanity'

const sharedPluginOptions = createSharedPluginOptions()

const createWorkspaceConfig = (
  workspaceConfig: WorkspaceOptions,
  workspacePluginOptions: Partial<PluginOptions> = {},
) => ({
  ...workspaceConfig,
  ...mergePluginOptions(sharedPluginOptions, workspacePluginOptions),
})

export default defineConfig([
  createWorkspaceConfig(productionConfig),
  createWorkspaceConfig(stagingConfig),
])
