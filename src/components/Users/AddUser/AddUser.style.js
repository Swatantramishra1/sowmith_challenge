import  styled from 'styled-components';

const AddUserWrapper = styled.div`
  width: 100%;
  height: 100%;
  .add-user-form {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .form-group {
      width: 50%;
      margin: 10px 0;
      max-width: 768px;

      .form-input, .form-select {
        width: 100%;
        background: transparent;
        border: none;
        border-bottom: 1px solid #ccc;
        padding: 5px 0;
        outline: none;
        transition: all 0.3s ease-out;
        &:hover, &:focus, &:active {
          border-bottom: 1px solid #2979ff;
        }
      }
      
      .error-message {
        opacity: 0;
        margin: 0;
      }
      
    }

    .submit-add-user-form {
      background: transparent;
      border: 1px solid #ccc;
      padding: 5px 10px;
      outline: none;
      border-radius: 5px;
      box-shadow: 0 0 3px 1px transparent;
      transition: all 0.3s ease-out;
      &:hover, &:focus, &:active {
        border: 1px solid #2979ff;
        box-shadow: 0 0 3px 1px #ccc;
      }
    }
  }
`;

export default AddUserWrapper;