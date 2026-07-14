import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

import membershipRoutes from "./routes/membership.routes";

const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (_, res) => {
  res.json({
    success: true,
    message: "Mission Foundation API Running 🚀",
  });
});

app.use("/api/memberships", membershipRoutes);

export default app;