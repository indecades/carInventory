//imports
const express = require("express");
let bodyParser = require("body-parser");
const dotenv = require("dotenv")
const fs = require("fs");
//fs = file system
const app = express();
const port = process.env.PORT || 8080;
const mongoose = require("mongoose");
dotenv.config()
// ! Added cors
const cors = require("cors");
//allows to parse json data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
// uses cors to prevent errors from occuring
app.use(cors());

const car = require("./controllers/car.controllers");
// methods being used in front end and backend
app.get("/cars", car.findCars);
app.post("/addcar", car.create);
app.delete("/deletecar", car.deleteCar);
app.put("/updatecar", car.updateCar);
app.put("/updatecars", car.updateCars);
app.get("/oldercars", car.olderCars);

mongoose.connect(process.env.MONGO).then(()=>{
    console.log('Connected to MongoDB!')
}).catch((err)=> {
    console.log(err)
})

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error"
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    })
})

// express is being run in port 8080
app.listen(8080, function () {
	console.log("Web projects app listening on port 8080!");
});
