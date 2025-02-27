import { Grid, Typography } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'

export const PerfiladasPage = () => {
  return (
    <Grid container textAlign={'left'} >
      <Grid item xs={1}></Grid>
      <Grid item xs={10}  sx={{ width: '90%'}}>
      <h2>Autocaravanas Perfilada</h2>
        <hr></hr>
        <Typography paragraph textAlign='justify'>
            <p>Las autocaravanas perfiladas se caracterizan principalmente por su versatilidad, ya que estos vehículos  tienen  diferentes dimensiones de altura y longitud, desde los 6 metros de longitud hasta los casi 8 metros que se adaptan al número de personas que viajen, desde una pareja hasta un máximo de cinco o hasta seis personas.</p>
            <p>Las autocaravanas perfiladas o también llamadas semi-integrales a su vez se caracterizan por un diseño más aerodinámico que el resto de autocaravanas como las autocaravanas capuchinas, con más estabilidad, un consumo de combustible menor y una más fácil conducción.</p>
        </Typography>
       </Grid>
       <Grid item xs={1}></Grid>

    </Grid>
  )
}

    