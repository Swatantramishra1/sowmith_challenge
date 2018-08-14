import Styled from 'styled-components';

const MainWrapper = Styled.div`
    .main-container {
        flex-direction:column;
        .content {
            padding:15px;
            height: calc(100vh - 157px);
            overflow: auto;
            margin:5px;
            background-color: #fff;
            box-shadow: 0 0 5px 1px #b2b2b2;
            .major-statistics {
                padding: 10px 0;
            }
            .recent-and-shortcuts-wrapper {
                padding: 10px;
            }
        }
        .footer {
            margin:5px;
            background-color: #fff;
            box-shadow: 0 0 5px 1px #b2b2b2;
            padding: 10px;
            border-radius: 0px 0px 10px 0px;
        }
    }
`;

export default MainWrapper;