import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Profile from "./components/Profile/Profile";
import styles from "./App.module.css";

const App = () => (
	<BrowserRouter>
		<Header />
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/profile" element={<Profile />} />
		</Routes>
	</BrowserRouter>
);

export default App;
