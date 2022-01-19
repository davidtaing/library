import { String, Date } from "@airtasker/spot";
import { Book } from "./";

export interface Checkout {
  date: Date;
  dueDate: Date;
  member: {
    _id: String;
    preferredName: String;
  };
  books: Book[];
}
