import express from "express";
import cors from "cors";

const app = express();

app.use(express.json())

app.use(
  cors({
    origin: "http://localhost:5174",
    credentials: true,
  }),
);

app.get("/api", (req, res) => {
  res.send("Hello World and good day!");
});




const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


