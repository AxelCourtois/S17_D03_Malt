import { SET_NAME } from "./action";

const initialState = {
	firstName: null,
	lastName: null,
	fullName: "Inconnu",
};

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_NAME: {
			const { firstName, lastName } = action.payload;
			return {
				...state,
				firstName: firstName ?? initialState.firstName,
				lastName: lastName ?? initialState.lastName,
				fullName:
					firstName && lastName ? `${firstName} ${lastName}` : "Inconnu",
			};
		}
		default:
			return state;
	}
};

export default userReducer;
