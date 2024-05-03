


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
    marginTop: '20px',
    marginBottom: '15px',
  },
  title: {
    fontFamily: 'Fonarto',
    fontSize: '2.5rem',
    color: '#000000',
    fontWeight: 'bold',
    marginBottom: '0px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.5rem',
    },
  },
  featureRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    maxWidth: '1120px',
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
  icon: {
    width: '140px',
    height: '130px',
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
      imgSrc: 'https://firebasestorage.googleapis.com/v0/b/petpass-7717b.appspot.com/o/Landings%2FLandingCaser%2FMOBILITY_ID.svg?alt=media&token=b6f62254-ac74-4a65-8f85-000d7c45aa10', // Update with your image URL
    },
    {
      id: 'smartPetTag',
      title: 'Smart Pet Tag',
      description: 'Smart Pet Tag, el servicio premium de identificación y recuperación de mascotas con código QR, tecnología NFC y soporte telefónico 24/7 durante todo el año para encontrar a tu mascota.',
      imgSrc: 'https://firebasestorage.googleapis.com/v0/b/petpass-7717b.appspot.com/o/Landings%2FLandingCaser%2FSMART_PET_TAG.svg?alt=media&token=bf73f5fd-befa-4db3-82c3-d6e59de8bcb7'
    },
    {
      id: 'segurosParaTusMascotas',
      title: 'Seguros Mascotas',
      description: 'Seguro de mascotas diseñado para dueños responsables, ofreciendo una amplia gama de coberturas en responsabilidad civil por los daños causados por los animales asegurados.',
      imgSrc: 'https://firebasestorage.googleapis.com/v0/b/petpass-7717b.appspot.com/o/Landings%2FLandingCaser%2FSEGURO_MASCOTA.svg?alt=media&token=290594ec-cd6d-4194-9e6f-c590763455d1'
    },
    {
      id: 'beneficiosYVentajas',
      title: 'Beneficios y Ventajas',
      description: 'Súmate a la comunidad PetPass y accede a descuentos exclusivos que nuestros partners preparan especialmente para nuestros miembros.',
      imgSrc: 'https://firebasestorage.googleapis.com/v0/b/petpass-7717b.appspot.com/o/Landings%2FLandingCaser%2FBENEFICIOS_VENTAJAS.svg?alt=media&token=d47cc97e-9eb4-4ede-8012-0e4df351de22'
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
            
              <img src={feature.imgSrc} alt={feature.title} className={classes.icon} />
           
            <strong className={classes.featureTitle}>{feature.title}</strong>
            <p className={classes.description}>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IconsInfo;
