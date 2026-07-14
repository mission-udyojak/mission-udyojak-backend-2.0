import { Request, Response } from "express";
import * as membershipService from "../services/membership.service";

export const createMembership = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const membership = await membershipService.createMembership(req.body);

    res.status(201).json({
      success: true,
      message: "Membership application submitted successfully.",
      data: membership,
    });
  } catch (error) {
    console.error("Create Membership Error:", error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};