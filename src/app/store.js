import { combineReducers, createStore } from "redux";
import userReducer from "../components/Profile/store/user.reducer";
// import skillsReducer from "../components/Profile/skillsReducer";

const rootReducer = combineReducers({
	user: userReducer,
	// skills: skillsReducer,
});

const store = createStore(rootReducer);

export default store;
