import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import About from "./pages/About";
import Logo from "./components/Logo";

const App = () => {
	return (
		<div>
			<Logo></Logo>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Welcome />}></Route>
					<Route path="/about" element={<About />}></Route>
					<Route path="*" element={<Welcome />}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;
