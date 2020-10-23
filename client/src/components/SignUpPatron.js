import React from 'react'
import './Signup.scss';
export default function SignUp_Patron() {
    return (
        <div className ="blue-back-ground">
             <div className="container">
                 <div>
             <img className="logo" src="https://swanipro.com/wp-content/uploads/2020/10/Screen-Shot-2020-10-23-at-11.51.27-AM.png"/>

<h2 className="text-center">Find your best team near you</h2>

</div>
        <form>
       

        <div className="row jumbotron">
            <div className="col-sm-6 form-group">
                <label for="name-f">First Name</label>
                <input type="text" className="form-control" name="fname" id="name-f" placeholder="First name" required/>
            </div>
            <div className="col-sm-6 form-group">
                <label for="name-l">Last name</label>
                <input type="text" className="form-control" name="lname" id="name-l" placeholder="Last name" required/>
            </div>

            <div className="col-sm-6 form-group">
                <label for="name-l">Username</label>
                <input type="text" className="form-control" name="username" id="username" placeholder="username" required/>
            </div>
            

 <div className="col-sm-6 form-group">
                <label for="pass">Password</label>
                <input type="Password" name="password" className="form-control" id="pass" placeholder="Password." required/>
            </div>
            <div className="col-sm-6 form-group">
                <label for="pass2">Confirm Password</label>
                <input type="Password" name="cnf-password" className="form-control" id="pass2" placeholder="Re-enter your password." required/>
            </div>

           
            <div className="col-sm-2 form-group">
                <label for="zip">Postal-Code</label>
                <input type="zip" className="form-control" name="Zip" id="zip" placeholder="Postal-Code" required/>
            </div>

            <div className="col-sm-6 form-group">
                <label for="email">Email</label>
                <input type="email" className="form-control" name="email" id="email" placeholder="Email" required/>
            </div>

            <div className="col-sm-6 form-group">
                <label for="email">Confirm email</label>
                <input type="email" className="form-control" name="confirm email" id="confirm email" placeholder="confirm email" required/>
            </div>

           
            <div className="col-sm-12">
                <input type="checkbox" className="form-check d-inline" id="chb" required/><label for="chb" className="form-check-label">&nbsp;I accept all terms and conditions.
                </label>
            </div>

            <div className="col-sm-12 form-group mb-0">
               <button className="btn btn-primary float-right">Submit</button>
            </div>
            
        </div>
        </form>
    </div>


        </div>
    )
}
