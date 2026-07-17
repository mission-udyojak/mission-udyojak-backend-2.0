import { Request, Response } from "express";
import * as trainerService from "../services/trainer.service";

export const createTrainer = async (req: Request, res: Response): Promise<void> => {
  try {
    const trainer = await trainerService.createTrainer(req.body);

    res.status(201).json({
      success: true,
      message: "Trainer application submitted successfully.",
      data: trainer,
    });
  } catch (error) {
    console.error("Create Trainer Error:", error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};