export const loginRequest = () => ({
  type: 'LOGIN_REQUEST'
});

export const loginSuccess = (data) => ({
  type: 'LOGIN_SUCCESS',
  data
});

export const loginFailure = () => ({
  type: 'LOGIN_FAILURE'
});

export const logout = () => ({
  type: 'LOGOUT'
});