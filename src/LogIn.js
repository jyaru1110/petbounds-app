import React, {useState} from 'react';
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
import {Link} from 'react-router-dom';
import { gql, useMutation } from '@apollo/client';



const INICIO_SESION = gql `
    mutation inicioSesion($inicioSesionCorreo: String!, $inicioSesionContra: String!) {
    inicioSesion(correo: $inicioSesionCorreo, contra: $inicioSesionContra) {
      success
      message
    }
  }
`;

function LogIn (){
    const[inicioSesion,{data}]=useMutation(INICIO_SESION);
    const[values,setValues]=useState({
            correo:'',
            contra:'',
            contrasenaOk:false,
            correoOk:false,
    });
    const handleCampos = (event) => {
        setValues(
            {...values,[event.target.name]: event.target.value});    
    };
    const handleSubmit = (event)=>{
        if (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/.test(values.contra)){
            setValues({...values,contrasenaOk:true});
            document.getElementById("errorContra").innerHTML = "";
        } else {
            document.getElementById("errorContra").innerHTML = "Ingrese de 8 a 20 caracteres. Debe contener mayúsculas, minúsculas y números";
            setValues({...values,contrasenaOk:false});
        }
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.correo)){
            setValues({...values,correoOk:true});
            document.getElementById("errorCorreo").innerHTML = "";
        } else {
            document.getElementById("errorCorreo").innerHTML = "Ingrese correo valido";
            setValues({...values,correoOk:false});
        }
        console.log(values.contrasenaOk)
        if(values.correoOk){
            inicioSesion({variables:{
                "inicioSesionCorreo": values.correo,
                "inicioSesionContra": values.contra,
            }}).then(result=>console.log(result));
        }
        event.preventDefault();
    };
    return(
        <div>
            <nav className="navbar navbar-light navbar-expand-lg fixed-top bg-dark" id="mainNav" style={{color: 'var(--gray-dark)'}}>
                <div className="container">
                    <Link to = "/"><a style={{cursor:'pointer'}}>
                        <img className="img-fluid d-lg-flex justify-content-lg-center" src={logo} width="500" style={{textAlign:'center'}}/>
                    </a></Link>
                </div>
            </nav>
            <div style={{color:'var(--gray-dark)'}}>
                <section className="login-dark" style={{color: 'var(--gray-dark)'}}>
                    <form onSubmit={handleSubmit} style={{paddingTop:'0px'},{marginTop:'-166px'}}>
                        <div className="illustration"><i className="fa fa-paw" style={{color:'var(--white)'}}></i></div>
                        <div className="form-group"><input type="text" className="form-control" id='correo' name="correo" autocomplete='email' value={values.correo} onChange={handleCampos} required placeholder="Correo" style={{fontFamily:'Lexend'}}/></div>
                        <div className="form-group"><p className='errorCo' id='errorCorreo'></p></div>
                        <div className="form-group"><input className="form-control" id='contra' type="password" name="contra" value={values.contra} onChange={handleCampos} required placeholder="Contraseña" style={{fontFamily:'Lexend'}}/></div>
                        <div className="form-group"><p className='errorCo' id='errorContra'></p></div>
                        <div className="form-group"><input className="btn btn-primary btn-block" type="submit" value="Iniciar Sesión"></input></div>
                        <Link to="/Registrarse"><a className="forgot" style={{fontFamily: 'Lexend'}}>Regístrate en Petbounds</a></Link>
                    </form>
                </section>
            </div>
        </div>
        );
}
reportWebVitals();
export default LogIn;
