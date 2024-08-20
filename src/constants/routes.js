import React from 'react';

const routes = [
  {
    path: '',
    name: 'Home',
    element: React.lazy(() => import('@/pages/HomePage'))
  },
  {
    path: '/timeline',
    name: 'Timeline',
    element: React.lazy(() => import('@/pages/TimelinePage'))
  },
  {
    path: '/banks',
    name: 'Bank map',
    element: React.lazy(() => import('@/pages/BankMapPage'))
  },
  {
    path: '/contacts',
    name: 'Contact us',
    element: React.lazy(() => import('@/pages/ContactUsPage'))
  }
];

export default routes;
