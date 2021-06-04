//import './assets/bootstrap/css/bootstrap.min.css';
import logo from './assets/img/petbounds_blanco.png';
import React, {Component} from 'react';
import jyarufoto from './assets/img/31DEBA24-3DE2-4BF7-B669-795C667AF9A1_1_201_a.jpeg'
import leconafoto from './assets/img/clipboard-image-1.png';
import yaosaifoto from './assets/img/clipboard-image-2.png';
import amselfoto from './assets/img/clipboard-image-4.png';
import gaelfoto from './assets/img/clipboard-image-3.png';
import boy from './assets/img/guy-walking-with-dog-in-the-park-2127165-2127165.svg'
import EarthBoundlogo from './assets/img/earthlogoblanco.png';
import './assets/css/Login-Form-Dark-1.css';
import './assets/css/Login-Form-Dark.css';
import './assets/css/Registration-Form-with-Photo.css';
import './assets/css/styles.css';
import './assets/css/Team-Boxed.css'
import './index.css';
import './assets/fonts/font-awesome.min.css';
import {Link} from 'react-router-dom'


class PaginaInicio extends Component{
    render(){
        return (
            <div className = "app-petbounds">
             <header className="header-blue">
        <nav className="navbar navbar-dark navbar-expand-md navigation-clean-search">
            <div className="container-fluid"><a className="navbar-brand divLogo"><img className="imagenLogo" src={logo}/></a>
                    <form className="form-inline mr-auto" target="_self"></form><span className="navbar-text spanNavBarText"> <Link to="/IniciaSesion" className="login">Log In</Link></span><Link to="/Registrarse" className="btn btn-light action-button Registrate" role="button">Sign Up</Link>
            </div>
        </nav>
        <div className="container hero">
            <div className="row">
                <div className="col-12 col-lg-6 col-xl-5 offset-xl-1 infoPetbounds">
                    <h1>Salva. Adopta. Cuida</h1>
                    <p>En Petbounds, organizaciones que rescatan animales en condiciones de calle ponen a disposición de los usuarios la oportunidad de adoptar una mascota</p><Link to="/Registrarse" className="btn btn-light btn-lg action-button registrateMain" type="button">Regístrate aquí</Link>
                </div>
                <div className="col-md-12 col-lg-5 offset-lg-1 offset-xl-0 phone-holder divPerrito">
                    <div className="phone-mockup divPerrito"><img className="device" id="device-ini" src={boy}/>
                    </div>
                </div>
            </div>
        </div>
    </header>
            <section className="team-boxed">
                <div className="container">
                    <div className="intro">
                        <h2 className="text-center">EarthBound Tech</h2>
                        <p className="text-center">Estudiantes de programación del IPN amantes de lo animales que buscan usar sus conocimientos para aporta a la sociedad (;</p>
                    </div>
                    <div className="row people">
                        <div className="col-md-6 col-lg-4 item">
                            <div className="box"><img className="rounded-circle" src={jyarufoto}/>
                                <h3 className="name">Jyarü Hernández</h3>
                                <p className="title">WEB DEVELOPER</p>
                                <p className="description">Fan de star wars, la programación y las mamás solteras que de preferencia no tengan hijos</p>
                                <div className="social"><a href="https://www.facebook.com/jochitoquisde"><i className="fa fa-facebook-official"></i></a><a href="https://twitter.com/JyaruH"><i className="fa fa-twitter"></i></a><a href="https://www.instagram.com/jyaru__hernandez/"><i className="fa fa-instagram"></i></a></div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 item">
                            <div className="box"><img className="rounded-circle" src={leconafoto}/>
                                <h3 className="name">Carlos Lecona</h3>
                                <p className="title"><strong>backend developer</strong></p>
                                <p className="description">Síndrome del crujito<br/>Síntomas:<br/>-Crujito</p>
                                <div className="social"><a href="https://www.facebook.com/carlos.lecval"><i className="fa fa-facebook-official"></i></a><a href="https://twitter.com/carloslecval"><i className="fa fa-twitter"></i></a><a href="https://www.instagram.com/carlos_lecona0/"><i className="fa fa-instagram"></i></a></div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 item">
                            <div className="box"><img className="rounded-circle" src={yaosaifoto}/>
                                <h3 className="name">Yaosai Pérez</h3>
                                <p className="title">LOL PLAYER</p>
                                <p className="description">Está persona no reconoce a Israel como un estado legítimo, arriba Palpatine&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</p>
                                <div className="social"><a href="https://www.facebook.com/diego.perezch"><i className="fa fa-facebook-official"></i></a><a href="#"><i className="fa fa-twitter"></i></a><a href="https://www.instagram.com/yaosai.io/"><i className="fa fa-instagram"></i></a></div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 item">
                            <div className="box" id='anseliuts'><img className="rounded-circle" src={amselfoto}/>
                                <h3 className="name">Amsel Castillo</h3>
                                <p className="title"><strong>Sexmachine</strong></p>
                                <p className="description">Me gusta caminar, fan de One piece y de Jøsune, algún día te arrepentirás, tú sabes quién eres. </p>
                                <div className="social"><a href="https://www.facebook.com/Amseliux"><i className="fa fa-facebook-official"></i></a><a href="#"><i className="fa fa-twitter"></i></a><a href="https://www.instagram.com/amselcastillo/"><i className="fa fa-instagram"></i></a></div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 item">
                            <div className="box"><img className="rounded-circle" src={gaelfoto}/>
                                <h3 className="name">Gael Múñoz</h3>
                                <p className="title">Músico</p>
                                <p className="description">Tengo sueño&nbsp;😴😴😴😴😴😴😴😴😴😴😴😴😴😴😴😴😴😴😴😴😴😴😴😴😴😴😴😴😴😴😴😴😴😴😴😴</p>
                                <div className="social"><a href="https://www.facebook.com/dark.slasher324"><i className="fa fa-facebook-official"></i></a><a href="#"><i className="fa fa-twitter"></i></a><a href="https://www.instagram.com/meduele_lacabeza_jajsjxd/"><i className="fa fa-instagram"></i></a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="d-xl-flex justify-content-xl-center align-items-xl-center" style={{background: 'rgb(50,50,50)'}}>
                <div className="container d-xl-flex justify-content-xl-center align-items-xl-center container-footer"><img className="img-fluid" width="50" src={EarthBoundlogo}/></div>
            </footer>
            </div>
          );
    }
}
export default PaginaInicio;
