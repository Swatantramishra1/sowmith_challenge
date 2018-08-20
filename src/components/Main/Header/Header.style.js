import Styled from 'styled-components';

const HeaderWrapper = Styled.div`
    display: flex;
    justify-content: flex-end;
    padding:10px;
    margin: 5px 10px;
    background-color: #fff;
    box-shadow:0 0 5px 1px #b2b2b2;
    border-radius: 0px 10px 0px 0px;
    
    .user-icon {
        border-radius:50%;
    }

`;

export default HeaderWrapper;