import React from "react";
import { makeStyles } from "@mui/styles";
import { Theme, Card, CardContent, Typography } from "@mui/material";

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
      paddingLeft: "2",
      paddingRight: "2",
    },
  },
  infoContainer: {
    maxWidth: "800px",
    margin: "0 25px",
  },
  card: {
    marginTop: "30px",
    backgroundColor: "#f7f7f7",
    "&:hover": {
      transform: "scale(1.05)",
      transition: "transform 0.3s ease-in-out",
      backgroundColor: "#e8f5e9", // Light green background on hover
    },
  },
  title: {
    display: "flex",
    alignItems: "start",
    fontFamily: "Fonarto",
    fontSize: "3vw", // Este tamaño de fuente se mantendrá como en el diseño original
    margin: 0,
    textAlign: "left",
    marginBottom: "20px",

    color: "#2DA956", // Asegurarse de que el color es el correcto
    [theme.breakpoints.down("md")]: {
      textAlign: "left",
      fontWeight: "200",
      fontSize: "2.6em",
    },
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      fontSize: "1.9em",
    },
  },
  bodyText: {
    fontSize: "16px", // Tamaño de fuente personalizado
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif", // Familia de fuente personalizada
    color: "#333", // Color del texto
    lineHeight: "1.5", // Altura de línea para la legibilidad
    textAlign: "justify", // Justificar el texto para una apariencia más ordenada
    marginBottom: "20px", // Margen inferior
  },
}));

const BodyInfo = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.infoContainer}>
        <Typography variant="h5" className={classes.title}>
          <strong>
            Descubre Petpass: Tu compañero en el cuidado de mascotas 🐾
          </strong>
        </Typography>
        <Typography variant="body1" className={classes.bodyText}>
          <strong>
            Con Petpass, cumplir con la nueva{" "}
            <span style={{ color: "#007aff" }}>Ley de Bienestar Animal</span> es
            más fácil y seguro. Nuestra plataforma ofrece una solución digital
            completa que no solo te ayuda a cumplir con todas las normativas
            legales, sino que también proporciona tranquilidad gracias a la
            tecnología avanzada de identificación y seguimiento de mascotas.
            ¡Explora cómo Petpass puede mejorar la vida de tu mascota y la tuya
            con facilidad y eficiencia!
          </strong>
        </Typography>
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="h6">Chip de Identificación NFC 🐶</Typography>
            <Typography variant="body2">
              Cada Petpass viene con un chip NFC integrado para una
              identificación rápida y segura.
            </Typography>
          </CardContent>
        </Card>
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="h6">Reporte Rápido de Pérdida 😺</Typography>
            <Typography variant="body2">
              Nuestra plataforma operativa 24/7 te permite reportar cualquier
              pérdida inmediatamente.
            </Typography>
          </CardContent>
        </Card>
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="h6">
              Seguro de Responsabilidad Civil 🛡️
            </Typography>
            <Typography variant="body2">
              El seguro de responsabilidad civil de Petpass no es solo una
              formalidad; es tu red de seguridad en un mundo impredecible. En
              caso de que tu mascota cause daño accidentalmente a terceros,
              nuestro seguro cubre los costos asociados, protegiéndote contra
              reclamaciones que pueden ser económicamente devastadoras. Más allá
              de cumplir con la ley, te ofrecemos la seguridad de saber que
              estás completamente protegido. Con Petpass, no solo cuidas a tu
              mascota, sino que también proteges tu paz mental y tu patrimonio.
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BodyInfo;
