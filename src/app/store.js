import { combineReducers, createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "../components/Profile/store/user.reducer";
import skillsReducer from "../components/Profile/store/skills.reducer";

const rootReducer = combineReducers({
	user: userReducer,
	skills: skillsReducer,
});

const persistConfig = {
	key: "root",
	storage,
	whitelist: ["user", "skills"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
