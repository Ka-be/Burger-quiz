import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Quiz = () => {
	const navigate = useNavigate();
	useEffect(() => {
		// Vérifie si la page "Quiz" est chargée directement sans passer par le bouton
    //NE FONCTIONNE PAS -  A DEBUGGER
		// Si c'est le cas, redirige vers la page d'accueil ou une autre page appropriée
		navigate("/", { replace: true }); // Remplace l'historique pour éviter de revenir à la page "Quiz"
	}, [navigate]);

	return (
		<div>
			<h2>Quiz</h2>
		</div>
	);
};

export default Quiz;





