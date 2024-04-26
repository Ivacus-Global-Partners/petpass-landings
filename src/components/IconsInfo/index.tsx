


import React from 'react';
import { Theme, useMediaQuery, useTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';

interface IconsInfoProps {
  title: string;
}

interface Feature {
  id: string;
  title: string;
  description: string;
  imgSrc: string;
}

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: '100%',
    padding: '15px 0',
  },
  titleContainer: {
    textAlign: 'center',
    marginTop: '30px',
    marginBottom: '30px',
  },
  title: {
    fontFamily: 'Fonarto',
    fontSize: '2.5rem',
    color: '#000000',
    fontWeight: 'bold',
    marginBottom: '20px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.5rem',
    },
  },
  featureRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    maxWidth: '960px',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
  featureContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    margin: '20px',
    width: '200px',
    [theme.breakpoints.down('sm')]: {
      width: '80%',
      margin: '20px 0',
    },
  },
  iconBackground: {
    backgroundColor: '#2DA956',
    padding: '1rem',
    borderRadius: '10px',
    boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.2)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: '110px',
    height: '70px',
  },
  description: {
    fontSize: '0.9rem',
    color: '#333',
    marginTop: '10px',
  },
  featureTitle: {
    marginTop: '10px', // Add margin to separate feature title from the icon
  },
}));

const IconsInfo: React.FC<IconsInfoProps> = ({ title }) => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const features: Feature[] = [
    {
      id: 'mobilityId',
      title: 'Mobility Id',
      description: 'Solución digital completa en App, Wallet y Smart Pet Tag para certificar la identidad de tu mascota, tus datos personales y el seguro de tu peludo para facilitarte el día a día con tu mascota.',
      imgSrc: 'https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2FPetpassLandings%2Fmobility_logo.e2ef91a5.png?alt=media&token=6e1d84ea-a6cf-4007-8549-faa6ad6e5d6d', // Update with your image URL
    },
    {
      id: 'smartPetTag',
      title: 'Smart Pet Tag',
      description: 'Smart Pet Tag, el servicio premium de identificación y recuperación de mascotas con código QR, tecnología NFC y soporte telefónico 24/7 durante todo el año para encontrar a tu mascota.',
      imgSrc: 'https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2FPetpassLandings%2FpetPass_logo.614e2e60.png?alt=media&token=9de54456-08f0-422a-bba7-b615c4da90d6'
    },
    {
      id: 'segurosParaTusMascotas',
      title: 'Seguros para tus mascotas',
      description: 'Seguro de mascotas diseñado para dueños responsables, ofreciendo una amplia gama de coberturas que van desde 120.200€ (PetPass Protect) hasta 350.000€ (PetPass Shield) en responsabilidad civil por los daños causados por los animales asegurados.',
      imgSrc: 'https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2FPetpassLandings%2Fseguridad_logo.05bb0075.png?alt=media&token=de8a27a5-92e9-4d23-b368-f5dbcfae2ab7'
    },
    {
      id: 'beneficiosYVentajas',
      title: 'Beneficios y Ventajas',
      description: 'Súmate a la comunidad PetPass y accede a descuentos exclusivos que nuestros partners preparan especialmente para nuestros miembros.',
      imgSrc: 'https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2FPetpassLandings%2Fbeneficios_logo.aafbb615.png?alt=media&token=774c91d1-3417-4046-b7b6-f36d43757486'
    }
  ];

  return (
    <div className={classes.container}>
      {title && (
        <div className={classes.titleContainer}>
          <h1 className={classes.title}>{title}</h1>
        </div>
      )}
      <div className={classes.featureRow}>
        {features.map((feature) => (
          <div key={feature.id} className={classes.featureContainer}>
            <div className={classes.iconBackground}>
              <img src={feature.imgSrc} alt={feature.title} className={classes.icon} />
            </div>
            <strong className={classes.featureTitle}>{feature.title}</strong>
            <p className={classes.description}>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IconsInfo;
