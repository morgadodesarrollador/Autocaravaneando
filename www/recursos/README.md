# Inicio del Proyecto
El proyecto React lleva:
- React Router Dom v6
- Material UI, fuentes, material icons
- se facilita el package json por si deseas realizar un npm install

## Maqueta
La app es solo modo escritorio y se divide en dos columnas
- el menu vertical 20%
- La main 80%

## Estructura del proyecto
Estructura de carpetas y organización de componentes similar a la vista en clase.
Tienes la libertad de organizar con el criterio que veas más conveniente

## El Menu lateral
Es un NavBar con la estructura <List> de Mui
 <nav aria-label="main mailbox folders">
    <List>
        <ListItem disablePadding>
            <ListItemButton component={Link} to='/integrales'>
                <ListItemText primary="Integrales" />
            </ListItemButton>
        </ListItem>
    ...
    Los enlaces son los ListItemButton se comportan como Links con "component" y "to"
    ListButtom > ListItemIcon + ListItemText


## El Sistema de Routin en App.tsx
    Es casi calcado al de clase pero solo hay un Outlet en el <Main>
    Es decir todas las páginas dependen del / y sus componentes se cargan en el <Outlet> del <Main>

## En la página IntegralesPage.tsx
    Consiste en recorrer el array de vídeos en data_videsos.ts
    y para cada "video" llamar a un componente que "muestre el video" de youtube. El código del iframe de you tube lo tienes en "iframe_video.txt"
    Se muestra en una estructura de Grid->container y tres vídeos por fila doce cada video ees un Grid->item con {xs=4}

## En el diseño de las páginas se usa una estructura de Grid de Mui
Usamos Grid container y Grid item.
Los párrafos y títulos se han programado con <Typography> de Mui
En algunas páginas se ha usado el componente <Box>