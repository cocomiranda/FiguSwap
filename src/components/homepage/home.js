import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./home.css"

const Home = () => {

    const qatar1 = ['QAT 1','QAT 2','QAT 3','QAT 4','QAT 5'];
    const qatar2 = ['QAT 6','QAT 7','QAT 8','QAT 9','QAT 10'];
    const qatar3 = ['QAT 11','QAT 12','QAT 13','QAT 14','QAT 15'];
    const qatar4 = ['QAT 16','QAT 17','QAT 18','QAT 19','QAT 20'];

    const ecuador1 = ['ECU 1','ECU 2','ECU 3','ECU 4','ECU 5'];
    const ecuador2 = ['ECU 6','ECU 7','ECU 8','ECU 9','ECU 10'];
    const ecuador3 = ['ECU 11','ECU 12','ECU 13','ECU 14','ECU 15'];
    const ecuador4 = ['ECU 16','ECU 17','ECU 18','ECU 19','ECU 20'];

    const senegal1 = ['SEN 1','SEN 2','SEN 3','SEN 4','SEN 5'];
    const senegal2 = ['SEN 6','SEN 7','SEN 8','SEN 9','SEN 10'];
    const senegal3 = ['SEN 11','SEN 12','SEN 13','SEN 14','SEN 15'];
    const senegal4 = ['SEN 16','SEN 17','SEN 18','SEN 19','SEN 20'];

    // const senegal = ['SEN 1','SEN 2','SEN 3','SEN 4','SEN 5','SEN 6','SEN 7','SEN 8','SEN 9','SEN 10','SEN 11','SEN 12','SEN 13'];
    // const paises_bajos = ['NED 1','NED 2','NED 3','NED 4','NED 5','NED 6','NED 7','NED 8','NED 9','NED 10','NED 11','NED 12','NED 13'];
    
    const navigate = useNavigate(); 
    const routeChange = () =>{ 
        navigate("/profile");
    }

    function showAll() {
        const aux1 = document.getElementById('tableAll');
        aux1.style.display = 'block';
        const aux2 = document.getElementById('tableFaltantes');
        aux2.style.display = 'none';
        const aux3 = document.getElementById('tableRepetidas');
        aux3.style.display = 'none';

        const boton1 = document.getElementById("boton_todas");
        boton1.style.color = 'white';
        boton1.style.backgroundColor = '#8A1538';
        const boton2 = document.getElementById("boton_faltantes");
        boton2.style.color = '#8A1538';
        boton2.style.backgroundColor = 'white';
        const boton3 = document.getElementById("boton_repetidas");
        boton3.style.color = '#8A1538';
        boton3.style.backgroundColor = 'white';
    }
    function showFaltantes() {
        const aux1 = document.getElementById('tableAll');
        aux1.style.display = 'none';
        const aux2 = document.getElementById('tableFaltantes');
        aux2.style.display = 'block';
        const aux3 = document.getElementById('tableRepetidas');
        aux3.style.display = 'none';
        
        const boton1 = document.getElementById("boton_todas");
        boton1.style.color = '#8A1538';
        boton1.style.backgroundColor = 'white';
        const boton2 = document.getElementById("boton_faltantes");
        boton2.style.color = 'white';
        boton2.style.backgroundColor = '#8A1538';
        const boton3 = document.getElementById("boton_repetidas");
        boton3.style.color = '#8A1538';
        boton3.style.backgroundColor = 'white';
    }
    function showRepetidas() {
        const aux1 = document.getElementById('tableAll');
        aux1.style.display = 'none';
        const aux2 = document.getElementById('tableFaltantes');
        aux2.style.display = 'none';
        const aux3 = document.getElementById('tableRepetidas');
        aux3.style.display = 'block';

        const boton1 = document.getElementById("boton_todas");
        boton1.style.color = '#8A1538';
        boton1.style.backgroundColor = 'white';
        const boton2 = document.getElementById("boton_faltantes");
        boton2.style.color = '#8A1538';
        boton2.style.backgroundColor = 'white';
        const boton3 = document.getElementById("boton_repetidas");
        boton3.style.color = 'white';
        boton3.style.backgroundColor = '#8A1538';
    }

 
    
    const [state, setState] = useState(0);
    let colortoshow;
    let estado;

    const betterToggleState = event => {
        if (event.currentTarget.id === 'repetida') {
            event.currentTarget.style.backgroundColor = "white";
            event.currentTarget.id = "faltante";
        }
        else if (event.currentTarget.id === 'faltante') {
            event.currentTarget.style.backgroundColor = "green";
            event.currentTarget.id  = "tengo";
        }
        else {
            event.currentTarget.style.backgroundColor = "orange";
            event.currentTarget.id  = "repetida";
        }
        copia1();
        // setState((prevState) => (prevState + 1) % 3);
    };

    function copia1() {
        const tabla1 = document.getElementById('tableAll');
        const tabla2 = document.getElementById('tableFaltantes');
        const tabla3 = document.getElementById('tableRepetidas');
        tabla2.innerHTML = tabla1.innerHTML;
        tabla3.innerHTML = tabla1.innerHTML;
    }
    



    return (
        <div className="cover">
            
            <div className="profile" onClick={() => routeChange()}> my profile</div>
    
            <div class="toggle-status">
                <a className="status_buttons" id="boton_todas" onClick={ showAll }>Todas</a>&nbsp;
                <a className="status_buttons" id="boton_faltantes" onClick={ showFaltantes }>Faltantes</a>&nbsp;
                <a className="status_buttons" id="boton_repetidas" onClick={ showRepetidas }>Repetidas</a>&nbsp;
            </div>

            <div id="tableAll">
                <a className="team">QATAR</a><br/><br/>
                <table>
                    <tr>
                    {/* style={{ backgroundColor: isActive ? 'salmon' : ''}} */}
                        <td className="card" id="faltante" style={{backgroundColor: colortoshow}} onClick={betterToggleState} >QAT 1</td>
                        <td className="card" id="faltante" style={{backgroundColor: colortoshow}} onClick={betterToggleState} >QAT 2</td>
                        <td className="card" id="faltante" style={{backgroundColor: colortoshow}} onClick={betterToggleState} >QAT 3</td>
                        <td className="card" id="faltante" style={{backgroundColor: colortoshow}} onClick={betterToggleState} >QAT 4</td>
                        <td className="card" id="faltante" style={{backgroundColor: colortoshow}} onClick={betterToggleState} >QAT 5</td>
                    </tr><br/>
                    <tr>
                        <td className="card" id="faltante" style={{backgroundColor: colortoshow}} onClick={betterToggleState} >QAT 6</td>
                        <td className="card" id="faltante" style={{backgroundColor: colortoshow}} onClick={betterToggleState} >QAT 7</td>
                        <td className="card" id="faltante" style={{backgroundColor: colortoshow}} onClick={betterToggleState} >QAT 8</td>
                        <td className="card" id="faltante" style={{backgroundColor: colortoshow}} onClick={betterToggleState} >QAT 9</td>
                        <td className="card" id="faltante" style={{backgroundColor: colortoshow}} onClick={betterToggleState} >QAT 10</td>
                    </tr><br/>
                    <tr>
                        <td className="card" id="faltante" style={{backgroundColor: colortoshow}} onClick={betterToggleState} >QAT 11</td>
                        <td className="card" id="faltante" style={{backgroundColor: colortoshow}} onClick={betterToggleState} >QAT 12</td>
                        <td className="card" id="faltante" style={{backgroundColor: colortoshow}} onClick={betterToggleState} >QAT 13</td>
                        <td className="card" id="faltante" style={{backgroundColor: colortoshow}} onClick={betterToggleState} >QAT 14</td>
                        <td className="card" id="faltante" style={{backgroundColor: colortoshow}} onClick={betterToggleState} >QAT 15</td>
                    </tr><br/>
                    <tr>
                        <td className="card" id="faltante" style={{backgroundColor: colortoshow}} onClick={betterToggleState} >QAT 16</td>
                        <td className="card" id="faltante" style={{backgroundColor: colortoshow}} onClick={betterToggleState} >QAT 17</td>
                        <td className="card" id="faltante" style={{backgroundColor: colortoshow}} onClick={betterToggleState} >QAT 18</td>
                        <td className="card" id="faltante" style={{backgroundColor: colortoshow}} onClick={betterToggleState} >QAT 19</td>
                        <td className="card" id="faltante" style={{backgroundColor: colortoshow}} onClick={betterToggleState} >QAT 20</td>
                    </tr><br/><br/><br/>
                </table> 

                <a className="team">ECUADOR</a><br/><br/> 
                <table>
                    <tr>
                        <td className="card" id="faltante" style={{backgroundColor: colortoshow}} onClick={betterToggleState} >ECU 1</td>
                        <td className="card" id="faltante" style={{backgroundColor: colortoshow}} onClick={betterToggleState} >ECU 2</td>
                        <td className="card" id="faltante" style={{backgroundColor: colortoshow}} onClick={betterToggleState} >ECU 3</td>
                        <td className="card" id="faltante" style={{backgroundColor: colortoshow}} onClick={betterToggleState} >ECU 4</td>
                        <td className="card" id="faltante" style={{backgroundColor: colortoshow}} onClick={betterToggleState} >ECU 5</td>
                    </tr><br/>
                    <tr>
                        <td className="card" id="faltante" style={{backgroundColor: colortoshow}} onClick={betterToggleState} >ECU 6</td>
                        <td className="card" id="faltante" style={{backgroundColor: colortoshow}} onClick={betterToggleState} >ECU 7</td>
                        <td className="card" id="faltante" style={{backgroundColor: colortoshow}} onClick={betterToggleState} >ECU 8</td>
                        <td className="card" id="faltante" style={{backgroundColor: colortoshow}} onClick={betterToggleState} >ECU 9</td>
                        <td className="card" id="faltante" style={{backgroundColor: colortoshow}} onClick={betterToggleState} >ECU 10</td>
                    </tr><br/>
                    <tr>
                        <td className="card" id="faltante" style={{backgroundColor: colortoshow}} onClick={betterToggleState} >ECU 11</td>
                        <td className="card" id="faltante" style={{backgroundColor: colortoshow}} onClick={betterToggleState} >ECU 12</td>
                        <td className="card" id="faltante" style={{backgroundColor: colortoshow}} onClick={betterToggleState} >ECU 13</td>
                        <td className="card" id="faltante" style={{backgroundColor: colortoshow}} onClick={betterToggleState} >ECU 14</td>
                        <td className="card" id="faltante" style={{backgroundColor: colortoshow}} onClick={betterToggleState} >ECU 15</td>
                    </tr><br/>
                    <tr>
                        <td className="card" id="faltante" style={{backgroundColor: colortoshow}} onClick={betterToggleState} >ECU 16</td>
                        <td className="card" id="faltante" style={{backgroundColor: colortoshow}} onClick={betterToggleState} >ECU 17</td>
                        <td className="card" id="faltante" style={{backgroundColor: colortoshow}} onClick={betterToggleState} >ECU 18</td>
                        <td className="card" id="faltante" style={{backgroundColor: colortoshow}} onClick={betterToggleState} >ECU 19</td>
                        <td className="card" id="faltante" style={{backgroundColor: colortoshow}} onClick={betterToggleState} >ECU 20</td>
                    </tr><br/><br/><br/>
                </table>    
                
                <a className="team">SENEGAL</a><br/><br/> 
                <table>
                    <tr>
                        <td className="card" id="faltante" style={{backgroundColor: colortoshow}} onClick={betterToggleState} >SEN 1</td>
                        <td className="card" id="faltante" style={{backgroundColor: colortoshow}} onClick={betterToggleState} >SEN 2</td>
                        <td className="card" id="faltante" style={{backgroundColor: colortoshow}} onClick={betterToggleState} >SEN 3</td>
                        <td className="card" id="faltante" style={{backgroundColor: colortoshow}} onClick={betterToggleState} >SEN 4</td>
                        <td className="card" id="faltante" style={{backgroundColor: colortoshow}} onClick={betterToggleState} >SEN 5</td>
                    </tr><br/>
                    <tr>
                        <td className="card" id="faltante" style={{backgroundColor: colortoshow}} onClick={betterToggleState} >SEN 6</td>
                        <td className="card" id="faltante" style={{backgroundColor: colortoshow}} onClick={betterToggleState} >SEN 7</td>
                        <td className="card" id="faltante" style={{backgroundColor: colortoshow}} onClick={betterToggleState} >SEN 8</td>
                        <td className="card" id="faltante" style={{backgroundColor: colortoshow}} onClick={betterToggleState} >SEN 9</td>
                        <td className="card" id="faltante" style={{backgroundColor: colortoshow}} onClick={betterToggleState} >SEN 10</td>
                    </tr><br/>
                    <tr>
                        <td className="card" id="faltante" style={{backgroundColor: colortoshow}} onClick={betterToggleState} >SEN 11</td>
                        <td className="card" id="faltante" style={{backgroundColor: colortoshow}} onClick={betterToggleState} >SEN 12</td>
                        <td className="card" id="faltante" style={{backgroundColor: colortoshow}} onClick={betterToggleState} >SEN 13</td>
                        <td className="card" id="faltante" style={{backgroundColor: colortoshow}} onClick={betterToggleState} >SEN 14</td>
                        <td className="card" id="faltante" style={{backgroundColor: colortoshow}} onClick={betterToggleState} >SEN 15</td>
                    </tr><br/>
                    <tr>
                        <td className="card" id="faltante" style={{backgroundColor: colortoshow}} onClick={betterToggleState} >SEN 16</td>
                        <td className="card" id="faltante" style={{backgroundColor: colortoshow}} onClick={betterToggleState} >SEN 17</td>
                        <td className="card" id="faltante" style={{backgroundColor: colortoshow}} onClick={betterToggleState} >SEN 18</td>
                        <td className="card" id="faltante" style={{backgroundColor: colortoshow}} onClick={betterToggleState} >SEN 19</td>
                        <td className="card" id="faltante" style={{backgroundColor: colortoshow}} onClick={betterToggleState} >SEN 20</td>
                    </tr><br/><br/><br/>
                </table>  
            </div>

            <table id="tableFaltantes">
                    <a></a>
            </table>

            <table id="tableRepetidas">
                    <a></a>
            </table>
        </div>
    )
}

export default Home