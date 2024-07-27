import type { NavMenuItem } from '~/types'

export const navMenuItems: NavMenuItem[] = [
  {
    label: 'Home',
    icon: 'i-material-symbols-house-rounded',
    to: '/',
  },
  {
    label: 'Blog',
    icon: 'i-material-symbols-article-rounded',
    to: '/blog',
  },
  {
    label: 'Review',
    icon: 'i-material-symbols-reviews-rounded',
    to: '/review',
  },
  {
    label: 'About',
    icon: 'i-material-symbols-chat-info-rounded',
    to: '/about',
  },
]
