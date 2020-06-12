import React, { Component } from 'react';

import './login-styles.css';
import './loginfiles/images/icons/favicon.ico';
import './loginfiles/vendor/bootstrap/css/bootstrap.min.css';
import './loginfiles/fonts/font-awesome-4.7.0/css/font-awesome.min.css';
import './loginfiles/fonts/font-awesome-4.7.0/css/font-awesome.css';
import './loginfiles/vendor/animate/animate.css';
import './loginfiles/fonts/iconic/css/material-design-iconic-font.min.css';
import './loginfiles/vendor/css-hamburgers/hamburgers.min.css';
import './loginfiles/vendor/daterangepicker/daterangepicker.css';
import './loginfiles/vendor/animsition/css/animsition.min.css';
import './loginfiles/vendor/select2/select2.min.css';
import './loginfiles/css/util.css';
import './loginfiles/css/main.css';
import  logo from './dalogo.png'
import  logo1 from './gradcap1.png'
import  g1 from './g1.jpeg'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicks:0
        }
    }

    handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.props.isClicked)
        this.props.handleLogIn(this.props.username, this.props.password);
        console.log(this.props.validityCheck)
    };

    render() {
        return (
            <div className="limiter">
                <div className="container-login100" style={{backgroundImage: `url(${g1})`}} >
                    <div className="wrap-login100" >
                        <form className="login100-form validate-form">
                            <span className="login100-form-title p-b-15">
                                <span className="gs">GradStat</span>
                            </span>
                            <span className="login100-form-title p-b-48">
                                <i className="fa fa-graduation-cap fa-2x" aria-hidden="true"></i>	
                            </span>
                        
                 
        <div className='wrap-input100 validate-input' data-validate = 'Enter username'>
            <input className="input100" type="text" name="username" onChange = {this.props.handleUserNameChange} 
             placeholder="Username" />
            <span className="focus-input100" data-placeholder="&#xf207;">
				
			</span>
        </div>

        <div className='wrap-input100 validate-input' data-validate='Enter password'>
            <input className="input100" type="password" name="pass" onChange = {this.props.handlePasswordChange}
            placeholder="Password" />
            <span className="focus-input100" data-placeholder="&#xf191;">
                
            </span>
        </div>         


    <div className="container-login100-form-btn">
      <button className="login100-form-btn" onClick={(e) => this.handleSubmit(e)}  type="submit">
        Login
      </button>
    </div>
    
                        </form>
                   
                
                {
                    ((this.props.validityCheck) && (this.props.isClicked))? <div className = "login--denied" style={{fontColor:'black',fontWeight:'bold',fontFamily:'arial'}}>
                        User ID or password entered is incorrect!            
                </div> : <div> </div>}
                
                </div>
                </div>
            </div>

    )}
        }

    export default Login;