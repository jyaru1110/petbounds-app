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
import perritoXD from "./assets/img/perritoxd.png";
import { gql, useQuery, useMutation } from "@apollo/client";
import "bootstrap";
import "bootstrap/dist/js/bootstrap.js";
import Error from "./Error";

const ORGANIZACION = gql`
  query ($organizacionId: ID!) {
    organizacion(id: $organizacionId) {
      id
      nombre
      foto
    }
  }
`;

const FEED_MASCOTAS = gql`
  query ($mascotasOrgId: ID!) {
    mascotasOrg(id: $mascotasOrgId) {
      id
      raza
      edad
      nombre
      foto
      tipo
      estado
      sexo
      tamano
      organizacion {
        nombre
        foto
      }
    }
  }
`;

const BORRAR_MASCOTA=gql`
mutation ($borrarMascotaId: ID!) {
    borrarMascota(id: $borrarMascotaId) {
      success
      message
    }
  }
  `;
function DonacionesOrg(props) {
  const { loading, error, data } = useQuery(ORGANIZACION, {
    variables: {
      "organizacionId": props.match.params.idOrg,
    },
  });
  if (loading) return null;
  if (error) return null;
  else {
  return (
      <div>
        <Header data={data}></Header>
        <Cuerpo data={data}></Cuerpo>
      </div>
    );
  }
}
function Header(props) {
    var rutaPerfil = "/PerfilOrg/" + props.data.organizacion.id;
    var rutaHome = "/HomeOrg/" + props.data.organizacion.id;
    var rutaAdopciones = "/AdopcionesOrg/" + props.data.organizacion.id;
    var rutaDonaciones = "/DonacionesOrg/" + props.data.organizacion.id;
    var rutaMisMascotas = "/MisMascotasOrg/" + props.data.organizacion.id;
    return (
      <div>
        <div
          className="d-inline-flex justify-content-between align-items-center"
          id="header-menu"
          style={{ color: "var(--white)" }}
        >
          <Link to={rutaPerfil} className="texto-menu-sup">
            <img className="rounded-circle" src={props.data.organizacion.foto}/>
          </Link>
          <Link to={rutaHome} className="icon-menu-org">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="25"
              fill="currentColor"
              className="bi bi-plus-circle"
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
            </svg>
          </Link>
          <Link to={rutaDonaciones} className="icon-menu-org">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="30"
              fill="currentColor"
              className="bi bi-cash"
              viewBox="0 0 16 16"
            >
              <path d="M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
              <path d="M0 4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V4zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V6a2 2 0 0 1-2-2H3z" />
            </svg>
          </Link>
          <Link to={rutaAdopciones} className="icon-menu-org">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="25"
              fill="currentColor"
              className="bi bi-file-text"
              viewBox="0 0 16 16"
            >
              <path d="M5 4a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1H5z" />
              <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z" />
            </svg>
          </Link>
          <Link to={rutaMisMascotas} className="icon-menu-org">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="25"
              fill="currentColor"
              className="bi bi-pencil"
              viewBox="0 0 16 16"
            >
              <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
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

function Cuerpo(props) {
  const [nombre, setNombre] = useState("");
  const handleChange = (event) => {
    setNombre(event.target.value);
  };
  const handleClick = (event) => {
    setNombre(event.target.value);
  };
    var rutaPerfil = "/PerfilOrg/" + props.data.organizacion.id;
    var rutaHome = "/HomeOrg/" + props.data.organizacion.id;
    var rutaAdopciones = "/AdopcionesOrg/" + props.data.organizacion.id;
    var rutaDonaciones = "/DonacionesOrg/" + props.data.organizacion.id;
    var rutaMisMascotas = "/MisMascotasOrg/" + props.data.organizacion.id;
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
                  src={props.data.organizacion.foto}
                />
                <strong>{props.data.organizacion.nombre}</strong>
              </span>
            </Link>
            <Link to={rutaHome} className="link-menu-lateral">
              <span className="text-left texto-menu-lateral">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="25"
                  fill="currentColor"
                  className="bi bi-plus-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                </svg>
                <strong>Añadir mascota</strong>
              </span>
            </Link>
            <Link to={rutaDonaciones} className="link-menu-lateral">
              <span className="text-left texto-menu-lateral">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="30"
                  fill="currentColor"
                  className="bi bi-cash"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
                  <path d="M0 4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V4zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V6a2 2 0 0 1-2-2H3z" />
                </svg>
                <strong>Donaciones</strong>
              </span>
            </Link>
            <Link to={rutaAdopciones} className="link-menu-lateral">
              <span className="text-left texto-menu-lateral">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="25"
                  fill="currentColor"
                  className="bi bi-file-text"
                  viewBox="0 0 16 16"
                >
                  <path d="M5 4a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1H5z" />
                  <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z" />
                </svg>
                <strong>Adopciones</strong>
              </span>
            </Link>
            <Link to={rutaMisMascotas} className="link-menu-lateral">
              <span className="text-left texto-menu-lateral">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="25"
                  fill="currentColor"
                  className="bi bi-pencil"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
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
          <div className="col-12 col-sm-12 col-md-8 col-lg-6 col-xl-5 principal">
            <div className="row justify-content-center">
            <div class="row">
                    <div class="col" style="margin-bottom: 25px;">
                        <form><input class="form-control" type="text" placeholder="Motivo" style="margin-bottom: 10px;border-radius: 20px;background: #606060;border-style: none;font-family: Lexend, sans-serif;"/><textarea class="form-control" placeholder="Descripción" style="margin-bottom: 10px;border-radius: 14px;background: rgb(96,96,96);border-style: none;font-family: Lexend, sans-serif;"></textarea>
                            <div class="d-inline-flex d-md-flex justify-content-between"><input class="form-control" type="number" style="width: 30%;border-radius: 20px;background: #606060;border-style: none;font-family: Lexend, sans-serif;" placeholder="Meta"/><button class="btn btn-primary" type="button" style="background: #4970f1;border-radius: 12px;">Crear donación</button></div>
                        </form>
                    </div>
            </div>
              <Donacion></Donacion>
              <div className="col-12 col-lg-2 col-xl-3"></div>
            </div>
          </div>
        </div>
      </div>
    );
}
function Donacion(props){
    return(
        <div className="row">
            <div className="col-lg-12 col-xl-12 d-flex justify-content-center donaciones-main">
                <div className="card text-left align-self-center card-donaciones">
                    <div className="card-body">
                        <h4 className="d-flex justify-content-between card-title">Donación para comida</h4>
                        <p className="card-text"><img className="rounded-circle" src={perritoXD}/>Salva perritos, CDMX</p>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br/></p>
                    </div>
                    <div className="card-footer text-white d-inline-flex justify-content-between align-items-center align-content-center">
                        <div class="progress" >
                            <div class="progress-bar bg-success progress-bar-animated" style={{width: '70%'}}>70%</div>
                        </div>
                      <button className="btn btn-primary button-donar" data-bss-hover-animate="pulse" type="button">Donar</button>
                        </div>
                    </div>
            </div>
        </div>
    )
}


export default DonacionesOrg;
