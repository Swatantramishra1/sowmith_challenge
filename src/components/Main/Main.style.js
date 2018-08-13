import Styled from 'styled-components';

const MainWrapper = Styled.div`
    .main-container {
        flex-direction:column;
        .content {
            padding:15px;
            height: calc(100vh - 133px);
            overflow: auto;
            border: 1px solid;
        }
        .second-half-content{
           
        }
        .footer {
            border: 1px solid;
            padding: 10px;
        }

    }

`;

export default MainWrapper;