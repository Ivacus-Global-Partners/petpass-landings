import React from "react";
import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    textAlign: "center",
    padding: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(2), // Reduce el padding en dispositivos pequeños
    },
  },
  title: {
    color: "#2DA956",
    fontFamily: "Fonarto",
    margin: `${theme.spacing(4)}px 0`,
    [theme.breakpoints.down('sm')]: {
      margin: `${theme.spacing(2)}px 0`, // Reduce el margen del título en dispositivos pequeños
    },
  },
  includedInfo: {
    backgroundColor: "white",
    fontFamily: "Heebo",
    margin: "0 auto",
    padding: theme.spacing(1),
    display: "inline-block",
    marginBottom: theme.spacing(3),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(0.5), // Reduce el padding
      marginBottom: theme.spacing(1), // Reduce el margen inferior
    },
  },
  content: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'wrap',
    maxWidth: '1024px',
    margin: '0 auto',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'center',
      margin: theme.spacing(0), // Elimina los márgenes horizontales
    },
  },
  image: {
    flexShrink: 0,
    width: '45%',
    marginRight: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      marginRight: 0,
      marginBottom: theme.spacing(1),
      width: '100%', // Ajusta la imagen para que ocupe todo el ancho en dispositivos móviles
    },
  },
  list: {
    flex: 1,
    marginLeft: theme.spacing(-2),
    paddingLeft: theme.spacing(2),
    maxWidth: '50%',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '100%', // Permite que la lista ocupe todo el ancho disponible
      marginLeft: theme.spacing(0), // Elimina el margen izquierdo
      paddingLeft: theme.spacing(0), // Elimina el padding izquierdo
    },
  },
  listItem: {
    fontSize: "18px",
    fontWeight: 500,
    display: "flex",
    lineHeight: "1.5",
    fontFamily: "Heebo",
    alignItems: "center",
    textAlign: "left",
    marginBottom: theme.spacing(2),
    "& img": {
      marginRight: theme.spacing(1),
      width: "24px",
      height: "auto",
    },
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(1), // Reduce el margen entre items
    },
    flexWrap: 'nowrap',
  },
  textContainer: {
    width: '100%',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(0), // Elimina el padding en dispositivos móviles
    },
  },
  smallText: {
    fontSize: '0.8rem',
    lineHeight: '1.5',
    maxWidth: '60%',
    color: '#333',
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      maxWidth: '90%', // Permite un mayor ancho de texto
      marginBottom: theme.spacing(1), // Reduce el margen inferior
    },
  },
  logoContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  },
  logo: {
    maxWidth: "120px",
    height: "auto",
    [theme.breakpoints.down('sm')]: {
      maxWidth: "100px", // Reduce el tamaño del logo en dispositivos móviles
    },
  },
}));
const PromoComponent = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Seguro Caser RC incluido con Petpass*</h1>
      <p className={classes.includedInfo}>
        <strong>Con tu Petpass tienes incluido* el obligatorio seguro de Responsabilidad
        Civil.</strong>
      </p>

      <div className={classes.content}>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2FPetpassLandings%2Fseguro.png?alt=media&token=29ff3fbf-fd38-4805-9ade-cdf72f54b796"
          alt="Imagen Descriptiva"
          className={classes.image}
        />
        <ul className={classes.list}>
          <li className={classes.listItem}>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2FPetpassLandings%2Ficon_caser_1.png?alt=media&token=77af2597-ad5d-499c-8684-abf202939fb8"
              alt="Icono 1"
            />
            Válido para la Ley de Bienestar animal
          </li>
          <li className={classes.listItem}>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2FPetpassLandings%2Ficon_caser_2.png?alt=media&token=2af98421-f3f5-4d7d-ad6b-da785c94a6bb"
              alt="Icono 2"
            />
            Fácil, sin complicaciones ni preguntas. <br /> El mismo precio para todas
            las razas y edades
          </li>
          <li className={classes.listItem}>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2FPetpassLandings%2Ficon_caser_3.png?alt=media&token=eb5da26c-6470-4b58-a2ca-8b9f378b258b"
              alt="Icono 3"
            />
            Seguro integrado en la app. Todos los datos de tu seguro y el
            certificado de cobertura siempre disponibles en Petpass
          </li>
          <li className={classes.listItem}>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2FPetpassLandings%2Ficon_caser_4.png?alt=media&token=3ca7109d-6cea-445e-96fa-e95b83906392"
              alt="Icono 4"
            />
            Petpass protect con cobertura de hasta 120.000€**
          </li>
        </ul>
      </div>
      <div className={classes.textContainer}>
      <p className={classes.smallText}>
        *Incluido en plan Protect. **Cobertura Plan Protect hasta 120.000€
      </p>
      <p className={classes.smallText}>
        Póliza mediada por Marsh Risk Consulting, S.L., con domicilio social en
        Madrid, Paseo de la Castellana Nº 216, provincia de Madrid, Código
        Postal 28046, con C.I.F. Nº B-48527485, inscrita como Agencia Vinculada
        con la clave AJ-0321 y suscrita con Caja de Seguros Reunidos, Compañía
        de Seguros y Reaseguros, S.A. Av. De Burgos 109 – 28050 Madrid. Registro
        Mercantil de Madrid – Tomo 2245 – Folio 179 – Hoja M-39662 – CIF.
        A28013050.
      </p>
      </div>
      <div className={classes.logoContainer}>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2FPetpassLandings%2Flogo_caser.png?alt=media&token=1777d03d-68f7-4c7e-9a79-230dad0442a5"
          alt="Logotipo"
          className={classes.logo}
        />
      </div>
    </div>
  );
};

export default PromoComponent;
