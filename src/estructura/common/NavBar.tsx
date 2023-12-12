import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';

import React from 'react'
import { Link } from 'react-router-dom';

export const NavBar = () => {
  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <nav aria-label="main mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton component={Link} to='/integrales'>
              <ListItemText primary="Integrales" />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem disablePadding>
            <ListItemButton component={Link} to='/integrales/amphitryon'>
              <ListItemIcon>
                <AirportShuttleIcon />
              </ListItemIcon>
              <ListItemText primary="Amphitryon 998" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={Link} to='/integrales/rapidom96'>
              <ListItemIcon>
                <AirportShuttleIcon />
              </ListItemIcon>
              <ListItemText primary="Rápido M96" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
      {/* <Divider /> */}
      <nav aria-label="secondary mailbox folders">
        <List>
        <ListItem disablePadding>
            <ListItemButton component={Link} to='/perfiladas'>
              <ListItemText primary="Perfiladas" />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem disablePadding>
            <ListItemButton component={Link} to='/perfiladas/mileo297'>
              <ListItemIcon>
                <AirportShuttleIcon />
              </ListItemIcon>
              <ListItemText primary="Mileo297" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
  )
}
