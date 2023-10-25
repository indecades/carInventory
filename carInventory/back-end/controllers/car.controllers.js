const Car = require("../models/car.model.js");
//adding new cars to database
exports.create = async function (req, res) {
	try {
		const carModel = new Car({
			model: req.body.model,
			registration: req.body.registration,
			owner: req.body.owner,
			make: req.body.make,
		});

		const savedCars = await carModel.save();

		res.send(savedCars);
		console.log("successfully added a car to the DB!");
	} catch (error) {
		console.error(error);
	}
};
//finding cars list
exports.findCars = async function (req, res) {
	try {
		const cars = await Car.find();
		res.send(cars);
	} catch (err) {
		console.log(err);
		res
			.status(500)
			.send({ message: "Some error occurred while finding the car." });
	}
};
//deletes specified car from database
exports.deleteCar = async function (req, res) {
	try {
		const deleteCar = await Car.findOneAndDelete({
			registration: req.body.registration,
		});
		res.send(deleteCar);
	} catch (err) {
		console.log(err);
		res
			.status(500)
			.send({ message: "Some error occurred while deleting the car." });
	}
};
//updates single car in database using the cras registration
exports.updateCar = async function (req, res) {
	try {
		const updateCar = await Car.findOneAndUpdate(
			{ registration: req.body.registration },
			{ model: req.body.model, make: req.body.make, owner: req.body.owner },
			{ new: true }
		);
		res.send(updateCar);
	} catch (err) {
		console.log(err);
		res
			.status(500)
			.send({ message: "Some error occurred while updating the car." });
	}
};
//updates all cars in database which has the same owner name (updates owner name)
exports.updateCars = async function (req, res) {
	try {
		const { currentOwner, newOwners } = req.body;
		await Car.updateMany(
			{ owner: currentOwner },
			{ $set: { owner: newOwners } }
		);
		res.send("updated!");
	} catch (err) {
		console.log(err);
		res
			.status(500)
			.send({ message: "Some error occurred while updating all the cars." });
	}
};
//finds cars older than 5 years and displays it when the button is clicked in the front-end
exports.olderCars = async function (req, res) {
	try {
		const olderCar = await Car.find({ model: { $lt: 2018 } });
		res.send(olderCar);
	} catch (err) {
		console.log(err);
		res
			.status(500)
			.send({ message: "Some error occurred while updating all the cars." });
	}
};
