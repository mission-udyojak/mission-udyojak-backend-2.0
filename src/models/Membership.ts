import mongoose, { Schema, Document } from "mongoose";

export interface IMembership extends Document {
  // Personal Details
  fullName: string;
  fatherOrSpouseName: string;
  dateOfBirth: string;
  gender: "Male" | "Female" | "Other";
  mobileNumber: string;
  email: string;

  // Address Details
  residentialAddress: string;
  city: string;
  state: string;
  pinCode: string;

  // Professional Details
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

  // Membership
  membershipType: "Basic Member" | "Premium Member" | "Lifetime Member";

  // Additional Details
  reasonToJoin: string;
  skills: string;

  // Reference
  referenceName?: string;
  referenceContact?: string;

  // Membership Fee
  amountPaid: number;
  paymentMode: "Cash" | "UPI" | "Bank Transfer";
  transactionId?: string;
  paymentDate: string;

  // Declaration
  declarationAccepted: boolean;
  signature: string;
  declarationDate: string;

  // Office Use Only
  membershipId?: string;
  approvedBy?: string;
  approvalDate?: Date;
}

const membershipSchema = new Schema<IMembership>(
  {
    // Personal Details
    fullName: {
      type: String,
      required: false,
      trim: true,
    },
    fatherOrSpouseName: {
      type: String,
      required: false,
      trim: true,
    },
    dateOfBirth: {
      type: String,
      required: false,
    },
    gender: {
      type: String,
      enum: ["Male", "Female", "Other"],
      required: false,
    },
    mobileNumber: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: false,
      lowercase: true,
      trim: true,
    },

    // Address Details
    residentialAddress: {
      type: String,
      required: false,
    },
    city: {
      type: String,
      required: false,
    },
    state: {
      type: String,
      required: false,
    },
    pinCode: {
      type: String,
      required: false,
    },

    // Professional Details
    education: {
      type: String,
      required: false,
    },
    occupation: {
      type: String,
      required: false,
    },
    businessName: {
      type: String,
    },
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
    annualIncome: {
      type: Number,
      required: false,
    },

    // Membership
    membershipType: {
      type: String,
      enum: ["Basic Member", "Premium Member", "Lifetime Member"],
      required: false,
    },

    // Additional Details
    reasonToJoin: {
      type: String,
      required: false,
    },
    skills: {
      type: String,
      required: false,
    },

    // Reference
    referenceName: {
      type: String,
    },
    referenceContact: {
      type: String,
    },

    // Membership Fee
    amountPaid: {
      type: Number,
      required: false,
    },
    paymentMode: {
      type: String,
      enum: ["Cash", "UPI", "Bank Transfer"],
      required: false,
    },
    transactionId: {
      type: String,
    },
    paymentDate: {
      type: String,
      required: false,
    },

    // Declaration
    declarationAccepted: {
      type: Boolean,
      required: false,
    },
    signature: {
      type: String,
      required: false,
    },
    declarationDate: {
      type: String,
      required: false,
    },

    // Office Use Only
    membershipId: {
      type: String,
    },
    approvedBy: {
      type: String,
    },
    approvalDate: {
      type: Date,
    },
  },
  {
    timestamps: true,
  },
);

const Membership = mongoose.model<IMembership>("Membership", membershipSchema);

export default Membership;
