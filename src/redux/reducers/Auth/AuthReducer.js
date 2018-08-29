export const AUTHREDUCER = (state = { isAuth: false, user: {} }, action) => {
  switch(action.type) {
    case 'LOGIN_REQUEST':
      return {
        isAuth: 'in-process'
      };
    case 'LOGIN_SUCCESS':
      return {
        isAuth: true,
        user: action.data
      };
    case 'LOGIN_FAILURE':
      return {
        isAuth: false,
        user: {}
      };
    case 'LOGOUT':
      return {
        isAuth: false,
        user: {}
      };
    default:
      return state;
  }
};