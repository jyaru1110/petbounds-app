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
import { gql, useMutation, useQuery } from "@apollo/client";
import "bootstrap";
import "bootstrap/dist/js/bootstrap.js";
import { useHistory } from "react-router-dom";
import Error from "./Error"


const ORGANIZACION = gql`
query ($organizacionId: ID!) {
    organizacion(id: $organizacionId) {
      id
      nombre
      foto
    }
  }
`;

const REGISTRO_MAS = gql`
mutation ($registroMascotaId: ID!, $registroMascotaTipo: String, $registroMascotaRaza: String, $registroMascotaEdad: String, $registroMascotaHistoria: String, $registroMascotaNombre: String, $registroMascotaFoto: String, $registroMascotaTamano: String, $registroMascotaSexo: String) {
  registroMascota(id: $registroMascotaId, tipo: $registroMascotaTipo, raza: $registroMascotaRaza, edad: $registroMascotaEdad, historia: $registroMascotaHistoria, nombre: $registroMascotaNombre, foto: $registroMascotaFoto, tamano: $registroMascotaTamano, sexo: $registroMascotaSexo) {
    success
    message
  }
}
`;


function HomeOrg(props) {
  const { loading, error, data } = useQuery(ORGANIZACION, {
    variables: {
      "organizacionId": props.match.params.idOrg
    },
  });
  if (loading) return null;
  if (error) return <Error/>;
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
            <img className="rounded-circle" src={props.data.organizacion.foto} />
          </Link>
          <Link to={rutaHome} className="icon-menu-org">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="25" fill="currentColor" className="bi bi-plus-circle" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
            </svg>
          </Link>
          <Link to={rutaDonaciones} className="icon-menu-org">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="30" fill="currentColor" className="bi bi-cash" viewBox="0 0 16 16">
                <path d="M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>
                <path d="M0 4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V4zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V6a2 2 0 0 1-2-2H3z"/>
            </svg>
          </Link>
          <Link to={rutaAdopciones} className="icon-menu-org">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="25" fill="currentColor" className="bi bi-file-text" viewBox="0 0 16 16">
            <path d="M5 4a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1H5z"/>
            <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z"/>
          </svg>
          </Link>
          <Link to={rutaMisMascotas} className="icon-menu-org">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="25" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
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

function Cuerpo(props) {
  const [values,setValues]=useState({
    nombre:'',
    raza:'',
    animal:'',
    tamano:'',
    edad:'',
    sexo:'',
    hist:'',
    bandera:false
  });
  const handleFotoMascota=(e)=>{
    var fileList =  e.target.files;
    setValues({bandera:true})
    const reader = new FileReader();
    const enlaceFoto = 'http://localhost:4000/api/foto?nom=' + fileList[0].name + '&cont=' + fileList[0].type;
    fetch(enlaceFoto,{ method: 'GET'}).then(response=>response.json()).then(data=>{
      const formData = new FormData();
      Object.keys(data.data.fields).forEach(key => {
        formData.append(key, data.data.fields[key]);
      });
      formData.append("file", fileList[0]);
      const xhr = new XMLHttpRequest();
      function getUrl(){
        return new Promise(function(resolve,reject){
        xhr.open("POST", data.data.url, true);
        xhr.send(formData)
        xhr.onload = function () {
          if (this.status === 204) {
            resolve(
             'https://archivospetbounds.s3-us-west-2.amazonaws.com/' + fileList[0].name
            );
          } 
          else{
            reject(this.responseText);
          }
        }
        })
      }
      getUrl().then((result)=>{
        localStorage.setItem('fotoMascota',result)
        console.log(localStorage.getItem('fotoMascota'))
      }).catch(e=>console.log(e))
    })
    reader.addEventListener('load', (event) => {
      document.getElementById('foto-mascota').setAttribute('src',event.target.result);
    });
    reader.readAsDataURL(fileList[0]);
}
  const handleCampos = (e) => {
    setValues({...values,[e.target.name]:e.target.value})
  };
  const [registrarMas] = useMutation(REGISTRO_MAS,{
      variables:{
        "registroMascotaId": props.data.organizacion.id,
        "registroMascotaTipo": values.animal,
        "registroMascotaRaza": values.raza,
        "registroMascotaEdad": values.edad,
        "registroMascotaHistoria": values.hist,
        "registroMascotaNombre": values.nombre,
        "registroMascotaFoto": localStorage.getItem('fotoMascota'),
        "registroMascotaTamano": values.tamano,
        "registroMascotaSexo": values.sexo
      },
      onCompleted({registroMascota}){
        if(registroMascota.success){
            window.location.reload()
        }
      }
    }
  );
  const handleSubmit = (e) =>{
    e.preventDefault();
    if(values.bandera===false){
      localStorage.setItem('fotoMascota',' ')
    }
    if(values.nombre!=='' && values.nombre!==' ' && values.tamano!=='' && values.tamano!=='Tamaño' && values.sexo!=='' && values.sexo!=='Sexo'){
      registrarMas();
    }else{
      alert('Llena correctamente los datos')
    }
    
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
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="25" fill="currentColor" className="bi bi-plus-circle" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
            </svg>
                <strong>Añadir mascota</strong>
              </span>
            </Link>
            <Link to={rutaDonaciones} className="link-menu-lateral">
              <span className="text-left texto-menu-lateral">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="30" fill="currentColor" className="bi bi-cash" viewBox="0 0 16 16">
                <path d="M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>
                <path d="M0 4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V4zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V6a2 2 0 0 1-2-2H3z"/>
              </svg>
                <strong>Donaciones</strong>
              </span>
            </Link>
            <Link to={rutaAdopciones} className="link-menu-lateral">
              <span className="text-left texto-menu-lateral">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="25" fill="currentColor" className="bi bi-file-text" viewBox="0 0 16 16">
                <path d="M5 4a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1H5z"/>
                <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z"/>
              </svg>
                <strong>Adopciones</strong>
              </span>
            </Link>
            <Link to={rutaMisMascotas} className="link-menu-lateral">
              <span className="text-left texto-menu-lateral">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="25" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
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
          <div className="col d-flex justify-content-center contenido-org">
                <form onSubmit={handleSubmit}>
                    <div className="form-group d-flex justify-content-center">
                        <div className="d-flex d-md-flex justify-content-center align-items-center justify-content-md-center align-items-md-center div-img-label-add"><img className="div-input-file-a" id="foto-mascota"/><input className="form-control-file file" type="file" onChange={handleFotoMascota} id="foto-perrito" accept="image/png, image/jpeg"/><label htmlFor="foto-perrito"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" className="bi bi-plus-square">
                                    <path fillRule="evenodd" d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"></path>
                                    <path fillRule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"></path>
                                </svg></label>
                        </div>
                    </div><input className="form-control input-add" type="text" name="nombre" onChange={handleCampos} placeholder="Nombre mascota"/><input className="form-control input-add" name="raza" onChange={handleCampos} type="text" placeholder="Raza"/><input className="form-control input-add" type="text" name="animal" onChange={handleCampos} placeholder="Animal"/>
                        <select className="form-control input-add" name="tamano" value={values.tamano} onChange={handleCampos} style={{color: 'rgba(255, 255, 255, 0.616)'}}>
                            <option value="Tamaño"> Tamaño</option>
                            <option value="Grande">Grande</option>
                            <option value="Mediano">Mediano</option>
                            <option value="Chico">Chico</option>
                        </select>
                    <div className="form-group edad-genero"><input className="form-control" type="text" placeholder="Edad" name="edad" onChange={handleCampos}/><select className="form-control" name="sexo" value={values.sexo} onChange={handleCampos} style={{color: 'rgba(255, 255, 255, 0.616)'}}>
                            <option value="Sexo">Sexo</option>
                            <option value="Hembra">Hembra</option>
                            <option value="Macho">Macho</option>
                        </select></div><textarea className="form-control" id="text-area-add" placeholder="Historia" name="hist" onChange={handleCampos}></textarea><button className="btn btn-primary submit-add" type="submit">Registrar</button>
                </form>
            </div>
        </div>
      </div>
    );
}


export default HomeOrg;
