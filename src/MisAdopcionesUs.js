import React, { useState } from "react";
import "./assets/bootstrap/css/bootstrap.min.css";
import "./assets/fonts/font-awesome.min.css";
import "./assets/fonts/fontawesome5-overrides.min.css";
import "./assets/css/styles.css";
import "./assets/css/Article-Clean.css";
import "./assets/css/Highlight-Phone.css";
import "./assets/css/Navigation-Clean.css";
import "./assets/css/Navigation-with-Search.css";
import "./index.css";
import "./assets/fonts/font-awesome.min.css";
import logo from "./assets/img/petbounds_blanco.png";
import Error from "./Error"
import perritoXD from './assets/img/perritoxd.png'
import { Link } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import "bootstrap";
import "bootstrap/dist/js/bootstrap.js";
import { useHistory } from "react-router-dom";

const SOLICITUDES = gql`
    query ($solicitudesUsuarioId: ID!) {
    solicitudesUsuario(id: $solicitudesUsuarioId) {
      id
      mascota {
        raza
        edad
        tamano
        sexo
        nombre
        organizacion {
          foto
          nombre
        }
      }
    }
  }
  
`;
const USUARIO = gql`
  query ($usuarioId: ID!) {
    usuario(id: $usuarioId) {
      id
      nickname
      apellidop
      foto
      identificacion
      comprobante
    }
  }
`;

