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
import {Link} from 'react-router-dom'
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { gql, useMutation } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
});

const InicioSesion = gql `
    mutation ($inicioSesionCorreo: String!, $inicioSesionContra: String!) {
    inicioSesion(correo: $inicioSesionCorreo, contra: $inicioSesionContra) {
      success
      message
    }
  }
`;
    

class LogIn extends Component{
    constructor(props){
        super(props);
        this.state={
            correo:'',
            contra:'',
            contraOk:false,
            correoOk:false
        };
        this.handleCampos = this.handleCampos.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleCampos(event){
        this.setState(
            {[event.target.name]: event.target.value});
        
    }
    handleSubmit(event) {
        event.preventDefault();

        if (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/.test(this.state.contra)) {
            this.setState({contraOk:true});
            document.getElementById("errorContra").innerHTML = " ";
        } else {
            document.getElementById("errorContra").innerHTML = "Ingrese de 8 a 20 caracteres. Debe contener mayúsculas, minúsculas y números";
        }
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.correo))  {
            this.setState({correoOk:true});
            document.getElementById("errorCorreo").innerHTML = "";
        } else {
            document.getElementById("errorCorreo").innerHTML = "Ingrese correo valido";
        }
    }
    render(){
        const[inicioSesion,{data}]=useMutation(InicioSesion);
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
                    <form onSubmit={e=>
                        inicioSesion({variables:{
                        "inicioSesionCorreo": "cel@gmail.com",
                        "inicioSesionContra": "HolaComo12"
                    }}).then(result=>console.log(result))     } style={{paddingTop:'0px'},{marginTop:'-166px'}}>
                        <div className="illustration"><i className="fa fa-paw" style={{color:'var(--white)'}}></i></div>
                        <div className="form-group"><input type="text" className="form-control" id='correo' name="correo" autocomplete='email' value={this.state.correo} onChange={this.handleCampos} required placeholder="Correo" style={{fontFamily:'Lexend'}}/></div>
                        <div className="form-group"><p className='errorCo' id='errorCorreo'></p></div>
                        <div className="form-group"><input className="form-control" id='contra' type="password" name="contra" required placeholder="Contraseña" value={this.state.contra} onChange={this.handleCampos} style={{fontFamily:'Lexend'}}/></div>
                        <div className="form-group"><p className='errorCo' id='errorContra'></p></div>
                        <div className="form-group"><input className="btn btn-primary btn-block" type="submit" value="Iniciar Sesión"></input></div>
                        <a className="forgot" href="menu-registros.html" style={{fontFamily: 'Lexend'}}>Regístrate en Petbounds</a>
                    </form>
                </section>
            </div>
        </div>
        );
    }
}
reportWebVitals();
export default LogIn;
