import React from "react";
import BodyInfo from "../../components/BodyInfo";
import InfoForm from "../../components/infoForm";
import HeaderPetPass from "../../components/HeaderPetPass";
import IconsInfo from "../../components/IconsInfo";
import BodyInfo1 from "../../components/BodyInfo1";
import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";



const PetPass: React.FC = () => {
  const href =
    "";
  const download = "";
 


  const redirect = "https://sagardoyschool.com/thank-you/beca-aon-impulsando-la-innovaci%C3%B3n-en-recursos-humanos/";

  return (
    <div>
      <Helmet>
        <title>Pet Pass</title>
        <meta
          name="title"
          content="PetPass - La solución digital para la movilidad inteligente de tus mascotas"
        />
        <meta name="description" content="Descripción de PetPass." />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="web, app, smart pet tag, movilidad inteligente, mascotas, alta gratis, smart pet tag, localizar, comercios, bares, restaurantes, transporte público, barreras"
        />
      </Helmet>

      <HeaderPetPass
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
      <BodyInfo />
      <IconsInfo title="Características Principales" />
      <BodyInfo1/>
      <Footer />
       

    </div>
   
  );
};

export default PetPass;
