import React, {Component} from 'react';
import './assets/bootstrap/css-inicio/bootstrap.min.css';
import './assets/css/Login-Form-Dark-1.css';
import './assets/css/Login-Form-Dark.css';
import './assets/css/Registration-Form-with-Photo.css';
import './assets/css/styles.css';
import './assets/css/Team-Boxed.css'
import './index.css';
import './assets/fonts/font-awesome.min.css';
import logo from './assets/img/petbounds_blanco.png';
import {Link} from 'react-router-dom'

class CrearUsuario extends Component{
    render(){
        return(
            <div>
                <nav className="navbar navbar-light navbar-expand-lg fixed-top bg-dark" id="mainNav" style={{color: 'var(--gray-dark)'}}>
                    <div className="container">
                    <Link to = "/"><a style={{cursor:'pointer'}}>
                        <img className="img-fluid d-lg-flex justify-content-lg-center" src={logo} width="500" style={{textAlign:'center'}}/>
                    </a></Link>
                    </div>
                </nav>
                <section class="register-photo">
                    <div class="form-container">
                        <form method="post">
                            <h2 class="text-center"><strong>Crea tu cuenta</strong></h2>
                            <div class="form-group"><input class="form-control" type="email" name="email" placeholder="Correo"/></div>
                            <div class="form-group"><input class="form-control" type="text" placeholder="Nombre completo"/></div>
                            <div class="form-group"><input class="form-control" type="text" placeholder="Nombre de usuario"/></div>
                            <div class="form-group"><input class="form-control" type="password" placeholder="Contraseña"/>
                            <div class="form-check"><label class="form-check-label"></label></div>
                            </div><a class="d-lg-flex justify-content-lg-start already">Fecha de nacimiento</a><input class="form-control" type="date" name="Fecha-Nacimiento"/>
                                <select class="form-control">
                            <optgroup label="Género">
                                <option value="12" selected="">Género</option>
                                <option value="13">Femenino</option>
                                <option value="14">Masculino</option>
                            </optgroup>
                            </select>
                            <h2 class="text-center"><strong>Sube tus archivos (INE y comprobante)</strong></h2><input class="form-control-file" type="file" id="ine-registro"/><input class="form-control-file" type="file" id="comprobante-registro"/>
                            <div class="form-group"><button class="btn btn-primary btn-block" type="submit">Crear cuenta</button></div><a class="already" href="login.html">¿Ya tienes una cuenta? Inicia sesión aquí&nbsp;</a>
                        </form>
                    </div>
                </section>
            </div>
        );
    }
}
export default CrearUsuario;