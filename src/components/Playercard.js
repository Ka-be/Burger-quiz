import { useEffect } from "react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Playercard = () => {
	const [borderColor, setBorderColor] = useState(""); // État pour stocker la couleur de la bordure
	let [playerName, setPlayerName] = useState("");

	const mayoClick = () => {
		setBorderColor("mayo"); // Met à jour l'état avec la couleur "mayo"
	};

	const ketchupClick = () => {
		setBorderColor("ketchup");
	};

	const navigate = useNavigate();

	const runQuiz = () => {
		navigate("/quiz");
	};

	useEffect(() => {
		const playerNameInput = document.querySelector("#playername");

		playerNameInput.addEventListener("blur", () => {
			setPlayerName(playerNameInput.value);
		});
	});

	return (
		<div className={`playercard ${borderColor}`}>
			<div className="playercard-name">
				<label htmlFor="playername">
					Donnes ton prénom (michel_boujenah_du_54 ça marche aussi).
				</label>
				<input type="text" name="playername" id="playername" />
			</div>
			<div className="playercard-team">
				<input
					type="button"
					value="Team Mayo"
					id="mayo-btn"
					onClick={mayoClick}
				/>
				<input
					type="button"
					value="Team Ketchup"
					id="ketchup-btn"
					onClick={ketchupClick}
				/>
			</div>
			<button type="button" id="run-btn" onClick={runQuiz}>
				C'est parti {playerName} !
			</button>
		</div>
	);
};

export default Playercard;

