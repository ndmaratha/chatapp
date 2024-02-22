const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./Config/db");
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes");
const cors = require("cors");
const { errorHandler, notFound } = require("./middleware/errorMiddleware");
const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());
connectDB();
const PORT = process.env.PORT || 5000;

app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes);
app.use(notFound);
app.use(errorHandler);
app.listen(PORT, () => {
	console.log("server is running on Port" + PORT);
});
