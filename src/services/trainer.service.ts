import Trainer, { ITrainer } from "../models/Trainer";

export const createTrainer = async (data: Partial<ITrainer>) => {
  const trainer = new Trainer(data);
  return await trainer.save();
};