import { Box, Typography, Paper, Container, Button } from '@mui/material';
import { Error as ErrorIcon, Home as HomeIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();

  return (
    <Box sx={{ width: '100%', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Container maxWidth={false} sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        <Box sx={{ mt: { xs: 2, sm: 4 }, mb: { xs: 2, sm: 4 } }}>
          <Paper elevation={3} sx={{ p: { xs: 3, sm: 4, md: 6 }, textAlign: 'center' }}>
          <ErrorIcon sx={{ fontSize: 120, color: 'error.main', mb: 3 }} />
          <Typography variant="h1" component="h1" gutterBottom sx={{ fontSize: '4rem', fontWeight: 'bold' }}>
            404
          </Typography>
          <Typography variant="h4" component="h2" gutterBottom>
            Страница не найдена
          </Typography>
          <Typography variant="h6" color="text.secondary" paragraph sx={{ mb: 4 }}>
            Извините, запрашиваемая страница не существует или была перемещена.
          </Typography>
          <Button
            variant="contained"
            size="large"
            startIcon={<HomeIcon />}
            onClick={() => navigate('/')}
            sx={{ px: 4, py: 1.5 }}
          >
            Вернуться на главную
          </Button>
        </Paper>
      </Box>
    </Container>
    </Box>
  );
}

export default NotFound; 