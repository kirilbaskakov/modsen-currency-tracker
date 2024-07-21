import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromChildren
} from 'react-router-dom';
import Layout from './components/Layout/Layout';
import routes from './routes';
import CustomThemeProvider from './context/CustomThemeProvider';

const router = createBrowserRouter(
  createRoutesFromChildren(
    <Route path="/" element={<Layout />}>
      {routes.map(route => (
        <Route path={route.path} element={<route.element />} />
      ))}
    </Route>
  )
);

const App = () => {
  return (
    <CustomThemeProvider>
      <RouterProvider router={router}></RouterProvider>
    </CustomThemeProvider>
  );
};

export default App;
