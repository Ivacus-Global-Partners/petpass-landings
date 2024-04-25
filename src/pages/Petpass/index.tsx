import React from "react";
import BodyInfo from "../../components/BodyInfo";
import InfoForm from "../../components/infoForm";
import IconsInfo from "../../components/IconsInfo";
import HeaderBeca from "../../components/HeaderPetPass";
import { Helmet } from "react-helmet";



const PetPass: React.FC = () => {
  const href =
    "";
  const download = "";
  const claustro = [
    {
      img: "https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2Flandings%2FLanding%20Beca%20Aon%2FCarmen-Burgos-Casas%402x.png?alt=media&token=11917d00-fa73-42fe-8af4-03589c5f5671",
      name: "Carmen Burgos Casas",
      job: "Executive Director Health Solutions at Aon",
    },
    {
      img: "https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2Flandings%2FLanding%20Beca%20Aon%2Fvanessa-izquierdo%402x.png?alt=media&token=4969e609-dc86-4069-bd15-d03699373ef4",
      name: "Vanessa Izquierdo",
      job: "Directora Académica del Máster Executive en Dirección de Recursos Humanos. Directora Ejecutiva Sagardoy Business & Law School.  ",
    },
    {
      img: "https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2Flandings%2FLanding%20Beca%20Aon%2Fnaira%402x.png?alt=media&token=3042095a-57b2-419c-a613-4f7c6ed22b01",
      name: "Naira Pérez Alonso",
      job: "Directora de Estrategia de Sagardoy Business & Law School ",
    },
  ];
  const texto = (
    <>
      <strong>La solución digital, <span style={{ color: "#2DA956" }}>Web, App y Smart Pet Tag</span> para la movilidad inteligente de tus mascotas</strong> 😘
      <br />
      <br />
      <strong>Date de <span style={{color:"#007aff"}}>Alta Gratis</span> y disfruta de la mejor plataforma para tener digitalizada la documentación de tu “peludo” con un <span style={{ color: "#2DA956" }}>Smart Pet Tag</span> para localizar siempre a tu mejor amigo y poder acceder a comercios, bares, restaurantes y todos los medios de transporte público sin barreras.</strong>
    </>
  );
  
  const texto1 = (
    <>
      Si eres directivo o futuro directivo de RRHH que busca impulsar cambios
      significativos, esta beca es para ti. 
    </>
  );
  const texto2 = (
    <>
      <strong>1er Premio:</strong> Admisión al Máster Executive en Dirección de
      Recursos Humanos para el año académico 2024, con una beca que cubre el
      100% de las tasas del programa.
      <br />
      <br />
      <strong>2do Premio:</strong> Admisión al Máster Executive en Dirección de
      Recursos Humanos para el año académico 2024, con una beca que cubre el 50%
      de las tasas del programa.
    </>
  );
  const texto3 = (
    <>
      El Jurado examinará las postulaciones y seleccionará a los ganadores el
      día 7 de junio de 2024. En esa misma fecha, daremos a conocer la decisión
      sobre los ganadores a las becas para el{" "}
      <strong>
        Máster Executive en Dirección de Recursos Humanos de Sagardoy Business &
        Law School 2024.
      </strong>
    </>
  );
  const textoPremios = (
    <>
      <strong>1er Premio:</strong> 1 beca del 100% para el Máster Executive en Dirección de RRHH, edición 2024<br/>
      <strong>2do Premio:</strong> 1 beca del 50% para el Máster Executive en Dirección de RRHH, edición 2024
    </>
  );
  const redirect = "https://sagardoyschool.com/thank-you/beca-aon-impulsando-la-innovaci%C3%B3n-en-recursos-humanos/";

  return (
    <div>
      <Helmet>
        <title>Beca Aon: Impulsando la innovación en Recursos Humanos</title>
        <meta
          name="title"
          content="Beca Aon: Impulsando la innovación en Recursos Humanos"
        />
        <meta name="description" content="Descripción de la beca Aon aquí." />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="beca, Aon, innovación, recursos humanos"
        />
      </Helmet>

      <HeaderBeca
        image={
          "https://firebasestorage.googleapis.com/v0/b/sagardoy-lms.appspot.com/o/website%2FPetpassLandings%2FSlider_petpass1.png?alt=media&token=4e323848-e003-47bb-8b30-a3ecad10f265"
        }
      />
      <InfoForm
        productId="0x111115a"
        formId="0x11110e1"
        href={href}
        download={download}
        redirect={redirect}
        title
        shadow
        submit={<>Enviar</>}
      />
      <BodyInfo
        title={
          <p style={{ color: "#2DA956", margin: 0 }}>¿Qué es PETPASS?</p>
        }
        body={texto}
      />
    
      <IconsInfo
        title="¿Qué incluye?"
        body={[
          "Web y App",
          "Smart Pet Tag",
          "Localización en tiempo real",
          "Acceso a comercios, bares, restaurantes y medios de transporte público",
        ]}
     
    </div>
  );
};

export default PetPass;
