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

//Función principal de la aplicación, muestra la página de inicio
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
      <Route exact path="/Detalles/:idUs/:idMas" component={DetallesMascota}/>
      <Route exact path="/ConfirmacionSolicitud/:idUs/:idMas" component={ConfirmacionSolicitud}/>
    </BrowserRouter>
  );
}
export default App;
