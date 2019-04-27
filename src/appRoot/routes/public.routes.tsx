import * as React from 'react';
import Home from 'module/Home/Home';

const Test = React.lazy(() => import('module/Test/Test'));

const PublicRoutes = [
  {
    component: Test,
    exact: true,
    id: 1,
    path: '/test',
  },
  {
    component: Home,
    exact: true,
    id: 2,
    path: '/',
  },
];

export default PublicRoutes;
