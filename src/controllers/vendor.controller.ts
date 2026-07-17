import { Request, Response } from "express";
import * as vendorService from "../services/vendor.service";

export const createVendor = async (req: Request, res: Response): Promise<void> => {
  try {
    const vendor = await vendorService.createVendor(req.body);

    res.status(201).json({
      success: true,
      message: "Vendor application submitted successfully.",
      data: vendor,
    });
  } catch (error) {
    console.error("Create Vendor Error:", error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};