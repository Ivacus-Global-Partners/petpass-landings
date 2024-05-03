import React from "react";
import { makeStyles } from "@mui/styles";
import { Theme, Card, CardContent, Typography, Grid, Box } from "@mui/material";

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    justifyContent: "center",
    padding: "25px 35vw 25px 5%", // Ajustar según necesidad para el espacio del texto
    alignItems: "center",
    [theme.breakpoints.down(850)]: {
      paddingRight: "5%",
    },
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      paddingLeft: "2px",
      paddingRight: "2px",
    },
  },
  infoContainer: {
    maxWidth: "800px",
    margin: "25px 25px",
  },
  card: {
    marginTop: "30px",
    backgroundColor: "#f7f7f7",
    border: "0.5px solid transparent",
    "&:hover": {
      transform: "scale(1.05)",
      transition: "transform 0.3s ease-in-out",
      backgroundColor: "#e8f5e9", // Light green background on hover
      borderColor: "#007aff", // Border color on hover
    },
  },
  title: {
    display: "flex",
    alignItems: "start",
    fontFamily: "Fonarto !important", // Fuente personalizada "Fonarto
    fontSize: "40px !important", // Este tamaño de fuente se mantendrá como en el diseño original
    margin: 0,
    textAlign: "left",
    marginBottom: "30px !important", // Ajustar según necesidad

    color: "#2DA956", // Asegurarse de que el color es el correcto
    [theme.breakpoints.down("md")]: {
      textAlign: "left",
      fontWeight: "200",
      fontSize: "2.6em",
    },
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      fontSize: "1.9em",
      marginBottom: "40px", // Aumentar el margen inferior en dispositivos móviles para separar del primer párrafo
    },
  },

  minititle: {
    fontFamily: "Fonarto !important",
    fontSize: "18px !important", // Fuente personalizada "Fonarto"
  },

  body2: {
    fontSize: "16px !important",
    fontFamily: "Heebo !important", // Tamaño de fuente personalizado
  },

  bodyText: {
    fontSize: "20px !important", // Tamaño de fuente personalizado
    fontFamily: "Heebo !important", // Familia de fuente personalizada
    color: "#333", // Color del texto
    lineHeight: "1.5 !important", // Altura de línea para la legibilidad
    textAlign: "justify", // Justificar el texto para una apariencia más ordenada
    marginBottom: "20px", // Margen inferior
  },

  icon: {
    height: "50px", // Ajusta según necesidad
    width: "50px", // Ajusta según necesidad
    marginBottom: "12px", // Espacio entre el icono y el texto
  },
}));

const BodyInfo = () => {
  const classes = useStyles();
  const icons = [
    "https://firebasestorage.googleapis.com/v0/b/petpass-7717b.appspot.com/o/Landings%2FLandingCaser%2Fchapa_petpass_feria.a34b7db4.png?alt=media&token=bab6e600-f85e-46ab-9db9-8fe18b18ec8b",
    "https://firebasestorage.googleapis.com/v0/b/petpass-7717b.appspot.com/o/Landings%2FLandingCaser%2Flocator_icon.3e57a577.png?alt=media&token=0ef7a272-cca8-4228-86a6-80b08d70017f",
    "https://firebasestorage.googleapis.com/v0/b/petpass-7717b.appspot.com/o/Landings%2FLandingCaser%2Ficon_insurance.b1d66ffc.png?alt=media&token=32a4db31-c879-4265-9a58-205b1e89032c",
  ];

  return (
    <div className={classes.container}>
      <div className={classes.infoContainer}>
        <Typography variant="h5" className={classes.title}>
          <strong>Petpass: El compañero de tu mascota 🐾</strong>
        </Typography>
        <Typography variant="body1" className={classes.bodyText}>
          <strong>
            Petpass Protect te ayuda a cumplir con la nueva Ley de Bienestar
            Animal: Identificación, comunicación de perdida y seguro de
            responsabilidad civil de forma fácil y sencilla para que puedas
            disfrutar de tu peludo con total tranquilidad.
          </strong>
        </Typography>
        <Grid container spacing={2}>
          {icons.map((icon, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card className={classes.card}>
                <CardContent>
                  <Box display="flex" justifyContent="center">
                    <img src={icon} alt="Icono" className={classes.icon} />
                  </Box>
                  <Typography variant="h6" className={classes.minititle}>
                    {["Smart Pet Tag", "Plataforma SOS", "Seguro RC"][index]}
                  </Typography>
                  <Typography variant="body2" className={classes.body2}>
                    {
                      [
                        "Petpass incorpora un identificador de emergencia Contacless con NFC /QR para una identificación rápida y segura.",
                        "Nuestra plataforma 24/7 te permite reportar cualquier pérdida inmediatamente y encontrar rápidamente a tu “peludo”.",
                        "El seguro de responsabilidad civil de Petpass ofrece tranquilidad sin importar raza, edad o tamaño al mismo precio.",
                      ][index]
                    }
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default BodyInfo;
