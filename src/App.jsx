import { useRoutes } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline, Box } from '@mui/material';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import Navigation from './components/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import NotFound from './pages/NotFound';

// Создаем тему Material-UI
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
});

function App() {
  // Определяем маршруты с помощью useRoutes
  const routes = useRoutes([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/products/*',
      element: <Products />
    },
    {
      path: '/about',
      element: <About />
    },
    {
      path: '*',
      element: <NotFound />
    }
  ]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', width: '100%' }}>
        <Navigation />
        <Box component="main" sx={{ flexGrow: 1, width: '100%' }}>
          {routes}
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
