import "./App.css";
import Nav from "./components/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DeleteCar from "./components/DeleteCar";
import UpdateCar from "./components/UpdateCar";
import UpdateCars from "./components/UpdateCars";
import AddCar from "./components/AddCar";
import CarsTable from "./components/CarsTable";

function App() {
	// Routes to be able to be able to access different webpages easier
  // the user can use buttons in the front end to access these webpages 
	return (
		<div className="App">
			<BrowserRouter>
				<Nav />
				<Routes>
					<Route
						path="/add-car"
						element={<AddCar />}
					></Route>
					<Route
						path="/update-car"
						element={<UpdateCar />}
					></Route>
					<Route
						path="/update-cars"
						element={<UpdateCars />}
					></Route>
					<Route
						path="/delete-car"
						element={<DeleteCar />}
					></Route>
				</Routes>
			</BrowserRouter>
			<CarsTable />
		</div>
	);
}

export default App;
