export default defineAppConfig({
  ui: {
    badge: {
      variant: {
        solid: 'bg-teal-600 dark:bg-blue-600 text-gray-50 dark:text-gray-800',
        soft: 'bg-teal-400 dark:bg-blue-400 bg-opacity-10 dark:bg-opacity-10 text-teal-600 dark:text-blue-400',
      },
    },
    breadcrumb: {
      divider: {
        base: 'bg-gray-500 dark:bg-gray-500',
      },
    },
    divider: {
      border: {
        base: 'border-gray-500 dark:border-gray-500',
      },
    },
    progress: {
      progress: {
        color: 'text-emerald-500 dark:text-blue-500',
      },
    },
    skeleton: {
      background: 'bg-gray-300 dark:bg-gray-600',
    },
  },
})
