import Styled from 'styled-components';

const ShortCutsWrapper = Styled.div`
    box-shadow: 0 0 5px 1px #ccc;
    border-radius: 0 10px 10px 0;
    height: calc(100vh - 362px);
    .short-cuts-container {
        .user-shortcuts {
            justify-content: space-evenly;
            font-size:48px;
        }
        .users-shortcuts-heading {
            font-size:18px;
        }
    }
`;

export default ShortCutsWrapper;