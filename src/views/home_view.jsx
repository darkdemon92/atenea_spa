import Grid from "@mui/material/Grid";

function Home_View() {
  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={2}></Grid>
        <Grid item xs={8}>
          <img src="/AteneaSPA.png" className="logo" alt="logo" />
        </Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={12}>
          <h1>
            Bienvenida en AteneaSpa les brindamos los siguientes servicios:
          </h1>
          <h3>
            <code>🌺🌺FACIALES🌺🌺</code>
          </h3>
          <p>
            1-Limpieza profunda <br />
            2-Limpieza profunda + tratamiento <br />
            3-Bb glow <br />
            4-Bb lips <br />
            5-Dermapen <br />
            6-Tratamiento cicatricure <br />
            7-Tratamientos(labios,acnés,ojera,minimizador de
            poros,flacidez,hidratación,relajación)
          </p>
          <h3>
            <code>🌺🌺CORPORALES🌺🌺</code>
          </h3>
          <p>
            1-Tratamiento reductor de grasa <br />
            2-Alta frecuencia capilar <br />
            3-Tratamiento reductor de estrías <br />
            4-Tratamiento aclaración de zonas (cuello,axila,entre
            piernas,codos,tobillos,rodillas) <br />
            5-Depilación láser(bigote,barbilla,rostro completo,ombligo,línea del
            bikini,pecho,espalda,bikini,brazos,piernas) <br />
            6-Masajes
          </p>
          <h3>
            <code>🌺🌺UÑAS🌺🌺</code>
          </h3>
          <p>
            1-Pintura de gel en uñas naturales <br />
            2-Técnicas de endurecimiento <br />
            3-Acrílicas
          </p>
          <h3>
            <code>🌺🌺PELUQUERÍA🌺🌺</code>
          </h3>
          <p>
            1-Keratinas <br />
            2-Definición de rizos <br />
            3-Tintes <br />
            4-Cortes <br />
            5-Trenzas <br />
            6-Grapas <br />
            7-Extensiones Y más
          </p>
          <h3>
            <code>🌺🌺OTROS SERVICIOS QUE SE OFRECEN🌺🌺</code>
          </h3>
          <p>
            1-Puestas de pestañas y depilación de cejas <br />
            2-Tatuado de ojos y cejas <br />
            3-Blankiamiento dental <br />
            4-Perforaciones(solo área oreja)
          </p>
        </Grid>
      </Grid>
    </>
  );
}

export default Home_View;
