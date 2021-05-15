import React, {Component} from 'react';
import reportWebVitals from './reportWebVitals';
import './assets/bootstrap/css-inicio/bootstrap.min.css';
import './assets/css/Login-Form-Dark-1.css';
import './assets/css/Login-Form-Dark.css';
import './assets/css/Registration-Form-with-Photo.css';
import './assets/css/styles.css';
import './assets/css/Team-Boxed.css'
import './index.css';
import './assets/fonts/font-awesome.min.css';
import logo from './assets/img/petbounds_blanco.png';
import usuarioPet from './assets/img/usuario-pet.png'
import negocioPet from './assets/img/negociopet.png'
import orgPet from './assets/img/asociacionespet.png'
import {Link} from 'react-router-dom';

class MenuRegistro extends Component{
    render(){
        return(
        <div style={{backgroundColor:'var(--gray-dark)'}}>
            <nav className="navbar navbar-light navbar-expand-lg fixed-top bg-dark" id="mainNav" style={{color: 'var(--gray-dark)'}}>
                <div className="container">
                    <Link to = "/"><a style={{cursor:'pointer'}}>
                        <img className="img-fluid d-lg-flex justify-content-lg-center" src={logo} width="500" style={{textAlign:'center'}}/>
                    </a></Link>
                </div>
            </nav>
            <div>
                <h1 class="text-center d-lg-flex justify-content-lg-center mb-5" style={{margin: '0px'},{marginBottom: '0px'},{fontFamily: 'Lexend'},{background: 'var(--dark)'},{marginTop: '70px'}}><br/>¿Con que tipo de usuario le gustaría&nbsp;<br/>registrarse?<br/></h1>
                <div class="container" style={{background:'var(--dark)'}}>
                    <div class="row" style={{marginRight: '0px'},{marginLeft: '0px'}}>
                    <div class="col-md-4 d-flex d-sm-flex d-lg-flex d-xl-flex flex-column align-items-center align-items-sm-center justify-content-xl-center align-items-xl-center" style={{marginBottom: '5px'}}><img class="img-fluid" src={usuarioPet} width='250' style={{height:'auto'},{marginBottom: '5px'}}/><Link to = "/CrearUsuario"><button class="btn btn-outline-warning btn-xl js-scroll-trigger" style={{fontFamily:'Lexend'}}>Usuario Común</button></Link></div>
                    <div class="col-md-4 d-flex d-sm-flex d-md-flex d-lg-flex d-xl-flex flex-column align-items-center align-items-sm-center align-items-xl-center" style={{marginBottom: '5px'}}><img class="img-fluid" src={negocioPet} width="auto" style={{height: '270px'},{marginBottom: '6px'}}/><Link to = "/CrearNegocio"><button class="btn btn-outline-warning btn-xl js-scroll-trigger" style={{fontFamily:'Lexend'}}>Negocio</button></Link></div>
                    <div class="col-md-4 d-flex d-sm-flex d-md-flex d-lg-flex d-xl-flex flex-column align-items-center align-items-sm-center align-items-lg-center align-items-xl-center" style={{marginBottom: '5px'}}><img class="img-fluid" src={orgPet} width="auto" style={{height:'270px'},{marginBottom: '5px'}}/><Link to = "/CrearOrg"><button class="btn btn-outline-warning btn-xl js-scroll-trigger" style={{fontFamily:'Lexend'}}>Organización</button></Link></div>
                </div>
        </div>
    </div>
        </div>
        );
    }
}
reportWebVitals();
export default MenuRegistro;