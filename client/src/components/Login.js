import React, {useState, useContext} from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import './Login.scss';
import axios from 'axios';
import SetStateContext from '../SetStateContext';

export default function Login() {
    const setState = useContext(SetStateContext);
    
    const history = useHistory();
    const { state } = useLocation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        axios
            .post('http://localhost:3001/api/auth/login', { email, password })
            .then(res => {
                console.log(res.data)
                localStorage.setItem('token', res.data.token);
                history.push((state && state.from) || '/');
                setState((prev) => ({...prev, user_type:res.data.user.user_type, user:res.data.user}));
            })

            .catch(error => {
                console.log(error);

            });
        
    };
    return (
        <div>
            <div class="container">
                <div class="login">
                    <form class="container" onSubmit={handleSubmit}>
                        <img className="logologin" src="https://swanipro.com/wp-content/uploads/2020/10/Screen-Shot-2020-10-23-at-11.51.27-AM.png" />

                        <hr className="seprating" />

                        <h5>Find your best team near you</h5>
                        <input type="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />

                        <input type="checkbox" /><span>Remember me</span>
                        <button>Log-in</button>
                        <button><Link to='/register/patron'>Create a Patron account</Link></button>
                        <button><Link to='/register/owner'>Create an owner/manager account</Link></button>


                    </form>
                </div>
                <div class="register">
                    <img src="https://nighthelper.com/wp-content/uploads/2014/01/play-sports.png" />


                </div>
            </div>
        </div>
    )
}
