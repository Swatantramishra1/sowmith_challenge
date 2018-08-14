import Styled from 'styled-components';

const MainWrapper = Styled.div`
    .main-container {
        flex-direction:column;
        .content {
            padding:15px;
            height: calc(100vh - 142px);
            overflow: auto;
            margin:5px;
            box-shadow: 0 0 5px 1px #b2b2b2;
        }
        .second-half-content{
           
        }
        .footer {
            margin:5px;
            box-shadow: 0 0 5px 1px #b2b2b2;
            padding: 10px;
        }

    }

`;

export default MainWrapper;