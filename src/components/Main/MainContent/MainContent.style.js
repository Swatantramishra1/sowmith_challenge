import Styled from 'styled-components';

const MainContentWrapper = Styled.div`
  
  .main-content-heading {
    margin-left: 10px;
  }

  .ant-row {
    
    .ant-card {
      box-shadow: 0 0 5px 1px #ccc;
      margin: 5px 10px !important;
    }

    .ant-col-8:nth-child(1) .ant-card {
      border-radius: 10px 0 0 10px;
    }

    .ant-col-8:last-child .ant-card {
      border-radius: 0px 10px 10px 0px;
    }

  }
`;

export default MainContentWrapper;