import React from "react";
import { useState } from "react";

const AddCar = () => {
	//useState states
	const [make, setMake] = useState("");
	const [registration, setRegistration] = useState("");
	const [model, setModel] = useState("");
	const [owner, setOwner] = useState("");
	//function fetches the data entered in the inputs and uses the values to add a new
	// car to the database using usestates to set the new values
	// on submitting the form the function will run
	const handleSubmit = () => {
		fetch("http://localhost:8080/addcar", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				// adds new car by using usestates
				make: make,
				registration: registration,
				model: model,
				owner: owner,
			}),
		}).then((res) => res.json());
	};
	// targets value which was entered into input then uses the values to add new car
	// e.target.value is being used to target the value entered
	const handleMake = (e) => {
		setMake(e.target.value);
	};
	const handleRegistration = (e) => {
		setRegistration(e.target.value);
	};
	const handleOwner = (e) => {
		setOwner(e.target.value);
	};
	const handleModel = (e) => {
		setModel(e.target.value);
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					onChange={handleMake}
					placeholder="make"
				></input>
				<input
					onChange={handleRegistration}
					placeholder="registration"
				></input>
				<input
					onChange={handleModel}
					placeholder="model"
				></input>
				<input
					onChange={handleOwner}
					placeholder="owner"
				></input>
				<button type="submit">Submit</button>
			</form>
		</div>
	);
};

export default AddCar;
