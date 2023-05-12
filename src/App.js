import React from "react";
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";

const App = () => {
	return (
		//Définition des routes au plus haut dans l'app - 
		//path = chemin de l'url - * = chemin non connu ou déclaré : peut renvoyer à Home ou 404
		//element = composant appelé
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} ></Route>
				<Route path="/about" element={<About />} ></Route>
				<Route path="*" element={<Home />} ></Route>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
