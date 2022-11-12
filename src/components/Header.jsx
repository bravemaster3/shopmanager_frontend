import React from "react";
/*import toggleIconImage from "../images/toggle.png"*/

const Header = (props) => {
	return(
	<header>
{/*		<button style={{backgroundColor: "transparent", border: "none"}}
				onClick={props.onClick}>
			<img alt="toggle" id="toggleButton" src= {toggleIconImage} />
		</button>*/}

		<span className="headerButtonsContainer">
			<button className="Buttons headerButtonsSpec"
					onClick={props.onClick1}>
						Nouveau
			</button>
			<button className="Buttons headerButtonsSpec"
					onClick={props.onClick1}>
						Approvision
			</button>
			<button className="Buttons headerButtonsSpec"
					onClick={props.onClick1}>
						Vente
			</button>
		</span>
	</header>
	);
};

export default Header;