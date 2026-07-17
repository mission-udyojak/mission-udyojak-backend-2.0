import Center, { ICenter } from "../models/Center";

export const createCenter = async (data: Partial<ICenter>) => {
  const center = new Center(data);
  return await center.save();
};