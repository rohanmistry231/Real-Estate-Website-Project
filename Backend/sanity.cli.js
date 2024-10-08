import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '88d8s4jz',
    dataset: 'production'
  },
  /**
   * Enable auto-updates for studios.
   * Learn more at https://www.sanity.io/docs/cli#auto-updates
   */
  autoUpdates: true,
})
