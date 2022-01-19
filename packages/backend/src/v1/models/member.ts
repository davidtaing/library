import { Member } from "../../../../openapi/v1/components/schemas";
import { Schema, model } from "mongoose";

export interface MemberDocument extends Member {}

export const MemberSchema = new Schema<MemberDocument>({
  _id: { type: String },
  email: { type: String, required: true },
  password: { type: String, required: true },
  fullName: { type: String, required: true },
  preferredName: { type: String, required: true },
  address: {
    addressLn1: { type: String, required: true },
    addressLn2: { type: String, required: true },
    suburb: { type: String, required: true },
    state: { type: String, required: true },
    postcode: { type: String, required: true },
  },
});

const MemberModel = model("Member", MemberSchema);

export default MemberModel;
