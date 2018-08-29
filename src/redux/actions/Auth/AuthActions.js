import axios from 'axios';
import { history } from '../../../History';
import config from '../../../config/api';

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

export const startLogin = (id_token) => {
	const form_data = { idtoken: id_token };
  	return function(dispatch) {
    	axios({
	    	method: 'post',
	    	url: `${config.base_url}${config.login}`,
	    	data: form_data
		})
    	.then(response => {
				if(response.status === 200) {
					let _responseString = JSON.stringify(response.data);
					sessionStorage.setItem('checkAuth',true);
					sessionStorage.setItem('user',_responseString);
					dispatch(loginSuccess(response.data));
					history.push('/home');
				}
    	})
    	.catch((error) => {
				sessionStorage.clear();
        dispatch(loginFailure());
        history.push('/');	
    	})
  	}
};