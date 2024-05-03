import React from 'react';
import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material';
import './Header.css';

const useStyles = makeStyles((theme: Theme) => ({
  headerContainer: {
    position: 'relative',
    maxHeight: '70vh', // Establece la altura máxima del contenedor del encabezado
    overflow: 'hidden', // Evita que la imagen se desborde del contenedor
  },
  headerImage: {
    width: '100%', // Ajusta la anchura de la imagen al 100% del contenedor
    height: 'auto', // Permite que la altura se ajuste automáticamente para mantener la proporción de aspecto
  },
}));

const HeaderPetPass = ({ image }: { image: string }) => {
  const classes = useStyles();

  return (
    <div className={classes.headerContainer}>
      <img className={classes.headerImage} src={image} alt="Header" />
    </div>
  );
};

export default HeaderPetPass;
