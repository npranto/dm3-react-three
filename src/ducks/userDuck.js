const LOGIN = "user/LOGIN";
const LOGOUT = "user/LOGOUT";

const initialState = {
	username: "",
	loggedIn: false
}

export default function reducer(state = initialState, action){
	switch(action.type){
		case LOGIN: 
			return{
				username: action.username, 
				loggedIn: true
			};
		case LOGOUT: 
			return initialState;
	}
	return state;
}

export function login(username){
	return {
		type: LOGIN, username
	};
}

export function logout(){
	return {
		type: LOGOUT
	};
}