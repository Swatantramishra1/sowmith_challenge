import Styled from 'styled-components';

const MainWrapper = Styled.div`
    width: 80%;
    display: flex;
    flex-direction:column;
    .content {
        padding:15px;
        height: calc(100vh - 157px);
        overflow: auto;
        margin: 5px 10px;
        background-color: #fff;
        box-shadow: 0 0 5px 1px #b2b2b2;
    }
`;

export default MainWrapper;