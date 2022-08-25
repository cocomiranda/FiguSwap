 import React, { Component } from "react";
import { useNavigate } from "react-router-dom";
import "./account.css"
// import Dropdown from "./localidad.js"
// import addOpt from "./localidad"
import {addOpt, localiades} from "./localidad";


// const script = document.createElement('script');
// script.type = "text/javascript"
// script.src = "./localidad.js"
// document.head.appendChild(script);


{/* <addOpt></addOpt> */}
const Profile = () => {

    const navigate = useNavigate(); 

    const routeHomepage = () =>{ 
        navigate("/homepage");
    }
    const routeLogin = () =>{ 
        navigate("/");
    }
    
    var data = require("./localidades.json");
    // console.log(data)
    // console.log(typeof(data))

    let optionItems = data.map((ubicacion) =>
        <option key={ubicacion.id}>{ubicacion.provincia} - {ubicacion.localidad}</option>
    );

    // if (document.readyState === "complete") {
    //     const aux1 = document.getElementById('provincia');
    //     aux1.value = 'ciudad autonoma buenos aires'
    //     console.log(aux1.value)
    // } 

    // const aux1 = document.getElementById('provincia');
    // const aux2 = document.getElementById('localidad');
    // aux1 = '-';
    // aux2 = '_';

    // console.log(document.getElementById('provincia').children[1].value);
    // console.log(aux2);


    return (
        <div className="cover">
           
            <div className="homepage" onClick={() => routeHomepage()}>Home Page</div>
            <h1 class="titulo">MY PROFILE</h1>
            {/* <form>
                <label for="fname">Nombre se usuario:</label><br/>
                <input type="text" name="name"  id="username">pablo miranda</input><br/><br/>
            </form> */}

           {/* onChange={ localiades(document.getElementById('localidad'), document.getElementById('provincia').value)} */}
            
            {/* <div className="form-group"><label for="provincia">Provincia <small>*</small></label><br></br>
                <select name="provincia" className="form-control col" id="provincia"
                //  onLoad={ document.getElementById('provincia').value = ""}
                // onChange={ localiades(document.getElementById('localidad'), document.getElementById('provincia').value)}
                 >
                    <option value="" selected disabled hidden>-</option>
                    <option value="ciudad autonoma buenos aires">ciudad autonoma buenos aires</option>
                    <option value="gran buenos aires">gran buenos aires</option>
                    <option value="provincia buenos aires">provincia buenos aires</option>
                    <option value="santa fe">santa fe</option>
                    <option value="cordoba">cordoba</option>
                    <option value="mendoza">mendoza</option>
                    <option value="san juan">san juan</option>
                    <option value="san luis">san luis</option>
                    <option value="la rioja">la rioja</option>
                    <option value="catamarca">catamarca</option>
                    <option value="tucuman">tucuman</option>
                    <option value="jujuy">jujuy</option>
                    <option value="salta">salta</option>
                    <option value="neuquen">neuquen</option>
                    <option value="rio negro">rio negro</option>
                    <option value="chubut">chubut</option>
                    <option value="santa cruz">santa cruz</option>
                    <option value="tierra del fuego">tierra del fuego</option>
                    <option value="santiago del estero">santiago del estero</option>
                    <option value="chaco">chaco</option>
                    <option value="formosa">formosa</option>
                    <option value="misiones">misiones</option>
                    <option value="corrientes">corrientes</option>
                    <option value="entre rios">entre rios</option>
                    <option value="la pampa">la pampa</option>
                </select>
            </div> */}

            <div className="form-group"><label for="localidad">Localidad <small>*</small></label><br></br>
                {/* <select name="dir_localidad" className="form-control col" id="localidad" required>
                    <option value="" selected disabled hidden>-</option>
                </select> */}
                <select className="form-control col" id="localidad">
                    {optionItems}
                </select>
            </div>

            <div className="close" onClick={() => routeLogin()}>Cerrar Sesion</div>
        </div>
        
    )
}

export default Profile