import React from 'react';
import {Route} from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom'
import PaginaInicio from './PaginaInicio';  
import LogIn from './LogIn';  
import MenuRegistro from './MenuRegistro';  
import CrearUsuario from './CrearUsuario';  
import CrearNegocio from './CrearNegocios';  
import CrearOrg from './CrearOrg';  
import HomeUs from './HomeUs';
import DetallesMascota from './DetallesMascota'
import ConfirmacionSolicitud from './ConfirmacionSolicitud'
import PerfilUs from './PerfilUs';
import MisLikesUs from './MisLikesUs'
import EditarPerfilUs from './EditarPerfilUs'
import MisAdopcionesUs from './MisAdopcionesUs'
import HomeOrg from './HomeOrg'
import Validacion from './Validacion'
import AdopcionesOrg from './AdopcionesOrg';
import MisMascotasOrg from './MisMascotasOrg';
import EditarMascota from './EditarMascota';
import PerfilOrg from './PerfilOrg';
import EditarPerfilOrg from './EditarPerfilOrg';
import ChatUs from './ChatUs';
import ChatOrg from './ChatOrg';
import DonacionesOrg from './DonacionesOrg'
import DonacionesUs from './DonacionesUs'

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={PaginaInicio}/>
      <Route exact path="/IniciaSesion" component={LogIn}/>
      <Route exact path="/Registrarse" component={MenuRegistro}/>
      <Route exact path="/CrearUsuario" component={CrearUsuario}/>
      <Route exact path="/CrearNegocio" component={CrearNegocio}/>
      <Route exact path="/CrearOrg" component={CrearOrg}/>
      <Route exact path="/HomeUs/:id" component={HomeUs}/>
      <Route exact path="/PerfilUs/:idUs" component={PerfilUs}/>
      <Route exact path="/Detalles/:idUs/:idMas" component={DetallesMascota}/>
      <Route exact path="/ConfirmacionSolicitud/:idUs/:idMas" component={ConfirmacionSolicitud}/>
      <Route exact path="/MisLikesUs/:idUs" component={MisLikesUs}/>
      <Route exact path="/EditarPerfilUs/:idUs" component={EditarPerfilUs}/>
      <Route exact path="/MisAdopcionesUs/:idUs" component={MisAdopcionesUs}/>
      <Route exact path="/HomeOrg/:idOrg" component={HomeOrg}/>
      <Route exact path="/Validacion/:id" component={Validacion}/>
      <Route exact path="/AdopcionesOrg/:idOrg" component={AdopcionesOrg}/>
      <Route exact path="/MisMascotasOrg/:idOrg" component={MisMascotasOrg}/>
      <Route exact path="/EditarMascota/:idOrg/:idMas" component={EditarMascota}/>
      <Route exact path="/PerfilOrg/:idOrg" component={PerfilOrg}/>
      <Route exact path="/EditarPerfilOrg/:idOrg" component={EditarPerfilOrg}/>
      <Route exact path="/DonacionesOrg/:idOrg" component={DonacionesOrg}/>
      <Route exact path="/DonacionesUs/:idUs" component={DonacionesUs}/>
      <Route exact path="/ChatUs/:idUs/:idSol" component={ChatUs}/>
      <Route exact path="/ChatOrg/:idOrg/:idSol" component={ChatOrg}/>
    </BrowserRouter>
  );
}
export default App;
