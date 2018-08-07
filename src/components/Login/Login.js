import React from 'react';
import LoginWrapper from './Login.style';

class Login extends React.Component {
  render() {
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
                <img src="https://google-developers.appspot.com/identity/sign-in/g-normal.png" alt="" />
              </span>
              <span className="buttonText">Login with Google</span>
              <span className="send-icon">
                <img src="https://image.flaticon.com/icons/png/128/60/60525.png" alt="" />
              </span>
            </div>
          </div>
        </div>

      </LoginWrapper>
    )
  }
}

export default Login;