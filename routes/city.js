import express from "express";
import City from "../models/City.js";
import {verifyAdmin} from "../utils/verifyToken.js"
import {createCity, deleteCity, getCities, getCity, getCityHotels, updateCity} from "../controllers/city.js";
const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createCity);

//UPDATE
router.put("/:id", verifyAdmin, updateCity);
//DELETE
router.delete("/:id", verifyAdmin, deleteCity);
//GET

router.get("/find/:id", getCity);
//GET ALL

router.get("/", getCities);

router.get("/hotel/:id", getCityHotels);

export default router;