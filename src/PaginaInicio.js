//import './assets/bootstrap/css/bootstrap.min.css';
import logo from './assets/img/petbounds_blanco.png';
import React, {Component} from 'react';
import perritonegro from './assets/img/perritonegro.png';
import jyarufoto from './assets/img/31DEBA24-3DE2-4BF7-B669-795C667AF9A1_1_201_a.jpeg'
import leconafoto from './assets/img/clipboard-image-1.png';
import yaosaifoto from './assets/img/clipboard-image-2.png';
import amselfoto from './assets/img/clipboard-image-4.png';
import gaelfoto from './assets/img/clipboard-image-3.png';
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
              <nav className="navbar navbar-light navbar-expand-lg fixed-top bg-dark" id="mainNav">
                <div className="container"><img className="img-fluid" src={logo} width="400"/></div>
              </nav>
              <header class="masthead" style={{background: '#333333!important'}}>
                <div class="container h-100" style={{marginTop:'30px'}}>
                    <div class="row justify-content-start h-100">
                        <div class="col-lg-7 my-auto" style={{marginBottom: '0px'},{marginTop:'144.5px'},{padding:'0px 15px'}}>
                            <div class="mx-auto header-content" style={{marginBottom:'60px'},{marginLeft:'67.5px'}}>
                                <h1 class="d-lg-flex align-items-lg-start mb-5" style={{fontFamily:'Lexend'}}>Salva. Adopta.<br/>Cuida.<br/></h1>
                                <h2 class="d-lg-flex justify-content-lg-end mb-5" style={{fontFamily:'Lexend'},{color:'var(--white)'}}>Unete a Petbounds y haz esto y mucho más<br/><br/><br/></h2>
                                <div class="form-group d-lg-flex justify-content-lg-center justify-content-xl-start"><Link to="/IniciaSesion"><a class="btn btn-outline-warning text-uppercase d-xl-flex justify-content-xl-center align-items-xl-center btn-xl js-scroll-trigger botones-inicio" role="button">Iniciar Sesión</a></Link><Link to="/Registrarse"><a class="btn btn-outline-warning text-uppercase text-center d-xl-flex justify-content-xl-center align-items-xl-center btn-xl js-scroll-trigger botones-inicio" role="button" >Registrarse</a></Link></div>
                            </div>
                        </div>
                    <div class="col-lg-5 d-xl-flex justify-content-xl-end" style={{marginTop:'60px'},{marginBottom:'60px'},{paddingRight:'0px'},{paddingLeft:'0px'}}>
                        <div class="device-container" style={{height: '100%'}}>
                            <div class="device-mockup iphone6_plus portrait white">
                                <div class="device" style={{marginTop:'61px'}}>
                                    <div class="d-xl-flex justify-content-xl-center align-items-xl-center screen" style={{height:'100%'}}><img class="d-xl-flex" src={perritonegro} style={{height: '571px'}}/></div>
                                    <div class="button"></div>
                                </div>
                            </div>
                        </div>
                    <div class="iphone-mockup"></div>
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
                                <p className="description">Apasionado de la programación y la robotica con un profundo amor por los animales y la naturaleza</p>
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
            <footer class="d-xl-flex justify-content-xl-center align-items-xl-center" style={{background: 'rgb(34,34,34)'}}>
                <div class="container d-xl-flex justify-content-xl-center align-items-xl-center container-footer"><img className="img-fluid" width="50" src={EarthBoundlogo}/></div>
            </footer>
            </div>
          );
    }
}
export default PaginaInicio;
