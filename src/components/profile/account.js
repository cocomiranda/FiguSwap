import React from "react";
import { useNavigate } from "react-router-dom";
import "./account.css"


const Profile = () => {

    
    const navigate = useNavigate(); 

    const routeHomepage = () =>{ 
        navigate("/homepage");
    }
    const routeLogin = () =>{ 
        navigate("/");
    }
    return (
        <div className="cover">
            
            <div className="homepage" onClick={() => routeHomepage()}>Home Page</div>
            <h1 className="hola">MY PROFILE</h1>
            <form>
                <label for="fname">Nombre se usuario:</label><br/>
                <a id="username">pablo miranda</a><br/><br/>
                <label for="lname">Ubicacion:</label><br/>
                <a id="location">Recoleta</a><br/>
            </form>

            <div className="close" onClick={() => routeLogin()}>Cerrar Sesion</div>
        </div>
    )
}

export default Profile