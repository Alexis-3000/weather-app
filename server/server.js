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

app.listen(process.env.PORT, () => console.log(`server is listening to port ${process.env.PORT}`));