import { Typography } from '@mui/material'
import React, { FC } from 'react'

interface Ivideo{
    title: string,
    url: string
} 
interface Props {
    video: Ivideo
}
export const Video:FC<Props> = ({video}) => {
  return (
    <>
        <Typography variant='subtitle2' color={'blue'}>{video.title}</Typography>
        <iframe width="351" height="235" 
        src={video.url} 
        title="Amphitryon 940 - Autocaravanas / Motorhome/Camping-Cars/Wohnwagen  Benimar 2021" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        >
        </iframe>   
        
    </>

  
  )
}
