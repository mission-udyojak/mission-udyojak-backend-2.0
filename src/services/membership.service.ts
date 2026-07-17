import Membership, { IMembership } from "../models/Membership";

// export const createMembership = async (
//   membershipData: Partial<IMembership>
// ) => {
//   const membership = await Membership.create(membershipData);

//   return membership;
// };

interface MembershipFormInput {
  fullName?: string;
  fatherSpouseName?: string;
  dob?:  string;
  gender?: string;
  mobileNumber?: string;
  email?: string;
  residentialAddress?: string;
  city?: string;
  state?: string;
  pinCode?: string;
  education?: string;
  occupation?: string;
  businessName?: string;
  professionType?: string;
  annualIncome?: number;
  membershipType?: string;
  reasonToJoin?: string;
  skillsInterests?: string;
  referenceName?: string;
  referenceContact?: string;
  amountPaid?: number;
  paymentMode?: string;
  transactionId?: string;
  paymentDate?:  string;
  agreedToDeclaration?: boolean;
  signature?: string;
  declarationDate?:  string;
}

export const createMembership = async (formData: MembershipFormInput) => {
  const membershipData: Partial<IMembership> = {
    fullName: formData.fullName,
    fatherOrSpouseName: formData.fatherSpouseName,
    dateOfBirth: formData.dob, // was: formData.dob ? new Date(formData.dob) : undefined
    gender: formData.gender as IMembership["gender"],
    mobileNumber: formData.mobileNumber,
    email: formData.email,
    residentialAddress: formData.residentialAddress,
    city: formData.city,
    state: formData.state,
    pinCode: formData.pinCode,
    education: formData.education,
    occupation: formData.occupation,
    businessName: formData.businessName,
    businessType: formData.professionType as IMembership["businessType"],
    annualIncome: formData.annualIncome,
    membershipType: formData.membershipType as IMembership["membershipType"],
    reasonToJoin: formData.reasonToJoin,
    skills: formData.skillsInterests,
    referenceName: formData.referenceName,
    referenceContact: formData.referenceContact,
    amountPaid: formData.amountPaid,
    paymentMode: formData.paymentMode as IMembership["paymentMode"],
    transactionId: formData.transactionId,
    paymentDate: formData.paymentDate, // was: formData.paymentDate ? new Date(...) : undefined
    declarationAccepted: formData.agreedToDeclaration,
    signature: formData.signature,
    declarationDate: formData.declarationDate, // was: formData.declarationDate ? new Date(...) : undefined
  };

  const membership = await Membership.create(membershipData);
  return membership;
};