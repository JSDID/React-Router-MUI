import { Box, Typography, Paper, Container } from '@mui/material';
import { Home as HomeIcon } from '@mui/icons-material';

function Home() {
  return (
    <Box sx={{ width: '100%', minHeight: '100vh' }}>
      <Container maxWidth={false} sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        <Box sx={{ mt: { xs: 2, sm: 4 }, mb: { xs: 2, sm: 4 } }}>
          <Paper elevation={3} sx={{ p: { xs: 2, sm: 3, md: 4 }, textAlign: 'center' }}>
          <HomeIcon sx={{ fontSize: { xs: 40, sm: 50, md: 60 }, color: 'primary.main', mb: 2 }} />
          <Typography 
            variant="h3" 
            component="h1" 
            gutterBottom
            sx={{ fontSize: { xs: '1.75rem', sm: '2.5rem', md: '3rem' } }}
          >
            Добро пожаловать
          </Typography>
        </Paper>
      </Box>
    </Container>
    </Box>
  );
}

export default Home; 