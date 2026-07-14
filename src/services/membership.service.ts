import Membership, { IMembership } from "../models/Membership";

export const createMembership = async (
  membershipData: Partial<IMembership>
) => {
  const membership = await Membership.create(membershipData);

  return membership;
};