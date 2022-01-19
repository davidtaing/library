import { Schema, Date, Types, model } from "mongoose";
import { Checkout } from "../../../../openapi/v1/components/schemas";
import { MemberDocument } from "./member";
import { BookDocument } from "./book";

// convert @airtasker/spot types to mongoose schema types and remove _id
interface CheckoutDocument
  extends Omit<Checkout, "_id" | "date" | "dueDate" | "member" | "books"> {
  date: Date;
  dueDate: Date;
  member: MemberDocument;
  books: BookDocument[];
}

const CheckoutSchema = new Schema<CheckoutDocument>({
  date: Date,
  dueDate: Date,
  member: {
    type: Schema.Types.String,
    ref: "Member",
  },
  books: [{ type: Schema.Types.ObjectId, ref: "Book" }],
});

const CheckoutModel = model("Checkout", CheckoutSchema);

export default CheckoutModel;
