import React from 'react';
import { Grid, Box, Typography, IconButton, Link, Button } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { SvgIconComponent } from '@mui/icons-material'; // Importa el tipo SvgIconComponent

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#032F41', color: 'white', padding: 2 }}>
      <Box sx={{ maxWidth: '1200px', margin: '0 auto' }}>
        <Grid container spacing={2} justifyContent="space-between" alignItems="center">
          <Grid item xs={12} sm={4} sx={{ textAlign: 'center' }}>
            <Typography variant="subtitle1" gutterBottom style={{ fontFamily: "Arial Rounded", fontWeight: "bold", fontSize: "20px" }}>
              Descarga la App
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, alignItems: 'center', marginTop: 1 }}>
              <Link href="https://play.google.com/store/apps/details?id=pro.petpass" target="_blank" rel="noopener noreferrer">
                <img src="https://firebasestorage.googleapis.com/v0/b/petpass-7717b.appspot.com/o/Landings%2FLandingCaser%2Ffooterplay.f9227a6e.svg?alt=media&token=0e8f8663-3644-41b4-9723-ba184ee6d000" alt="Google Play Store" style={{ width: '120px', height: 'auto' }} />
              </Link>
              <Link href="https://apps.apple.com/es/app/petpass-pro/id6479317160" target="_blank" rel="noopener noreferrer">
                <img src="https://firebasestorage.googleapis.com/v0/b/petpass-7717b.appspot.com/o/Landings%2FLandingCaser%2Ffooterapp.46656e23%20(2).svg?alt=media&token=35913e12-d379-412d-8122-ad6826ecc45b" alt="App Store" style={{ width: '120px', height: 'auto' }} />
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4} sx={{ textAlign: 'center' }}>
            <Button variant="contained" color="secondary" onClick={() => window.open('https://petpass.pro/', '_blank')} sx={{ backgroundImage: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)', fontWeight: 'bold' }}>
              <img src="https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2Fpetpass%2FLogo_ppt_petmassmobility.png?alt=media&token=31dcce4c-62f4-4c6b-a49a-f695198126a8" alt="Web Logo" style={{ width: 80, marginRight: 8 }} />
              Visita Nuestra Página
            </Button>
          </Grid>
          <Grid item xs={12} sm={4} sx={{ textAlign: 'center' }}>
            <Typography variant="subtitle1" gutterBottom style={{ fontFamily: "Arial Rounded", fontWeight: "bold", fontSize: "20px" }}>
              Síguenos en
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}>
              {SocialIcon(InstagramIcon)}
              {SocialIcon(FacebookIcon)}
              {SocialIcon(TwitterIcon)}
              {SocialIcon(LinkedInIcon)}
              {SocialIcon(YouTubeIcon)}
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Typography variant="body2" align="center" sx={{ mt: 4, pt: 2, borderTop: '1px solid rgba(255, 255, 255, 0.12)' }}>
        Copyright © 2024 IVACUS GLOBAL PARTNERS SL.
      </Typography>
    </Box>
  );
};

const SocialIcon = (Icon: SvgIconComponent) => (
  <IconButton sx={{ color: 'white', '&:hover': { color: '#29b6f6' } }}>
    <Icon />
  </IconButton>
);

export default Footer;
