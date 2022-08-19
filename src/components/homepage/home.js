import React from "react";
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
    const ecuador4 = ['ECU 16','ECU 17','ECU 18','ECU 19','QAT 20'];
    // const ecuador = ['ECU 1','ECU 2','ECU 3','ECU 4','ECU 5','ECU 6','ECU 7','ECU 8','ECU 9','ECU 10','ECU 11','ECU 12','ECU 13'];
    // const senegal = ['SEN 1','SEN 2','SEN 3','SEN 4','SEN 5','SEN 6','SEN 7','SEN 8','SEN 9','SEN 10','SEN 11','SEN 12','SEN 13'];
    // const paises_bajos = ['NED 1','NED 2','NED 3','NED 4','NED 5','NED 6','NED 7','NED 8','NED 9','NED 10','NED 11','NED 12','NED 13'];
    
    const navigate = useNavigate(); 

    const routeChange = () =>{ 
        navigate("/profile");
    }
    return (
        <div className="cover" >
            
            <div className="profile" onClick={() => routeChange()} >profile</div>
            <div className="tableContainer">
                <table >
                    <h4 className="team">QATAR</h4><br/>
                    <tr>
                        {qatar1.map((result) => (
                            <td>{result}&nbsp;</td>
                        ))}
                    </tr><br/>
                    <tr>
                        {qatar2.map((result) => (
                            <td>{result}&nbsp;</td>
                        ))}
                    </tr><br/>
                    <tr>
                        {qatar3.map((result) => (
                            <td>{result}&nbsp;</td>
                        ))}
                    </tr><br/>
                    <tr>
                        {qatar4.map((result) => (
                            <td>{result}&nbsp;</td>
                        ))}
                    </tr><br/><br/><br/>

                    <h4 className="team">ECUADOR</h4><br/>
                    <tr>
                        {ecuador1.map((result) => (
                            <td>{result}&nbsp;</td>
                        ))}
                    </tr><br/>
                    <tr>
                        {ecuador2.map((result) => (
                            <td>{result}&nbsp;</td>
                        ))}
                    </tr><br/>
                    <tr>
                        {ecuador3.map((result) => (
                            <td>{result}&nbsp;</td>
                        ))}
                    </tr><br/>
                    <tr>
                        {ecuador4.map((result) => (
                            <td>{result}&nbsp;</td>
                        ))}
                    </tr><br/>
                </table>
            </div>
        </div>
    )
}

export default Home