import React from 'react';
import "boxicons";

const SideBar = (props) => {

	const sidebarClass = props.isOpen ? "sidebar open" : "sidebar";
	return(
		<div className = {sidebarClass}>
			<button className="Buttons sidebarButtonsSpec"
					onClick = {props.onClick2}>
				<box-icon name="detail"></box-icon>
				<span>Article conventionnel</span>
			</button>
			<br/>
			<button className="Buttons sidebarButtonsSpec"
					onClick = {props.onClick2}>
				<box-icon name="phone"></box-icon>
				<span>Crédit de communication</span>
			</button>
			<br/>
			<button className="Buttons sidebarButtonsSpec"
					onClick = {props.onClick2}>
				<box-icon name="sort-alt-2"></box-icon>
				<span>Données mobiles</span>
			</button>
		</div>
		)
};

export default SideBar;