function MisAdopcionesUs(props) {
  const { loading, error, data } = useQuery(USUARIO, {
    variables: {
      usuarioId: props.match.params.idUs,
    },
  });
  if (loading) return null;
  if (error) return <Error></Error>;
  else {
    return (
      <div>
        <Header data={data} />
        <Cuerpo data={data} idMas={props.match.params.idMas} />
      </div>
    );
  }
}
function Header(props) {
  const [estado, setEstado] = useState(false);
  const handleClick = () => {
    var estadoN = !estado;
    setEstado(estadoN);
  };
  
    var rutaPerfil = "/PerfilUs/" + props.data.usuario.id;
    var rutaHome = "/HomeUs/" + props.data.usuario.id;
    var rutaServicios = "/ServiciosUs/" + props.data.usuario.id;
    var rutaDonaciones = "/DonacionesUs/" + props.data.usuario.id;
    var rutaMisAdopciones = "/MisAdopcionesUs/" + props.data.usuario.id;
    var rutaMisLikes = "/MisLikesUs/" + props.data.usuario.id;
    //Aquí link al soporte xfas jeje
    var rutaAyuda = "";
    return (
      <div>
        <div
          className="d-inline-flex justify-content-between align-items-center"
          id="header-menu"
          style={{ color: "var(--white)" }}
        >
          <a className="texto-menu-sup" onClick={handleClick}>
            <img className="rounded-circle" src={props.data.usuario.foto} />
          </a>
          <Link to={rutaHome} className="texto-menu-sup">
            Adopciones
          </Link>
          <Link to={rutaServicios} className="texto-menu-sup">
            Servicios
          </Link>
          <Link to={rutaDonaciones} className="texto-menu-sup">
            Donaciones
          </Link>
        </div>
        <div>
          <Link to={rutaHome}>
            <img className="logo-petbounds" src={logo} />
          </Link>
        </div>
        {estado === false ? null : (
          <div
            className="text-left d-flex flex-column justify-content-start align-self-end ml-auto justify-content-sm-start"
            id="menu"
          >
            <button className="btn toggle-menu-left" onClick={handleClick}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className="bi bi-list"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                />
              </svg>
            </button>
            <img
              className="rounded-circle imagen-perfil-menu"
              onClick={handleClick}
              src={props.data.usuario.foto}
            />
            <h6 className="text-white hola-menu">
              Hola, {props.data.usuario.nickname}
            </h6>
            <Link
              to={rutaPerfil}
              className="d-flex justify-content-start align-items-center perfil-menu-text"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="bi bi-person"
              >
                <path
                  fillRule="evenodd"
                  d="M10 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm6 5c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"
                ></path>
              </svg>
              Ver perfil
            </Link>
            <Link
              to={rutaMisAdopciones}
              className="d-flex justify-content-start align-items-center perfil-menu-text"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="bi bi-file-text"
                style={({ marginRight: "5px" }, { fontSize: "31px" })}
              >
                <path
                  fillRule="evenodd"
                  d="M4 0h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H4z"
                ></path>
                <path
                  fillRule="evenodd"
                  d="M4.5 10.5A.5.5 0 0 1 5 10h3a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zm0-2A.5.5 0 0 1 5 8h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zm0-2A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zm0-2A.5.5 0 0 1 5 4h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5z"
                ></path>
              </svg>
              Mis solicitudes
            </Link>
            <Link
              to={rutaMisLikes}
              className="d-flex justify-content-start align-items-center perfil-menu-text"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="bi bi-heart"
                style={({ marginRight: "5px" }, { fontSize: "19px" })}
              >
                <path
                  fillRule="evenodd"
                  d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"
                ></path>
              </svg>
              Mis Likes
            </Link>
            <Link
              to="/"
              className="d-flex justify-content-start align-items-center perfil-menu-text"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="bi bi-box-arrow-left"
                style={({ marginRight: "5px" }, { fontSize: "19px" })}
              >
                <path
                  fillRule="evenodd"
                  d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z"
                ></path>
                <path
                  fillRule="evenodd"
                  d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"
                ></path>
              </svg>
              Salir
            </Link>
          </div>
        )}
      </div>
    );
}
function Cuerpo(props) {
    var rutaPerfil = "/PerfilUs/" + props.data.usuario.id;
    var rutaHome = "/HomeUs/" + props.data.usuario.id;
    var rutaServicios = "/ServiciosUs/" + props.data.usuario.id;
    var rutaDonaciones = "/DonacionesUs/" + props.data.usuario.id;
    var rutaMisAdopciones = "/MisAdopcionesUs/" + props.data.usuario.id;
    var rutaMisLikes = "/MisLikesUs/" + props.data.usuario.id;
    //Aquí link al soporte xfas jeje
    var rutaAyuda = "";
    return (
      <div className="container contenedor-main">
        <div className="row">
          <div className="col-12 col-md-4 col-lg-4 col-xl-4 d-flex flex-column"></div>
          <div
            className="col-12 col-md-4 col-lg-4 col-xl-4 d-flex flex-column"
            id="menu-lateral"
          >
            <Link to={rutaPerfil} className="link-perfil">
              <span className="text-left texto-menu-lateral-con-foto">
                <img
                  className="rounded-circle foto-perfil-menu-lateral"
                  src={props.data.usuario.foto}
                />
                <strong>{props.data.usuario.nickname}</strong>
              </span>
            </Link>
            <Link to={rutaHome} className="link-menu-lateral">
              <span className="text-left texto-menu-lateral">
                <i className="fa fa-paw"></i>
                <strong>Adopciones</strong>
              </span>
            </Link>
            <Link to={rutaServicios} className="link-menu-lateral">
              <span className="text-left texto-menu-lateral">
                <i className="fa fa-shopping-cart"></i>
                <strong>Servicios</strong>
              </span>
            </Link>
            <Link to={rutaDonaciones} className="link-menu-lateral">
              <span className="text-left texto-menu-lateral">
                <i className="fa fa-money"></i>
                <strong>Donaciones</strong>
              </span>
            </Link>
            <Link to={rutaMisAdopciones} className="link-menu-lateral">
              <span className="text-left texto-menu-lateral">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="bi bi-file-earmark-text"
                >
                  <path d="M4 0h5.5v1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h1V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z"></path>
                  <path d="M9.5 3V0L14 4.5h-3A1.5 1.5 0 0 1 9.5 3z"></path>
                  <path
                    fillRule="evenodd"
                    d="M5 11.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"
                  ></path>
                </svg>
                <strong>Mis adopciones</strong>
              </span>
            </Link>
            <Link to={rutaMisLikes} className="link-menu-lateral">
              <span className="text-left texto-menu-lateral">
                <i className="fa fa-heart-o"></i>
                <strong>Mis likes</strong>
              </span>
            </Link>
            <Link to={rutaAyuda} className="link-menu-lateral">
              <span className="text-left texto-menu-lateral">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="bi bi-question-octagon"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.54.146A.5.5 0 0 1 4.893 0h6.214a.5.5 0 0 1 .353.146l4.394 4.394a.5.5 0 0 1 .146.353v6.214a.5.5 0 0 1-.146.353l-4.394 4.394a.5.5 0 0 1-.353.146H4.893a.5.5 0 0 1-.353-.146L.146 11.46A.5.5 0 0 1 0 11.107V4.893a.5.5 0 0 1 .146-.353L4.54.146zM5.1 1L1 5.1v5.8L5.1 15h5.8l4.1-4.1V5.1L10.9 1H5.1z"
                  ></path>
                  <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"></path>
                </svg>
                <strong>Ayuda</strong>
                <br />
              </span>
            </Link>
            <Link to="/" className="link-menu-lateral">
              <span className="text-left texto-menu-lateral">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="bi bi-box-arrow-left"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z"
                  ></path>
                  <path
                    fillRule="evenodd"
                    d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"
                  ></path>
                </svg>
                <strong>Salir</strong>
              </span>
            </Link>
          </div>
            <BloqueSoli idUs={props.data.usuario.id}/>   
        </div>
      </div>
    );
}
function BloqueSoli(props){
    const {data,error,loading}=useQuery(SOLICITUDES,{
        variables:{
            "solicitudesUsuarioId":props.idUs
        }
    });
    if(error) return null;
    if(loading) return loading;
    else{
        if(data.solicitudesUsuario.length==0){
            const rutaHome = "/HomeUs/"+props.idUs;
            return(
                <div className="row no_hay">
                    <div className="col">
                        <div className="d-flex flex-column align-items-center align-items-xl-center">
                            <p style={{color: 'rgb(255,255,255)'},{fontFamily: 'Lexend'}}><strong>¡Vaya!, parece que aún no tienes solicitudes ._.XD</strong><br/></p><img style={{width: '40%'}} src={perritoXD}/><Link className="texto-link" to={rutaHome} style={{fontFamily: 'Lexend'}}>Haz una solicitud aquí</Link>
                        </div>
                    </div>
                </div>
            );  
    }
    else{
    return(
        <div className="col contenedor-solicitudes">
            {data.solicitudesUsuario.map((solicitudesUsuario)=>(
                    <Link key={solicitudesUsuario.id} to={"/ChatUs/"+props.idUs+"/"+solicitudesUsuario.id} className="d-flex contenedor-solicitud"><img className="rounded-circle foto-perfil-org-solicitud" src={solicitudesUsuario.mascota.organizacion.foto}/>
                        <div className="relleno-solicitud">
                            <h4 id="titulo-soli">{solicitudesUsuario.mascota.organizacion.nombre}</h4>
                            <p><em>{solicitudesUsuario.mascota.nombre} · {solicitudesUsuario.mascota.tamano} · {solicitudesUsuario.mascota.edad} · {solicitudesUsuario.mascota.raza} · {solicitudesUsuario.mascota.sexo}</em><br/></p>
                        </div>
                    </Link>
            ))}
            
        </div>
    );
    }}
}

export default MisAdopcionesUs;
