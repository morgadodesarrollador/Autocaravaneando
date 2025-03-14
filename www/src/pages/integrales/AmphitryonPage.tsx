import { Padding } from '@mui/icons-material'
import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

export const AmphitryonPage = () => {
  return (
    <>
    <Grid container spacing={2} >
      <Grid item xs={1}></Grid>

      <Grid item xs={10} textAlign='left'>
        <h2>Amphitryom 998-1-JENKINS</h2>
        <p>Esos son los tres ejes de uno de los buques insignia de Benimar: el Amphitryon 998. Una autocaravana integral de 7,4 metros, con dormitorio tipo suite que permite una separación completa de estancias y cama abatible sobre cabina, que añade dos plazas de noche sin comprometer el espacio disponible; por lo que se presenta como un modelo perfecto para familias como parejas que buscan espacio y confort.</p>
      </Grid>
      <Grid item xs={6}>
        <Box
              sx={{
                margin: '0 auto',
                width: '90%',
              }}
          >
            <img src={'/imagenes/amphitryon/A998_T21.jpg'} width= '100%' />
          </Box>
      </Grid>
      <Grid item xs={6} textAlign='left'>
        <Box
            sx={{
              margin: '0 auto',
              width: '95%',
              border: '1px solid grey',
              padding: '5px',
              boxShadow: '2px 2px grey'
            }}
        >
            <Typography variant='h4'>
                Integral
            </Typography>
            <Typography variant='body1'>
              Cama Central
            </Typography>
            <img src={'/imagenes/amphitryon/distribucion.jpg'} width= '100%' />
            <Typography paragraph>
              <ul>
                <li>Benimar Amphitryon 998 Alfa</li>
                <li>Con 4 plazas para comer, dormir y circular</li>
                <li>Cama isla</li>
                <li>Motor Fiat de 160CV</li>
                <li>Cocina con horno a gas</li>
              </ul>
            </Typography>
        </Box>
      </Grid>
      <Grid item xs={1}></Grid>
      

       
   
    </Grid>

</> 
    
  )
}
