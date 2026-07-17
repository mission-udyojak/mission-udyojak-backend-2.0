import { Request, Response } from "express";
import * as coordinatorService from "../services/coordinator.service";

export const createCoordinator = async (req: Request, res: Response): Promise<void> => {
  try {
    const coordinator = await coordinatorService.createCoordinator(req.body);

    res.status(201).json({
      success: true,
      message: "Coordinator application submitted successfully.",
      data: coordinator,
    });
  } catch (error) {
    console.error("Create Coordinator Error:", error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};