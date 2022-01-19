import { String } from "@airtasker/spot";

export interface Member {
  _id: String;
  email: String;
  password: String;
  fullName: String;
  preferredName: String;
  address: {
    addressLn1: String;
    addressLn2: String;
    suburb: String;
    state: String;
    postcode: String;
  };
}

export interface PostMember {
  email: String;
  password: String;
  fullName: String;
  preferredName: String;
  address: {
    addressLn1: String;
    addressLn2: String;
    suburb: String;
    state: String;
    postcode: String;
  };
}

// @airtasker/spot does not support Partial<T> or Omit<T>
export interface PartialMember {
  email?: String;
  password?: String;
  fullName?: String;
  preferredName?: String;
  address?: {
    addressLn1?: String;
    addressLn2?: String;
    suburb?: String;
    state?: String;
    postcode?: String;
  };
}
