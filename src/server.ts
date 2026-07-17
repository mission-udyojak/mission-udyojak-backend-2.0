import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import connectDB from "../src/config/db";
import membershipRoutes from "../src/routes/membership.routes";
import centerRoutes from "./routes/center.routes";
import coordinatorRoutes from "./routes/coordinator.routes";
import trainerRoutes from "./routes/trainer.routes";
import vendorRoutes from "./routes/vendor.routes";


dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", membershipRoutes);
app.use("/api", centerRoutes);
app.use("/api", coordinatorRoutes);
app.use("/api", trainerRoutes);
app.use("/api", vendorRoutes);

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

startServer();
