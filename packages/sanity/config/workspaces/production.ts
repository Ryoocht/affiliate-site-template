import { EarthGlobeIcon } from '@sanity/icons'
import type { WorkspaceOptions } from 'sanity'

export const productionConfig: WorkspaceOptions = {
  projectId: process.env.SANITY_STUDIO_PROJECT_ID!,
  dataset: 'production',
  name: 'production',
  basePath: '/production',
  title: 'Affiliate Template Production',
  icon: EarthGlobeIcon,
}
