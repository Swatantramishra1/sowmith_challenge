import styled from 'styled-components';
import login_background from '../../img/cms-sign-in.jpg';
import google_logo from '../../img/google_logo.png';
import send_icon from '../../img/send.png';

const LoginWrapper = styled.div`

  .g-sign-in-wrapper {
    display: flex;
    background-image: url(${login_background});
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 100vh;
    
    .left-half, .right-half {
      width: 50%;
    }
    .left-half {
      padding: 10%;
      .intro-text {
        h3 {
          font-size: 48px;
          margin: 0;
        }
        h3:nth-child(1) {
          color: #2c8ebf;
        }
        h3:nth-child(2) {
          color: #4acdd1;
        }
        p {
          font-size: 24px;
          color: #fff;
          margin: 0;
          span {
            font-size: 32px;
          }
        }
      }
    }
    
    .right-half {
      display: flex;
      justify-content: center;
      align-self: flex-end;
      padding: 10% 0;

      .hidden-btn-login {
        width: 222px;
        height: 42px;
        opacity: 0;
        position: absolute;
      }
      
      #customBtn {
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: transparent;
        color: #fff;
        border: 1px solid #fff;
        width: 222px;
        height: 42px;
        border-radius: 25px;
        white-space: nowrap;
        padding: 0 20px 0 0px;

        .icon {
          display: flex;
          position: absolute;
          top: 0;
          left: 0;
          justify-content: center;
          align-content: center;
          background-color: #fff;
          padding: 5px 8px 5px 5px;
          width: 60px;
          border-radius: 25px;
          margin-left: -1px;
          transition: all .5s ease-out;
          img {
            opacity: 1;
            transition: opacity .5s ease-out;
            margin-left: 10px;
          }
          p {
            margin: 0 0 0 -44px;
            opacity: 0;
            color: #000;
            pointer-events: none;
          }
        }
        .buttonText {
          font-size: 14px;
          font-weight: bold;
          /* Use the Roboto font that is loaded in the <head> */
          font-family: 'Roboto', sans-serif;
          padding: 0 20px 0 80px;
        }
        .send-icon {
          position: absolute;
          top: 8px;
          left: 24px;
          opacity: 0;
          border: 1px solid #fff;
          transition: all .5s ease-out;
          img {
            width: 20px;
            height: 20px;
          }
        }

        &:hover {
          cursor: pointer;
          .icon {
            justify-content: space-around;
            align-items: center;
            width: 222px;

            img {
              opacity: 0;
              background: url(${send_icon}) 100%/10% no-repeat;
            }
            p {
              margin: 0;
              opacity: 1;
              color: #000;
            }
          }          
          .send-icon {
            opacity: 1;
            left: 180px;
            color: #000;
          }
        }
      }
    }
  }
`;

export default LoginWrapper;