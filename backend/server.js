import dotenv from "dotenv";
import express from "express";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
    res.send("Welcome");
});


app.get("/api/greet", (req, res) => {
    

    const { name } = req.query;
    
    
    if (!name || name.trim() === "") {
        return res.status(400).json({ error: "Name is required." });
    }

    res.json({ message: `Hello, ${name}! Welcome to Younglabs.` });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});