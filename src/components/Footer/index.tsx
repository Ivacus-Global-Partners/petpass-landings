import React from 'react';
import { makeStyles } from '@mui/styles';
import { Grid, Box, Theme } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';

const useStyles = makeStyles((theme: Theme) => ({
  footer: {
    backgroundColor: '#032F41', // Cambiado al color azul oscuro según la imagen
    color: 'white',
    padding: '40px 3vw',
    [theme.breakpoints.down('sm')]: {
      padding: '20px 3vw',
    }
  },
  downloadSection: {
    textAlign: 'center',
    paddingBottom: theme.spacing(4), // Agrega espacio debajo de la sección de descarga
  },
  downloadButtons: {
    // Estilos para tus botones de descarga de la App Store y Google Play
  },
  copyrightText: {
    textAlign: 'center',
    paddingTop: theme.spacing(4), // Agrega espacio arriba del texto de copyright
  },
  socialIcons: {
    display: 'flex',
    justifyContent: 'flex-end', // Alinea los íconos de las redes sociales a la derecha
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center', // Centra en pantallas pequeñas
      paddingTop: theme.spacing(2), // Agrega espacio arriba en pantallas pequeñas
    }
  },
  socialIcon: {
    margin: theme.spacing(1), // Añade espacio alrededor de cada ícono de red social
  },
  // ... otros estilos que necesites
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <div className={classes.downloadSection}>
        {/* Coloca aquí los botones de descarga y la imagen relacionada */}
        <Box>
          <DownloadIcon color="secondary" />
          <p>Descarga la App</p>
          {/* Botones de App Store y Google Play */}
        </Box>
      </div>
      
      {/* Tus otros enlaces del footer (Acerca de Petpass, Sectores, Contacto, etc.) */}
      
      <div className={classes.socialIcons}>
        {/* Añade los íconos de las redes sociales */}
        <InstagramIcon className={classes.socialIcon} />
        <FacebookIcon className={classes.socialIcon} />
        <TwitterIcon className={classes.socialIcon} />
        <LinkedInIcon className={classes.socialIcon} />
        <YouTubeIcon className={classes.socialIcon} />
      </div>
      
      <div className={classes.downloadSection}>
        {/* Botones de descarga de la App Store y Google Play */}
      </div>
      
      <div className={classes.socialIcons}>
        {/* Íconos de redes sociales */}
      </div>
      
      <div className={classes.downloadSection}>
        {/* Sección de descarga de la aplicación, ajustada según sea necesario */}
      </div>
      
      <div className={classes.socialIcons}>
        {/* Íconos de redes sociales alineados a la izquierda */}
      </div>
      
      <Box className={classes.downloadButtons}>
        {/* Botones e íconos de descarga aquí */}
      </Box>
      
      <Box className={classes.socialIcons}>
        {/* Íconos de redes sociales aquí */}
      </Box>

      <Grid container justifyContent="space-between" alignItems="center">
        {/* Espacio para el logo, los íconos de descarga y los íconos de redes sociales */}
      </Grid>

      <Box className={classes.copyrightText}>
        Copyright ©2024 IVACUS GLOBAL PARTNERS SL.
      </Box>

      {/* Otras secciones que puedas necesitar */}
    </footer>
  );
};

export default Footer;
