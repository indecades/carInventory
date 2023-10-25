import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
	// routes so the user can use buttons to access the webpages easier 
	// file paths is used to access the webpages and routes are being linked to the 
	// file paths
	return (
		<div>
			<Link to={"/add-car"}>
				{" "}
				<button>Add car</button>{" "}
			</Link>
			<Link to={"/update-car"}>
				{" "}
				<button>Update car</button>{" "}
			</Link>
			<Link to={"/update-cars"}>
				{" "}
				<button>Update cars</button>{" "}
			</Link>
			<Link to={"/delete-car"}>
				{" "}
				<button>Delete car</button>{" "}
			</Link>
		</div>
	);
};

export default Nav;
