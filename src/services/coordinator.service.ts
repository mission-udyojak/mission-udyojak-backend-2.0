import Coordinator, { ICoordinator } from "../models/Coordinator";

export const createCoordinator = async (data: Partial<ICoordinator>) => {
  const coordinator = new Coordinator(data);
  return await coordinator.save();
};