import { Grid, Typography } from '@mui/material'
import './Home.css';

export const HomePage = () => {
  return (
    <>
      <Grid container  textAlign={'left'} height='100vh' className='home-fondo'>
        <Grid item xs={1}></Grid>
        <Grid item xs={10}  sx={{ width: '90%'}}>
        <h2>Viajando en Libertad en Autocaravana</h2>
          <hr></hr>
          <Typography paragraph textAlign='justify'>
              <p>Viajar en autocaravana es sinónimo de aventura y libertad. Solo tienes que escoger el lugar que deseas visitar y emprender el camino. Visitar maravillosos paisajes a tu aire, siempre teniendo la libertad de parar cuando quieres, tomar fotos únicas y crear recuerdos inolvidables con tus amigos, familia o pareja.</p>
              <p>Todo esto es posible con una autocaravana. Porque hay cientos de lugares para disfrutar en España… Y a todos puedes llegar en una de estas cómodas y seguras autocaravanas. Viajar en autocaravana te da flexibilidad y te permite recorrer un territorio a tu ritmo, creando experiencias inolvidables. Viajar en este tipo de vehículo cambia el panorama de tu aventura y te da una sensación de libertad como pocas.</p>
              <p>¿Os acordáis? Esa sensación de no tener prisa por llegar al destino. Quizá no. Bajad la ventanilla, sentid el aire fresco en la cara y dejad que el viaje fluya. Parar en ese pueblo por el que pasamos o en el siguiente ¡por qué no! Tener libertad para hacer lo que a uno le venga en gana. La autonomía y la espontaneidad son dos de las ventajas cuando nos ponemos al volante de nuestra propia ruta. La España rural nos espera. Si os tira el norte, podéis aventuraros en el Valle de Liébana, partiendo desde Potes y recorrer algunos de sus más de 100 pueblos decidiendo sobre la marcha; o conducir hasta Extremadura y descubrir las maravillosas montañas de la Vera a través del retrovisor.</p>
          </Typography>
        </Grid>
        <Grid item xs={1}></Grid>

      </Grid>
    </>
  )
}


