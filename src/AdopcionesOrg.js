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
import { Link } from "react-router-dom";
import perritoXD from './assets/img/perritoxd.png'
import { gql, useMutation, useQuery } from "@apollo/client";
import "bootstrap";
import "bootstrap/dist/js/bootstrap.js";
import { useHistory } from "react-router-dom";
import Error from "./Error"


const ORGANIZACION = gql`
query ($organizacionId: ID!) {
    organizacion(id: $organizacionId) {
      nombre
      foto
    }
  }
`;
const SOLICITUDES = gql`
query($solicitudesOrgId: ID!) {
    solicitudesOrg(id: $solicitudesOrgId) {
      id
      usuario {
        nickname
        foto
      }
      mascota {
        tipo
        raza
        edad
        nombre
        tamano
        sexo
      }
    }
  }
  
`;

function AdopcionesOrg(props) {
  return (
    <div>
      <Header id={props.match.params.idOrg}></Header>
      <Cuerpo id={props.match.params.idOrg}></Cuerpo>
    </div>
  );
}
function Header(props) {
  const { loading, error, data } = useQuery(ORGANIZACION, {
    variables: {
      "organizacionId": props.id
    },
  });
  if (loading) return null;
  if (error) return null;
  else {
    var rutaPerfil = "/PerfilOrg/" + props.id;
    var rutaHome = "/HomeOrg/" + props.id;
    var rutaAdopciones = "/AdopcionesOrg/" + props.id;
    var rutaDonaciones = "/DonacionesOrg/" + props.id;
    var rutaMisMascotas = "/MisMascotasOrg/" + props.id;
    return (
      <div>
        <div
          className="d-inline-flex justify-content-between align-items-center"
          id="header-menu"
          style={{ color: "var(--white)" }}
        >
          <Link to={rutaPerfil} className="texto-menu-sup">
            <img class="rounded-circle" src={data.organizacion.foto} />
          </Link>
          <Link to={rutaHome} className="icon-menu-org">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="25" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
            </svg>
          </Link>
          <Link to={rutaDonaciones} className="icon-menu-org">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="30" fill="currentColor" class="bi bi-cash" viewBox="0 0 16 16">
                <path d="M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>
                <path d="M0 4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V4zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V6a2 2 0 0 1-2-2H3z"/>
            </svg>
          </Link>
          <Link to={rutaAdopciones} className="icon-menu-org">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="25" fill="currentColor" class="bi bi-file-text" viewBox="0 0 16 16">
            <path d="M5 4a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1H5z"/>
            <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z"/>
          </svg>
          </Link>
          <Link to={rutaMisMascotas} className="icon-menu-org">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="25" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
            <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
          </svg>
          </Link>
        </div>
        <div>
          <Link to={rutaHome}>
            <img className="logo-petbounds" src={logo} />
          </Link>
        </div>
      </div>
    );
  }
}

function Cuerpo(props) {

    const { loading, error, data } = useQuery(ORGANIZACION, {
    variables: {
      "organizacionId": props.id
    },
  });
  if (loading) return null;
  if (error) return <Error></Error>;
  else {
    var rutaPerfil = "/PerfilOrg/" + props.id;
    var rutaHome = "/HomeOrg/" + props.id;
    var rutaAdopciones = "/AdopcionesOrg/" + props.id;
    var rutaDonaciones = "/DonacionesOrg/" + props.id;
    var rutaMisMascotas = "/MisMascotasOrg/" + props.id;
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
                  src={data.organizacion.foto}
                />
                <strong>{data.organizacion.nombre}</strong>
              </span>
            </Link>
            <Link to={rutaHome} className="link-menu-lateral">
              <span className="text-left texto-menu-lateral">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="25" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
            </svg>
                <strong>Añadir mascota</strong>
              </span>
            </Link>
            <Link to={rutaDonaciones} className="link-menu-lateral">
              <span className="text-left texto-menu-lateral">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="30" fill="currentColor" class="bi bi-cash" viewBox="0 0 16 16">
                <path d="M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>
                <path d="M0 4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V4zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V6a2 2 0 0 1-2-2H3z"/>
              </svg>
                <strong>Donaciones</strong>
              </span>
            </Link>
            <Link to={rutaAdopciones} className="link-menu-lateral">
              <span className="text-left texto-menu-lateral">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="25" fill="currentColor" class="bi bi-file-text" viewBox="0 0 16 16">
                <path d="M5 4a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1H5z"/>
                <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z"/>
              </svg>
                <strong>Adopciones</strong>
              </span>
            </Link>
            <Link to={rutaMisMascotas} className="link-menu-lateral">
              <span className="text-left texto-menu-lateral">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="25" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
              </svg>
                <strong>Mis mascotas</strong>
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
                    fill-rule="evenodd"
                    d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"
                  ></path>
                </svg>
                <strong>Salir</strong>
              </span>
            </Link>
          </div>
          <BloqueSoli id={props.id}></BloqueSoli>
        </div>
      </div>
    );
  }
}

function BloqueSoli(props){
    const {data,error,loading}=useQuery(SOLICITUDES,{
        variables:{
            "solicitudesOrgId":props.id
        }
    });
    if(error) return null;
    if(loading) return loading;
    else{
        if(data.solicitudesOrg.length===0){
            const rutaHome = "/HomeUs/"+props.id;
            return(
                <div class="row no_hay">
                    <div class="col">
                        <div class="d-flex flex-column align-items-center align-items-xl-center">
                            <p style={{color: 'rgb(255,255,255)'},{fontFamily: 'Lexend'}}><strong>¡Vaya!, parece que aún no tienes solicitudes ._.XD</strong><br/></p><img style={{width: '40%'}} src={perritoXD}/>
                        </div>
                    </div>
                </div>
            );  
    }
    else{
    return(
        <div className="col contenedor-solicitudes">
            {data.solicitudesOrg.map((solicitudesOrg)=>(
                    <Link to="/" className="d-flex contenedor-solicitud"><img className="rounded-circle foto-perfil-org-solicitud" src={solicitudesOrg.usuario.foto}/>
                        <div className="relleno-solicitud">
                            <h4 id="titulo-soli">{solicitudesOrg.usuario.nickname}</h4>
                            <p><em>{solicitudesOrg.mascota.nombre} · {solicitudesOrg.mascota.tamano} · {solicitudesOrg.mascota.edad} · {solicitudesOrg.mascota.raza} · {solicitudesOrg.mascota.sexo}</em><br/></p>
                        </div>
                    </Link>
            ))}
        </div>
    );
    }}
}

export default AdopcionesOrg;
