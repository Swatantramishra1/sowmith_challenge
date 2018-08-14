import Styled from 'styled-components';

const ShortCutsWrapper = Styled.div`
    box-shadow: 0 0 5px 1px #ccc;
    border-radius: 0 10px 10px 0;
    height: calc(100vh - 362px);
    .short-cuts-container {
        .user-shortcuts {
            font-size:24px;
            .ant-btn {
                width: 32px;
                padding: 0 9px;
                overflow: hidden;
                margin: 0 5px;
                font-size: 16px;
                transition: all 0.3s ease-out;
                border: none;
                &:hover {
                    width: 100px;
                }
            }
        }
        .users-shortcuts-heading {
            font-size:18px;
        }
    }
`;

export default ShortCutsWrapper;