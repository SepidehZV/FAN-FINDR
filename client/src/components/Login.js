import React from 'react'
import './Login.scss';

export default function Login() {
    return (
        <div>
            <div class="container">
      <div class="login">
         <div class="container">
         <img className="logo" src="https://swanipro.com/wp-content/uploads/2020/10/Screen-Shot-2020-10-23-at-11.51.27-AM.png"/>

         <hr className="seprating" />

              <h5>Find your best team near you</h5>
              <input type="email" placeholder="username"/>
              <input type="password" placeholder="Password"/>
                  
             <input type="checkbox"/><span>Remember me</span>
              <button>Log in</button>
              <button>Create a Patron account</button>
              <button>Create an owner/manager account</button>


         </div>
      </div>
      <div class="register">
          <img  src="https://nighthelper.com/wp-content/uploads/2014/01/play-sports.png"/>

          
      </div>  
    </div>
        </div>
    )
}
