import React from "react";
import { useState } from "react";

const UpdateCar = () => {
	//useState states
	const [newModel, setNewModel] = useState("");
	const [newRegistration, setNewRegistration] = useState("");
	const [newMake, setNewMake] = useState("");
	const [newOwner, setNewOwner] = useState("");
	// fetches the updated data from the front-end and uses a put request
	//to update the current car and sets the new car values as entered in the input
	const handleUpdate = () => {
		fetch("http://localhost:8080/updatecar", {
			method: "PUT",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				model: newModel,
				registration: newRegistration,
				make: newMake,
				owner: newOwner,
			}),
		})
			.then((res) => res.json())
			.then((data) => console.log(data));
	};
	return (
		<div>
			<form>
				<h2>Update Car</h2>
				<label>Enter car model to update</label>
				<input onChange={(e) => setNewModel(e.target.value)}></input>
				<label>Enter car registration to update</label>
				<input onChange={(e) => setNewRegistration(e.target.value)}></input>
				<label>Enter car make to update</label>
				<input onChange={(e) => setNewMake(e.target.value)}></input>
				<label>Enter car owner to update</label>
				<input onChange={(e) => setNewOwner(e.target.value)}></input>
				<button
					type="submit"
					onClick={handleUpdate}
				>
					Update car
				</button>
			</form>
		</div>
	);
};

export default UpdateCar;
