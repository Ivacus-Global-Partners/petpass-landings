import React from "react";
import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    textAlign: "center",
    padding: theme.spacing(4),
  },
  title: {
    color: "#2DA956",
    margin: `${theme.spacing(4)}px 0`,
  },
  includedInfo: {
    backgroundColor: "white",
    padding: theme.spacing(1),
    display: "inline-block",
    marginBottom: theme.spacing(3),
  },
  content: {
    display: 'flex',
    justifyContent: 'space-around', // Distribuye el espacio alrededor de los elementos
    alignItems: 'center', // Alinea los elementos verticalmente
    flexWrap: 'wrap', // Asegura que los elementos se mantengan en una fila o se apilen en pantallas más pequeñas
    maxWidth: '1024px', // O la anchura máxima del diseño
    margin: '0 auto', // Centra el contenedor en la página
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
  image: {
    flexShrink: 0,
    width: '50%',
    marginRight: theme.spacing(2), // Ajusta este valor para mover la imagen hacia el centro
    [theme.breakpoints.down('sm')]: {
      marginRight: 0,
      marginBottom: theme.spacing(3),
      width: '80%',
    },
  },
  list: {
    flex: 1,
    marginLeft: theme.spacing(-2), // Ajusta esto para acercar la lista a la imagen
    paddingLeft: theme.spacing(2), // Asegúrate de que la lista tiene algo de espacio interno si es necesario
    maxWidth: '50%', // Asegúrate de que la lista no ocupe más del 50% del contenedor
    [theme.breakpoints.down('sm')]: {
      maxWidth: '80%',
    },
  },
  listItem: {
    fontSize: "20px",
    fontWeight: 500,
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(2),
    "& img": {
      marginRight: theme.spacing(1),
      width: "24px",
      height: "auto",
    },
  },
  textContainer: {
    width: '100%', // Ajusta esto según lo necesario para centrar el texto en la pantalla
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  smallText: {
    fontSize: '0.8rem',
    maxWidth: '60%', // Limita el ancho del texto para mejorar la legibilidad
    color: '#333',
    marginBottom: theme.spacing(2), // Espacio entre los párrafos de texto
  },

  logoContainer: {
    width: "100%", // Ocupa todo el ancho para centrar el logo
    display: "flex", // Utiliza flexbox para el centrado
    justifyContent: "center", // Centra el logo horizontalmente
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  logo: {
    maxWidth: "120px", // Tamaño del logo
    height: "auto",
  },
}));

const PromoComponent = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Seguro Caser RC incluido con Petpass*</h1>
      <p className={classes.includedInfo}>
        Con tu Petpass tienes incluido* el obligatorio seguro de Responsabilidad
        Civil.
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
            Fácil, sin complicaciones ni preguntas. El mismo precio para todas
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
            Elije la modalidad Petpass que más te interese para estar protegido
            desde 120.000 hasta 350.000 €.
          </li>
        </ul>
      </div>
      <div className={classes.textContainer}>
      <p className={classes.smallText}>
        *Incluido en los planes Protect, Shield y Travel. **Cobertura para los
        planes Shield y Travel. Plan Protect la cobertura hasta 120.000€
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
