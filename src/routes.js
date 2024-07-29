import React from 'react';

const routes = [
  {
    path: '',
    element: React.lazy(() => import('@/pages/HomePage'))
  },
  {
    path: '/banks',
    element: React.lazy(() => import('@/pages/BankMapPage'))
  },
  {
    path: '/timeline',
    element: React.lazy(() => import('@/pages/TimelinePage'))
  },
  {
    path: '/contacts',
    element: React.lazy(() => import('@/pages/ContactUsPage'))
  }
];

export default routes;
