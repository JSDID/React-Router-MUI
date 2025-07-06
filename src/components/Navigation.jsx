import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  useTheme,
  useMediaQuery
} from '@mui/material';
import {
  Menu as MenuIcon,
  Home as HomeIcon,
  Info as InfoIcon,
  Inventory as InventoryIcon
} from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';

const menuItems = [
  { text: 'Главная', icon: <HomeIcon />, path: '/' },
  { text: 'Продукты', icon: <InventoryIcon />, path: '/products' },
  { text: 'О нас', icon: <InfoIcon />, path: '/about' }
];

function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavigation = (path) => {
    navigate(path);
    if (isMobile) {
      setMobileOpen(false);
    }
  };

  const drawer = (
    <Box sx={{ width: 250 }}>
      <Box sx={{ p: 2, textAlign: 'center' }}>
        <Typography variant="h6" color="primary">
          Навигация
        </Typography>
      </Box>
      <List>
        {menuItems.map((item) => (
          <ListItem
            button
            key={item.text}
            onClick={() => handleNavigation(item.path)}
            selected={location.pathname === item.path}
            sx={{
              '&.Mui-selected': {
                backgroundColor: 'primary.light',
                '&:hover': {
                  backgroundColor: 'primary.light',
                },
              },
            }}
          >
            <ListItemIcon sx={{ color: location.pathname === item.path ? 'primary.main' : 'inherit' }}>
              {item.icon}
            </ListItemIcon>
            <ListItemText 
              primary={item.text}
              sx={{ 
                color: location.pathname === item.path ? 'primary.main' : 'inherit',
                fontWeight: location.pathname === item.path ? 'bold' : 'normal'
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="static" elevation={2}>
        <Toolbar sx={{ px: { xs: 1, sm: 2, md: 3 } }}>
          {isMobile && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: { xs: 1, sm: 2 } }}
            >
              <MenuIcon />
            </IconButton>
          )}
          
          <Typography 
            variant="h6" 
            component="div" 
            sx={{ 
              flexGrow: 1,
              fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' }
            }}
          >
            React Router + MUI
          </Typography>



          {!isMobile && (
            <Box sx={{ display: 'flex', gap: { xs: 0.5, sm: 1, md: 1 } }}>
              {menuItems.map((item) => (
                <Button
                  key={item.text}
                  color="inherit"
                  onClick={() => handleNavigation(item.path)}
                  sx={{
                    backgroundColor: location.pathname === item.path ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                    fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' },
                    px: { xs: 1, sm: 1.5, md: 2 },
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    },
                  }}
                >
                  {item.text}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 250 },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
}

export default Navigation; 