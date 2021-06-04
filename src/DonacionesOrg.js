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
              <div className="col-md-4 col-lg-4 col-xl-3 sust-filtros"></div>
              <div className="col-12 col-md-8 col-lg-7 col-xl-7 d-inline-flex justify-content-center flex-wrap"></div>
              <div
                className="col-12 col-md-8 col-lg-7 col-xl-7 d-inline-flex justify-content-center flex-wrap"
                id="col-filtros"
                style={({ paddingRight: "0px" }, { paddingLeft: "0px" })}
              >
                <div className="dropdown">
                  <button
                    className="btn btn-primary dropdown-toggle"
                    aria-expanded="false"
                    data-toggle="dropdown"
                    type="button"
                  >
                    Tamaño
                  </button>
                  <div className="dropdown-menu">
                    <input
                      type="button"
                      value="Todos"
                      className="dropdown-item"
                      onClick={handleClick}
                    ></input>
                    <input
                      className="dropdown-item"
                      value="Grande"
                      type="button"
                      onClick={handleClick}
                    ></input>
                    <input
                      className="dropdown-item"
                      type="button"
                      value="Mediano"
                      onClick={handleClick}
                    ></input>
                    <input
                      type="button"
                      value="Chico"
                      className="dropdown-item"
                      onClick={handleClick}
                    ></input>
                  </div>
                </div>
                <div className="dropdown">
                  <button
                    className="btn btn-primary dropdown-toggle"
                    aria-expanded="false"
                    data-toggle="dropdown"
                    type="button"
                    style={
                      ({ fontFamily: "Lexend" },
                      { borderStyle: "none" },
                      { background: "#606060" },
                      { fontSize: "13px" },
                      { marginRight: "10px" })
                    }
                  >
                    Sexo&nbsp;
                  </button>
                  <div className="dropdown-menu">
                    <input
                      type="button"
                      value="Todos"
                      className="dropdown-item"
                      onClick={handleClick}
                    ></input>
                    <input
                      type="button"
                      value="Hembra"
                      className="dropdown-item"
                      onClick={handleClick}
                    ></input>
                    <input
                      type="button"
                      value="Macho"
                      className="dropdown-item"
                      onClick={handleClick}
                    ></input>
                  </div>
                </div>
                <div className="dropdown">
                  <button
                    className="btn btn-primary dropdown-toggle"
                    aria-expanded="false"
                    data-toggle="dropdown"
                    type="button"
                    style={
                      ({ fontFamily: "Lexend" },
                      { background: "#606060" },
                      { borderStyle: "none" },
                      { fontSize: "13px" },
                      { margiTop: "0px" },
                      { marginRight: "10px" })
                    }
                  >
                    Animal
                  </button>
                  <div className="dropdown-menu">
                    <input
                      type="button"
                      value="Todos"
                      className="dropdown-item"
                      onClick={handleClick}
                    ></input>
                    <input
                      type="button"
                      value="Perro"
                      className="dropdown-item"
                      onClick={handleClick}
                    ></input>
                    <input
                      type="button"
                      value="Gato"
                      className="dropdown-item"
                      onClick={handleClick}
                    ></input>
                  </div>
                </div>
                <div className="dropdown">
                  <button
                    className="btn btn-primary dropdown-toggle"
                    aria-expanded="false"
                    data-toggle="dropdown"
                    type="button"
                    style={
                      ({ fontFamily: "Lexend" },
                      { background: "#606060" },
                      { borderStyle: "none" },
                      { fontSize: "13px" },
                      { marginRight: "10px" })
                    }
                  >
                    Estado
                  </button>
                  <div className="dropdown-menu">
                    <button
                      value="Todos"
                      className="dropdown-item"
                      onClick={handleClick}
                    >
                      Todos
                    </button>
                    <button
                      value="1"
                      className="dropdown-item"
                      onClick={handleClick}
                    >
                      Adoptado
                    </button>
                    <button
                      value="0"
                      className="dropdown-item"
                      onClick={handleClick}
                    >
                      Disponible
                    </button>
                  </div>
                </div>
                <span>
                  <i
                    className="fa fa-search"
                    id="buscar-icon"
                    style={
                      ({ marginRight: "5px" }, { fontSize: "medium!important" })
                    }
                  ></i>
                  <input
                    type="search"
                    id="buscar"
                    onChange={handleChange}
                    placeholder="Buscar"
                  />
                </span>
              </div>
              <div className="col-md-1 col-lg-1 col-xl-2"></div>
            </div>
            <Donacion></Donacion>
          </div>
          <div className="col-12 col-lg-2 col-xl-3"></div>
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
                        <h4 className="d-flex justify-content-between card-title" style={{marginBottom: '1px'},{fontFamily: 'Lexend'}, {color: 'rgb(255,255,255)'}}>Donación para comida</h4>
                        <p className="card-text" style={{marginBottom: '4px'},{fontFamily: 'Lexend'},{color: 'rgb(255,255,255)'},{paddingBottom: '5px'},{borderBottom: '1px solid rgb(116,116,116)'}}><img className="rounded-circle" style={{marginRight: '10px'},{width: '25px'},{height: '25px'}} src="./assets/img/perfil_org.png"/>Salva perritos, CDMX</p>
                        <p className="card-text" style={{marginBottom: '1px'},{fontFamily: 'Lexend'},{color: 'rgb(255,255,255)'},{marginTop: '5px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br/></p>
                    </div>
                    <div className="card-footer text-white d-inline-flex justify-content-between align-items-center align-content-center" style={{height: '40px'},{paddingLeft: '10px'},{background: 'rgba(0,0,0,0)'},{borderStyle: 'none'},{paddingRight: '10px'}}>
                            <div className="progress-bar bg-success progress-bar-animated" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{width: '70%'}}>70%</div>
                    </div><button className="btn btn-primary" data-bss-hover-animate="pulse" type="button" style={{margin: '0px 0px 0px'},{marginTop: '2px'},{fontFamily: 'Lexend'}, {fontSize: '15px'},{background: '#026AD9'},{borderStyle: 'none'},{color: 'rgb(255, 255, 255)'},{height: '30px'},{width: '77.5625px'},{marginBottom: '4px'},{borderRadius: '21px'},{paddingTop: '0px'},{paddingBottom: '0px'},{paddingRight: '0px'},{paddingLeft: '0px'}}>Donar</button>
                </div>
            </div>
        </div>
    )
}


export default DonacionesOrg;
