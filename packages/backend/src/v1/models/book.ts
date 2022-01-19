import { model, Schema, Types } from "mongoose";
import { Book } from "../../../../openapi/v1/components/schemas";

// remove @airtasker/spot _id: string field.
export interface BookDocument extends Omit<Book, "_id"> {}

export const BookSchema = new Schema<BookDocument>({
  isbn10: { type: String, required: true, unique: true, index: true },
  isbn13: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
  author: { type: String, required: true },
  publisher: { type: String, required: true },
  category: { type: String, required: true },
  quantityAvailable: { type: Number, required: true },
});

const BookModel = model("Book", BookSchema);

export default BookModel;
