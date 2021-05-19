import React, { useState } from 'react';
import reportWebVitals from './reportWebVitals';
import './assets/bootstrap/css/bootstrap.min.css';
import './assets/fonts/font-awesome.min.css';
import './assets/fonts/fontawesome5-overrides.min.css';
import './assets/css/styles.css';
import './assets/css/Article-Clean.css'
import './assets/css/Highlight-Phone.css'
import './assets/css/Navigation-Clean.css'
import './assets/css/Navigation-with-Search.css'
import './index.css';
import './assets/fonts/font-awesome.min.css';
import logo from './assets/img/petbounds_blanco.png';
import perritoRisas from './assets/img/perrito_risa.png';
import { Link, useParams } from 'react-router-dom';
import { gql, useMutation, useQuery } from '@apollo/client';
import 'bootstrap';
import 'bootstrap/dist/js/bootstrap.js';
import $, { data, param } from 'jquery';
import Popper from 'popper.js';

const USUARIO = gql`
query ($usuarioId: ID!) {
    usuario(id: $usuarioId) {
      id
      nombre
      apellidop
      foto
    }
  }
  `;
const FEED_MASCOTAS = gql`
  query{
      mascotasFeed {
          id
          raza
          edad
          nombre
          foto
          tamano
          sexo
          estado
          organizacion{
              nombre
              foto
          } 
      }
  }
`;
function HomeUs(props){
    return(
        <div>
            <Header/>
            <Cuerpo id={props.match.params.id}/>
        </div>
    );
}
function Header(props){
    return(
        <div>
        <div class="d-inline-flex justify-content-between align-items-center" id="header-menu" style={{color: 'var(--white)'}}><a className='texto-menu-sup'><img class="rounded-circle"src={perritoRisas}/></a><a className='texto-menu-sup'>Adopciones</a><a className='texto-menu-sup'>Servicios</a><a className='texto-menu-sup'>Donaciones</a></div>
        <div>
            <img className="logo-petbounds" src={logo}/>
        </div>
        </div>
    );
    
}
function Cuerpo(props) {
    const { loading, error, data } = useQuery(USUARIO, {
        variables: {
            "usuarioId": props.id
        },
    });
    if (loading) return null;
    if (error) return <Error></Error>;
    else {
        return (
            <div className="container contenedor-main">
                        <div className="row">
                            <div className="col-12 col-md-4 col-lg-4 col-xl-4 d-flex flex-column"></div>
                            <div className="col-12 col-md-4 col-lg-4 col-xl-4 d-flex flex-column" id="menu-lateral"><a className="link-perfil"><span className="text-left texto-menu-lateral-con-foto"><img className="rounded-circle foto-perfil-menu-lateral" src={data.usuario.foto} /><strong>{data.usuario.nombre}</strong></span></a><a className="link-menu-lateral"><span className="text-left texto-menu-lateral"><i className="fa fa-paw"></i><strong>Adopciones</strong></span></a><a className="link-menu-lateral"><span className="text-left texto-menu-lateral"><i className="fa fa-shopping-cart" ></i><strong>Servicios</strong></span></a><a className="link-menu-lateral"><span className="text-left texto-menu-lateral"><i className="fa fa-money"></i><strong>Donaciones</strong></span></a><a className="link-menu-lateral"><span className="text-left texto-menu-lateral"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" className="bi bi-file-earmark-text">
                                <path d="M4 0h5.5v1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h1V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z"></path>
                                <path d="M9.5 3V0L14 4.5h-3A1.5 1.5 0 0 1 9.5 3z"></path>
                                <path fill-rule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"></path>
                            </svg><strong>Mis adopciones</strong></span></a><a className="link-menu-lateral"><span className="text-left texto-menu-lateral"><i className="fa fa-heart-o" ></i><strong>Mis likes</strong></span></a><a className="link-menu-lateral"><span className="text-left texto-menu-lateral" ><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" className="bi bi-question-octagon">
                                <path fill-rule="evenodd" d="M4.54.146A.5.5 0 0 1 4.893 0h6.214a.5.5 0 0 1 .353.146l4.394 4.394a.5.5 0 0 1 .146.353v6.214a.5.5 0 0 1-.146.353l-4.394 4.394a.5.5 0 0 1-.353.146H4.893a.5.5 0 0 1-.353-.146L.146 11.46A.5.5 0 0 1 0 11.107V4.893a.5.5 0 0 1 .146-.353L4.54.146zM5.1 1L1 5.1v5.8L5.1 15h5.8l4.1-4.1V5.1L10.9 1H5.1z"></path>
                                <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"></path>
                            </svg><strong>Ayuda</strong><br /></span></a><a className="link-menu-lateral" ><span className="text-left texto-menu-lateral" ><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" className="bi bi-box-arrow-left">
                                <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z"></path>
                                <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"></path>
                            </svg><strong>Salir</strong></span></a>
                            </div>
                            <div className="col-12 col-sm-12 col-md-8 col-lg-6 col-xl-5 principal">
                                <div className="row justify-content-center">
                                    <div className="col-md-4 col-lg-4 col-xl-3 sust-filtros">
                                    </div>
                                    <div className="col-12 col-md-8 col-lg-7 col-xl-7 d-inline-flex justify-content-center flex-wrap">
                                    </div>
                                    <div className="col-12 col-md-8 col-lg-7 col-xl-7 d-inline-flex justify-content-center flex-wrap" id="col-filtros" style={{ paddingRight: '0px' }, { paddingLeft: '0px' }}>
                                        <div className="dropdown"><button className="btn btn-primary dropdown-toggle" aria-expanded="false" data-toggle="dropdown" type="button">Tamaño</button>
                                            <div className="dropdown-menu"><a className="dropdown-item" href="#">Alto</a><a className="dropdown-item" href="#">Grande</a><a className="dropdown-item" href="#">Venti</a></div>
                                        </div>
                                        <div className="dropdown"><button className="btn btn-primary dropdown-toggle" aria-expanded="false" data-toggle="dropdown" type="button" style={{ fontFamily: 'Lexend' }, { borderStyle: 'none' }, { background: '#606060' }, { fontSize: '13px' }, { marginRight: '10px' }}>Sexo&nbsp;</button>
                                            <div className="dropdown-menu"><a className="dropdown-item" href="#">Masculino</a><a className="dropdown-item" href="#">Femenino</a><a className="dropdown-item" href="#">Keti</a></div>
                                        </div>
                                        <div className="dropdown"><button className="btn btn-primary dropdown-toggle" aria-expanded="false" data-toggle="dropdown" type="button" style={{ fontFamily: 'Lexend' }, { background: '#606060' }, { borderStyle: 'none' }, { fontSize: '13px' }, { margiTop: '0px' }, { marginRight: '10px' }}>Animal</button>
                                            <div className="dropdown-menu"><a className="dropdown-item" href="#">Perro</a><a className="dropdown-item" href="#">Gato</a><a className="dropdown-item" href="#">Mamut</a></div>
                                        </div>
                                        <div className="dropdown"><button className="btn btn-primary dropdown-toggle" aria-expanded="false" data-toggle="dropdown" type="button" style={{ fontFamily: 'Lexend' }, { background: '#606060' }, { borderStyle: 'none' }, { fontSize: '13px' }, { marginRight: '10px' }}>Estado</button>
                                            <div className="dropdown-menu"><a className="dropdown-item" href="#">Adoptado</a><a className="dropdown-item" href="#">Disponible</a></div>
                                        </div><span><i className="fa fa-search" id='buscar-icon' style={{ marginRight: '5px' }, { fontSize: 'medium!important' }}></i><input type="search" id='buscar' placeholder="Buscar" /></span>
                                    </div>
                                    <div className="col-md-1 col-lg-1 col-xl-2"></div>
                                </div>
                                <Carnets idUs={props.id}></Carnets>
                            </div>
                            <div className="col-12 col-lg-2 col-xl-3"></div>
                        </div>
                    </div>
        );
    }
}
function Error(props) {
    return (
        <div className="erro">
                        <h1>
                            HEEEEY PILLIN
            </h1>
                        <img src={perritoRisas} />
                        <Link to="/Registrarse"><h1>Registrate aquí x fas (;</h1></Link>
                    </div>
    );

}
function Carnets(props) {
    const {loading, error, data} = useQuery(FEED_MASCOTAS);
    if (error) return {error};
    if (loading) return (null);
    else {
        return (
            <div className="carnets">
                        {data.mascotasFeed.map(mascotasFeed => (
                            <div className="row">
                                <div className="col d-inline-flex justify-content-center carnet">
                                    <div className="card text-left align-self-center carnet-relleno">
                                        <div className="card-body carnet-body">
                                            <h4 className="d-flex justify-content-between card-title nombre-mascota">{mascotasFeed.nombre}<EstadoBadge estado={mascotasFeed.estado} /></h4>
                                            <p className="card-text info-mascota">{mascotasFeed.tamano} · {mascotasFeed.edad} · {mascotasFeed.raza} · {mascotasFeed.sexo}</p>
                                            <p className="card-text info-org"><img className="rounded-circle foto-org" src={mascotasFeed.organizacion.foto} />{mascotasFeed.organizacion.nombre}</p>
                                        </div><img className="card-img w-100 d-block foto-mascota" src={mascotasFeed.foto} />
                                        <div className="card-footer text-white d-inline-flex justify-content-between align-items-center align-content-center footer-carnet"><BotonDetalles idUs={props.idUs} idMas={mascotasFeed.id}/><button className="btn btn-primary like" type="button"><i className="fa fa-heart" data-bss-hover-animate="pulse"></i></button></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
        );
    }
}
function BotonDetalles(props){
    var ruta = "/Detalles/" + props.idUs + "/" + props.idMas;
    return(
            <Link to={ruta} className="btn btn-primary detalles" data-bss-hover-animate="pulse" type="button" style={{ background: 'linear-gradient(-29deg, var(--indigo), var(--red)), rgba(0,123,255,0)' }}>Detalles</Link>
    );
}
function EstadoBadge(props) {
    if (props.estado == 1) {
        return (
            <span className="adoptado">Adoptado</span>
        );
    }
    else if (props.estado == 0) {
        return (
            <span className="disponible">Disponible</span>
        );
    }
}
export default HomeUs;