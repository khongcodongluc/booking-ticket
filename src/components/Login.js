import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Login.css'

function Login(props) {
    const [login, setLogin]= useState(true);
    const [email, setEmail]= useState("");
    const [phone, setPhone]= useState("");
    const [username, setUserName]= useState("");
    const [password, setPassword]= useState("");
    const [rePassword, setRePassword]= useState("");

    const loginSubmit = (username, password) =>{
        
    }

    return (
        <div className={login ? "login-mainContainer" : "login-mainContainer l" }>
            <div className="login-login1" >
                <p onClick={() =>{setLogin(true)}} 
                className={login?"login-h5 l":"login-h5 s"}>Sign in</p>
            </div>
            
            <div className="login-login1">
                <p onClick={() =>{setLogin(false)}}
                className={!login?"login-h5 l":"login-h5 s"}>Sign up</p>
            </div>
        
            {
                login?                
                <div className="login-loginForm">
                    <input type="text" placeholder="Username" className="login-boxInput"
                            onChange={(e) => setUserName(e.target.value)}/>
                    <input type="password" placeholder="Password" className="login-boxInput"
                            onChange={(e) => setPassword(e.target.value)}/>
                    <input type="submit" value="Login" className="login-submit" onClick={() => loginSubmit(username, password)}/>
                </div>:
                <div className="login-loginForm">
                    <input type="text" placeholder="Username" className="login-boxInput"
                            onChange={(e) => setUserName(e.target.value)} />
                    <input type="text" placeholder="Email" className="login-boxInput"
                            onChange={(e) => setEmail(e.target.value)}/>
                    <input style={{display: 'none'}}/>
                    <input type="text" placeholder="Phone" className="login-boxInput"
                          />
                    <input type="password" placeholder="Password" className="login-boxInput"
                            onChange={(e) => setPassword(e.target.value)}/>         
                    <input type="password" className="login-boxInput"
                            onChange={(e) => setRePassword(e.target.value)} placeholder="Confirm password"/> 
                    <input type="submit" value="Sign Up" className="login-submit" />
                </div>
            }
            <Link to="/">
                <FontAwesomeIcon icon={faTimesCircle} className="login-exit"/>
            </Link>
        </div>
    )
}

export default Login
