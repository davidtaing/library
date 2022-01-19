import { String, Number } from "@airtasker/spot";

export interface Book {
  _id: String;
  isbn10: String;
  isbn13: String;
  title: String;
  subtitle: String;
  author: String;
  publisher: String;
  category: String;
  quantityAvailable: Number;
}

// @airtasker/spot does not support Partial<T> & Omit<T>
export interface AddBookRequest {
  isbn10: String;
  isbn13: String;
  title: String;
  subtitle: String;
  author: String;
  publisher: String;
  category: String;
  quantityAvailable: Number;
}

export interface PartialBook {
  isbn10?: String;
  isbn13?: String;
  title?: String;
  subtitle?: String;
  author?: String;
  publisher?: String;
  category?: String;
  quantityAvailable?: Number;
}

export interface BookFilterOpts {
  isbn10?: String;
  isbn13?: String;
  title?: String;
  subtitle?: String;
  author?: String;
  publisher?: String;
  category?: String;
}
