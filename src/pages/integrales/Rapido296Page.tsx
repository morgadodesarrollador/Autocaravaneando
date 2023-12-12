import { Grid, Typography } from '@mui/material'
import React from 'react'

export const Rapido296Page = () => {
  return (
    <Grid container spacing={2} >
        <Grid item xs={1}></Grid>
        <Grid item xs={10} textAlign='left'>
            
            <h2>Modelo Rapido M96</h2>
            
            <Typography variant='body1' paragraph textAlign={'justify'}>
                Uno de los grandes retos del mundo del autocaravaning ha sido conseguir un vehículo con el que poder disfrutar de viajes por carretera como si estuvieras en tu propia casa. Si bien es cierto que toda la gama Benimar está diseñada con todo lujo de detalles para viajar cómodamente, nuestra gama Amphitryon es la máxima expresión de amplitud y confort en una vivienda sobre ruedas. Dicha gama cuenta con las mejores autocaravanas globales del mercado, para que no tengas que prescindir de nada durante tus aventuras.
            </Typography>
            <img src={'/imagenes/rapido/m96.png'} width= '90%' />
        </Grid>
    </Grid>
  )
}
