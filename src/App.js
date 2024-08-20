import { CustomThemeProvider } from '@/context/theme';

import RouteProvider from './components/RouteProvider';

function App() {
  return (
    <CustomThemeProvider>
      <RouteProvider />
    </CustomThemeProvider>
  );
}

export default App;
