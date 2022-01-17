import { Schema, Date, Types, model } from "mongoose";
import { Checkout } from "../../../../openapi/v1/components/schemas";
import { BookSchema } from "./book";

// convert @airtasker/spot date to string and string to objectId
interface CheckoutDocument extends Omit<Document, "date" | "member"> {
  date: Date;
  member: {
    _id: Types.ObjectId;
    preferredName: string;
  };
}

const CheckoutSchema = new Schema<Checkout>({
  date: Date,
  member: {
    _id: Types.ObjectId,
    preferredName: { type: String },
  },
  books: BookSchema,
});

const CheckoutModel = model("Checkout", CheckoutSchema);

export default CheckoutDocument;
