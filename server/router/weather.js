import express from "express";
import { getWeather, searchByCity } from "../controllers/weatherController.js";

const router = express.Router();

router.get("/", getWeather);
router.get("/:input", searchByCity);

export default router;