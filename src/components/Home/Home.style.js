import styled from 'styled-components';

const HomeWrapper = styled.div`
    .home-container {
        height:100vh;
        max-height: 100vh;
        overflow: hidden;
        padding: 20px;
        flex-direction:column;
    }
    .input_text{
        width: 100%;
        height: 50px;
        border: none;
        border-radius: 7px;
        padding-top: 12px;
    }
    .input_text_show{
            width: 100%;
            height: 50px;
            border: none;
            border-radius: 7px;
            padding-top: 12px;
    }
    .hr-data{
        margin:20px 0;
    }
    .input_text::-webkit-input-placeholder { /* Chrome/Opera/Safari */
        color: black;
        text-align:center;
        font-size: 28px;
      }
      .input_text::-moz-placeholder { /* Firefox 19+ */
        color: black;
        text-align:center;
        font-size: 28px;
      }
      .input_text:-ms-input-placeholder { /* IE 10+ */
        color: black;
        text-align:center;
        font-size: 28px;
      }
      .input_text:-moz-placeholder { /* Firefox 18- */
        color: black;
        text-align:center;
        font-size: 28px;
      }
`;
export default HomeWrapper;