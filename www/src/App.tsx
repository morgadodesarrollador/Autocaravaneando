
import './App.css';
import { Header } from './estructura/header/Header';
import { Main } from './estructura/main/Main';
import { Navigate, Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/secciones/HomePage';
import { IntegralesPage } from './pages/integrales/IntegralesPage';
import { AmphitryonPage } from './pages/integrales/AmphitryonPage';
import { PerfiladasPage } from './pages/perfiladas/PerfiladasPage';
import { Mileo297Page } from './pages/perfiladas/Mileo297Page';
import { Grid } from '@mui/material';
import { Rapido296Page } from './pages/integrales/Rapido296Page';

function App() {
  return (
    <Grid container >
      <div className='App'>
        <Header />    
          <Routes>
            <Route path='/'  element= {<Main></Main>}>
              <Route  index element={ <HomePage />} />  
              <Route path='integrales' element={ <IntegralesPage />} />
              <Route path='integrales/amphitryon' element={ <AmphitryonPage />}  /> 
              <Route path='integrales/rapidom96' element={ <Rapido296Page />}  /> 
              <Route path='perfiladas' element={ <PerfiladasPage />} />
              <Route path='perfiladas/mileo297' element={ <Mileo297Page />}  /> 
              <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
          </Routes>
      </div>
    </Grid>
    
  );
}

export default App;
