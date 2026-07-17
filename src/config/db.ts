import dns from "dns";
import mongoose from "mongoose";

dns.setServers(["1.1.1.1", "8.8.8.8"]);

const connectDB = async (): Promise<void> => {
  try {
    const mongoUri = process.env.MONGO_URI;

    if (!mongoUri) {
      throw new Error("MONGO_URI is not defined in environment variables");
    }

    await mongoose.connect(mongoUri);

    console.log("MongoDB connected successfully");
  } catch (error: any) {
    console.error("MongoDB connection error:", error.message);
    process.exit(1); // stop the app if DB connection fails
  }
};

// Optional: log runtime connection events (disconnects, errors after initial connect)
mongoose.connection.on("disconnected", () => {
  console.warn("MongoDB disconnected");
});

mongoose.connection.on("error", (err) => {
  console.error("MongoDB error:", err);
});

export default connectDB;

