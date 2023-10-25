import React from "react";
import { useState } from "react";

const DeleteCar = () => {
	//useState states
	const [removeCar, setRemoveCar] = useState("");
	// fetches the registration in the input from deletecar and removes the
	// specified car and then updates the cars list
	const handleDelete = () => {
		fetch("http://localhost:8080/deletecar", {
			method: "DELETE",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ registration: removeCar }),
		})
			.then((res) => res.json())
			.then((data) => console.log(data));
	};
	return (
		<div>
			<form>
				<label>Enter registration of car to delete</label>
				<input
					onChange={(e) => setRemoveCar(e.target.value)}
					value={removeCar}
				></input>
				<button
					type="submit"
					onClick={handleDelete}
				>
					delete
				</button>
			</form>
		</div>
	);
};

export default DeleteCar;
