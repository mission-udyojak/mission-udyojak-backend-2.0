import mongoose, { Schema, Document } from "mongoose";

export interface ICenter extends Document {
  fullName: string;
  fatherOrSpouseName: string;
  dateOfBirth: string;
  gender: "Male" | "Female" | "Other";
  mobileNumber: string;
  email: string;

  residentialAddress: string;
  city: string;
  state: string;
  pinCode: string;

  education: string;
  occupation: string;
  businessName?: string;
  businessType:
    | "Proprietor"
    | "Partnership"
    | "Company"
    | "Student"
    | "Employee"
    | "Unemployed"
    | "Service"
    | "Freelancer"
    | "Other";
  annualIncome: number;

  reasonToJoin: string;
  skills: string;
}

const centerSchema = new Schema<ICenter>(
  {
    fullName: { type: String, required: false, trim: true },
    fatherOrSpouseName: { type: String, required: false, trim: true },
    dateOfBirth: { type: String, required: false },
    gender: { type: String, enum: ["Male", "Female", "Other"], required: false },
    mobileNumber: { type: String, required: false },
    email: { type: String, required: false, lowercase: true, trim: true },

    residentialAddress: { type: String, required: false },
    city: { type: String, required: false },
    state: { type: String, required: false },
    pinCode: { type: String, required: false },

    education: { type: String, required: false },
    occupation: { type: String, required: false },
    businessName: { type: String },
    businessType: {
      type: String,
      enum: [
        "Proprietor",
        "Partnership",
        "Company",
        "Student",
        "Employee",
        "Unemployed",
        "Service",
        "Freelancer",
        "Other",
      ],
      required: false,
    },
    annualIncome: { type: Number, required: false },

    reasonToJoin: { type: String, required: false },
    skills: { type: String, required: false },
  },
  { timestamps: true },
);

const Center = mongoose.model<ICenter>("Center", centerSchema);

export default Center;