import React from "react";
import { useState, useEffect } from "react";

const CarsTable = () => {
	const [cars, setCars] = useState([]);
	//fetches data from the database to display on the front-end
	useEffect(() => {
		async function fetchData() {
			try {
				const URL = "/cars"; // backend route
				const res = await fetch(URL);
				const data = await res.json();
				setCars(data);
			} catch (error) {
				console.log(error);
			}
		}
		fetchData();
	}, []);
	console.log(cars);
	//finds cars older than 5 years by fetching results from the backend
	const handleOlderCars = async () => {
		await fetch("http://localhost:8080/oldercars")
			.then((res) => res.json())
			.then((cars) => setCars(cars));
	};
	// maps through cars which was fetched from the back-end to display in the front-end
	let carsList = cars.map((car) => {
		return (
			<tr key={car.registration}>
				<td>{car.make}</td>
				<td>{car.registration}</td>
				<td>{car.model}</td>
				<td>{car.owner}</td>
			</tr>
		);
	});

	return (
		<div>
			<table>
				<thead>
					<tr>
						<th>Make</th>
						<th>Registration</th>
						<th>Model</th>
						<th>Owner</th>
					</tr>
				</thead>
				<tbody>{carsList}</tbody>
			</table>
			<button onClick={handleOlderCars}>Show cars older than 5 years</button>
		</div>
	);
};

export default CarsTable;
