import express from "express";
import cors from "cors";
import weatherRouter from "./router/weather.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json("simple weather app")
});

app.use("/weather", weatherRouter)

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`server is listening to port ${port}`));

/* 
url for the frontend:
https://weather-app-8ukq.onrender.com
 */