import { Box, Typography, Paper, Container, Grid, Card, CardContent } from '@mui/material';
import { Info as InfoIcon, Code as CodeIcon, Palette as PaletteIcon } from '@mui/icons-material';

function About() {
  return (
    <Box sx={{ width: '100%', minHeight: '100vh' }}>
      <Container maxWidth={false} sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        <Box sx={{ mt: { xs: 2, sm: 4 }, mb: { xs: 2, sm: 4 } }}>
          <Paper elevation={3} sx={{ p: { xs: 2, sm: 3, md: 4 }, textAlign: 'center', mb: { xs: 2, sm: 3, md: 4 } }}>
          <InfoIcon sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
          <Typography variant="h3" component="h1" gutterBottom>
            О нас
          </Typography>
        </Paper>

        <Grid container spacing={{ xs: 2, sm: 3 }}>
          <Grid item xs={12} sm={6} md={4}>
            <Card elevation={2}>
              <CardContent sx={{ textAlign: 'center', p: { xs: 2, sm: 3 } }}>
                <CodeIcon sx={{ fontSize: { xs: 30, sm: 35, md: 40 }, color: 'secondary.main', mb: 2 }} />
                <Typography 
                  variant="h5" 
                  component="h2" 
                  gutterBottom
                  sx={{ fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem' } }}
                >
                  React
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card elevation={2}>
              <CardContent sx={{ textAlign: 'center', p: { xs: 2, sm: 3 } }}>
                <PaletteIcon sx={{ fontSize: { xs: 30, sm: 35, md: 40 }, color: 'secondary.main', mb: 2 }} />
                <Typography 
                  variant="h5" 
                  component="h2" 
                  gutterBottom
                  sx={{ fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem' } }}
                >
                  Material-UI
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card elevation={2}>
              <CardContent sx={{ textAlign: 'center', p: { xs: 2, sm: 3 } }}>
                <InfoIcon sx={{ fontSize: { xs: 30, sm: 35, md: 40 }, color: 'secondary.main', mb: 2 }} />
                <Typography 
                  variant="h5" 
                  component="h2" 
                  gutterBottom
                  sx={{ fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem' } }}
                >
                  React Router
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
    </Box>
  );
}

export default About; 