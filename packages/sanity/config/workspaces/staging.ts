import { RocketIcon } from '@sanity/icons'
import type { WorkspaceOptions } from 'sanity'

export const stagingConfig: WorkspaceOptions = {
  projectId: process.env.SANITY_STUDIO_PROJECT_ID!,
  dataset: 'staging',
  name: 'staging',
  basePath: '/staging',
  title: 'Affiliate Template Staging',
  icon: RocketIcon,
}
