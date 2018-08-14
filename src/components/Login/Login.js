import React from 'react';
import LoginWrapper from './Login.style';
import google_logo from '../../img/google_logo.png';
import send_icon from '../../img/send.png';

const Login = () => {
  return(
    <LoginWrapper>
      <div className="g-sign-in-wrapper">
        <div className="left-half">
          <div className="intro-text">
            <h3>Intelligence</h3>
            <h3>Centers</h3>
            <p><span>C</span>ontent</p>
            <p><span>M</span>anagement</p>
            <p><span>S</span>ystem</p>
          </div>
        </div>
        <div className="right-half">
          <div id="customBtn" className="customGPlusSignIn">
            <span className="icon">
              <p className="optional-text">Sign In</p>
              <img src={google_logo} alt="Google-Logo" />
            </span>
            <span className="buttonText">Login with Google</span>
            <span className="send-icon">
              <img src={send_icon} alt="Send-Icon" />
            </span>
          </div>
        </div>
      </div>
    </LoginWrapper>
  );
}

export default Login;