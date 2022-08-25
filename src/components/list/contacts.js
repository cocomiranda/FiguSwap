import React from "react";
import { useNavigate, useParams } from "react-router-dom";
// import "./account.css"


const Contacts = () => {

    const params = useParams();
    const navigate = useNavigate(); 

    const routeChange = () =>{ 
        navigate("/homepage");
    }

    return (
        <div className="cover">
            <div className="profile" onClick={() => routeChange()}>Back</div>
            <div>{params.figu}</div>
            

        </div>
    )
}

export default Contacts