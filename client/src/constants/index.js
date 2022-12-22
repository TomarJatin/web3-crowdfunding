import { createCampaign, dashboard, logout, payment, profile, withdraw } from '../assets';

export const navlinks = [
  {
    name: 'dashboard',
    imgUrl: dashboard,
    link: '/',
  },
  {
    name: 'campaign',
    imgUrl: createCampaign,
    link: '/create-campaign',
  },
  {
    name: 'Your Funding Details',
    imgUrl: payment,
    link: '/',
    disabled: true,
  },
  {
    name: 'Your Campaigns',
    imgUrl: withdraw,
    link: '/profile',
  }
];
