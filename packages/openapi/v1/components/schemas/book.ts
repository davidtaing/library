import { String, Number } from "@airtasker/spot";

export interface Book {
  isbn10: String;
  isbn13: String;
  title: String;
  subtitle: String;
  author: String;
  publisher: String;
  category: String;
  quantityAvailable: Number;
}

// @airtasker/spot does not support Partial<T>
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
