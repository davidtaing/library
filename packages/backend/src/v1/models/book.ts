import { model, Schema, Types } from "mongoose";
import { Book } from "../../../../openapi/v1/components/schemas";

export const BookSchema = new Schema<Book>({
  isbn10: { type: String, required: true, unique: true, index: true },
  isbn13: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
  author: { type: String, required: true },
  publisher: { type: String, required: true },
  category: { type: String, required: true },
  quantityAvailable: { type: Number, required: true },
  borrowers: [{ type: Types.ObjectId, ref: "Member" }],
});

const BookModel = model("Book", BookSchema);

export default BookModel;
