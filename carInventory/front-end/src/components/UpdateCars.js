import React from "react";
import { useState } from "react";

const UpdateCars = () => {
	//useState states
	const [newOwners, setNewOwners] = useState("");
	const [currentOwner, setNewCurrentOwner] = useState("");
	// fetches the front-end data from the inputs (which was entered by the user)
	// and sets the current data to the new states
	// all the current owners with the same name will be updated to the new owner value
	const handleAllCars = () => {
		fetch("http://localhost:8080/updatecars", {
			method: "PUT",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				currentOwner: currentOwner,
				newOwners: newOwners,
			}),
		})
			.then((res) => res.json())
			.then((data) => console.log(data));
	};
	return (
		<div>
			<form>
				<label>Enter current owner to update</label>
				<input onChange={(e) => setNewCurrentOwner(e.target.value)}></input>
				<label>Enter car owner to update</label>
				<input onChange={(e) => setNewOwners(e.target.value)}></input>
				<button
					type="submit"
					onClick={handleAllCars}
				>
					Update cars
				</button>
			</form>
		</div>
	);
};

export default UpdateCars;
