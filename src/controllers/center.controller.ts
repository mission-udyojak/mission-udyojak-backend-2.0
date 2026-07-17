import { Request, Response } from "express";
import * as centerService from "../services/center.service";

export const createCenter = async (req: Request, res: Response): Promise<void> => {
  try {
    const center = await centerService.createCenter(req.body);

    res.status(201).json({
      success: true,
      message: "Center application submitted successfully.",
      data: center,
    });
  } catch (error) {
    console.error("Create Center Error:", error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};