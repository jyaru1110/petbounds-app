import React from 'react';
import {Route,Link} from 'react-router-dom';
import PaginaInicio from './PaginaInicio';  
import LogIn from './LogIn';  
import MenuRegistro from './MenuRegistro';  
import CrearUsuario from './CrearUsuario';  
import CrearNegocio from './CrearNegocios';  
import CrearOrg from './CrearOrg';  

//Función principal de la aplicación, muestra la página de inicio
function App() {
  return (
    <div className='App'>
      <Route exact path="/" component={PaginaInicio}/>
      <Route exact path="/IniciaSesion" component={LogIn}/>
      <Route exact path="/Registrarse" component={MenuRegistro}/>
      <Route exact path="/CrearUsuario" component={CrearUsuario}/>
      <Route exact path="/CrearNegocio" component={CrearNegocio}/>
      <Route exact path="/CrearOrg" component={CrearOrg}/>
    </div>
  );
}
export default App;
