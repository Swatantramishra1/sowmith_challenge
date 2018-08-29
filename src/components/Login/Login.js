import React from 'react';
import  { connect } from 'react-redux';
import { history } from '../../History';
import config from '../../config/api';
import GoogleLogin from 'react-google-login';
import LoginWrapper from './Login.style';
import { startLogin, loginRequest, loginFailure } from '../../redux/actions/Auth/AuthActions';
import google_logo from '../../img/google_logo.png';
import send_icon from '../../img/send.png';

class Login extends React.Component {
  
  constructor() {
    super();

    this.handleRequest = this.handleRequest.bind(this);
    this.handleSuccess = this.handleSuccess.bind(this);
    this.handleFailure = this.handleFailure.bind(this);
  }

  handleRequest() {
    this.props.loginRequest();
  }

  handleSuccess(response) {
    this.props.startLogin(response.tokenId);
  }

  handleFailure(response) {
    this.props.loginFailure();
    history.push('/');
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
              clientId={config.client_id}
              buttonText="Login"
              onRequest={this.handleRequest}
              onSuccess={this.handleSuccess}
              onFailure={this.handleFailure}
            />
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
}

function mapStateToProps(state) {
  return state;
}

const mapDispatchToProps = {
  startLogin,
  loginRequest,
  loginFailure
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);