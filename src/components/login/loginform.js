import React, { useState } from "react";
// import {Routes, Route, useNavigate} from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import "./loginform.css"
import firebase from './Firebase';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore';

const LoginForm = () => {

    const navigate = useNavigate(); 
    const routeChange = () =>{ 
        navigate("/homepage");
    }

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [location, setLocation] = useState('');
    
    const handleUsername = event => {
        setUsername(event.target.value);
    };
    const handlePassword = event => {
        setPassword(event.target.value);
    };
    const handleLocation = event => {
        setLocation(event.target.value);
    };
    
    function enter()
    {
        console.log(username)
        console.log(password)
        console.log(location)
        add_data(db,username,password,location)
    }

    const firebaseConfig = {
        apiKey: "AIzaSyDDZcrXRYk3_7hf7rsO6jz9YA2tno-DRSg",
        authDomain: "figuswap.firebaseapp.com",
        databaseURL: "https://figuswap-default-rtdb.firebaseio.com",
        projectId: "figuswap",
        storageBucket: "figuswap.appspot.com",
        messagingSenderId: "143399267512",
        appId: "1:143399267512:web:20b52674b003f83105184d",
        measurementId: "G-57D434TN64"
      };
    
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    async function read_data(db) {
        const querySnapshot = await getDocs(collection(db, "usuarios"));
        querySnapshot.forEach((doc) => {
            console.log(doc.id)
            console.log(doc._document.data.value.mapValue.fields.username)
            console.log(doc._document.data.value.mapValue.fields.password)
            console.log(doc._document.data.value.mapValue.fields.location)
            console.log('\n')
            
        });
    }
    // read_data(db)

    async function add_data(db,username,password,location) {
        try {
            const docRef = await addDoc(collection(db, "usuarios"), {
                username: username,
                password: password,
                location: location,
            });
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
        }
    }
    // add_data(db)

    

    return (
        <div className="cover">
            <h1 className="h1">FIGUSWAP</h1>
            
            <input type="text" className="username" placeholder="username" onChange={ handleUsername } value={username} />
            <input type="password" className="password" placeholder="password" onChange={ handlePassword } value={password}/>
            <input type="text" className="location" placeholder="location" onChange={ handleLocation } value={location} />

            <div className="login-btn" onClick={ enter }>Login</div>
            {/* <div className="login-btn" onClick={() => routeChange()}>Login</div> */}
            {/* <p className="text">Or login using</p>

            <div className="alt-login">
                <div className="facebook"></div>
                <div className="google"></div>
            </div> */}

            <div className="signup">Not registered? Signup</div>

            

        </div>
    )    
}

export default LoginForm