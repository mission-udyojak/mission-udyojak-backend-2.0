import Vendor, { IVendor } from "../models/Vendor";

export const createVendor = async (data: Partial<IVendor>) => {
  const vendor = new Vendor(data);
  return await vendor.save();
};