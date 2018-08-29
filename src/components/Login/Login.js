import React from 'react';
import { connect } from 'react-redux';
import LoginWrapper from './Login.style';
import { history } from '../../History';
import google_logo from '../../img/google_logo.png';
import send_icon from '../../img/send.png';
import GoogleLogin from 'react-google-login';
import config from '../../config/config';
import { loginRequest, loginSuccess, loginFailure } from '../../redux/actions/Auth/AuthActions';

class Login extends React.Component {
  
  constructor() {
    super();

    this.handleFailure = this.handleFailure.bind(this);
    this.handleSuccess = this.handleSuccess.bind(this);
    this.handleRequest = this.handleRequest.bind(this);
    this.handleLoginClick = this.handleLoginClick.bind(this);
  }

  handleSuccess(response) {
    console.log(response);
    console.log('call login success');
    this.props.loginSuccess(response);
    history.push('/home');
  }
  
  handleFailure(response) {
    console.log(response);
    console.log('call login fail');
    this.props.loginFailure();
    history.push('/');
  }
  
  handleRequest() {
    console.log('call login req');
    this.props.loginRequest();
    history.push('/');
  }

  handleLoginClick() {
    document.querySelector('.hidden-btn-login').click();
  }
  
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
            <GoogleLogin
              className="hidden-btn-login"
              clientId={config.client_id}
              buttonText="Login"
              onRequest={this.handleRequest}
              onSuccess={this.handleSuccess}
              onFailure={this.handleFailure}
            />
            <div id="customBtn" className="customGPlusSignIn" onClick={this.handleLoginClick}>
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
}

function mapStateToProps(state) {
  return state;
}

const mapDispatchToProps ={
  loginSuccess,
  loginFailure,
  loginRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);