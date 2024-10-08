import {
  createBrowserRouter,
  createRoutesFromChildren,
  Route,
  RouterProvider
} from 'react-router-dom';

import Layout from '@/components/Layout/Layout';
import routes, { indexPath } from '@/constants/routes';

const router = createBrowserRouter(
  createRoutesFromChildren(
    <Route path={indexPath} element={<Layout />}>
      {routes.map(({ path, element: Element }) => (
        <Route key={path} path={path} element={<Element />} />
      ))}
    </Route>
  )
);

function RouteProvider() {
  return <RouterProvider router={router} />;
}

export default RouteProvider;
