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
    </BrowserRouter>
  );
}
export default App;
