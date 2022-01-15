import {
  endpoint,
  request,
  response,
  body,
  pathParams,
  String,
} from "@airtasker/spot";
import { Book, PartialBook, Error } from "../../components/schemas";

@endpoint({
  method: "GET",
  path: "/books",
})
class GetBooks {
  @request
  request(@body body: GetBooksRequest) {}

  @response({ status: 200 })
  successResponse(@body body: Book[]) {}
  @response({ status: 400 })
  BadRequestResponse(@body body: Error) {}
  @response({ status: 500 })
  InternalServerErrorResponse(@body body: Error) {}
}

@endpoint({
  method: "POST",
  path: "/books",
})
class AddBook {
  @request
  request(@body body: AddBookRequest) {}

  @response({ status: 200 })
  successResponse(@body body: Book) {}
  @response({ status: 400 })
  BadRequestResponse(@body body: Error) {}
  @response({ status: 403 })
  ForbiddenResponse(@body body: Error) {}
  @response({ status: 500 })
  InternalServerErrorResponse(@body body: Error) {}
}

@endpoint({
  method: "PATCH",
  path: "/books/:isbn10",
})
class UpdateBook {
  @request
  request(
    @pathParams pathParams: { isbn10: String },
    @body body: UpdateBookRequest
  ) {}

  @response({ status: 200 })
  successResponse(@body body: Book) {}
  @response({ status: 400 })
  BadRequestResponse(@body body: Error) {}
  @response({ status: 403 })
  ForbiddenResponse(@body body: Error) {}
  @response({ status: 500 })
  InternalServerErrorResponse(@body body: Error) {}
}

@endpoint({
  method: "DELETE",
  path: "/books/:isbn10",
})
class DeleteBook {
  @request
  request(@pathParams pathParams: { isbn10: String }) {}

  @response({ status: 200 })
  successResponse(@body body: Book) {}
  @response({ status: 400 })
  BadRequestResponse(@body body: Error) {}
  @response({ status: 403 })
  ForbiddenResponse(@body body: Error) {}
  @response({ status: 500 })
  InternalServerErrorResponse(@body body: Error) {}
}

type GetBooksRequest = PartialBook;
type AddBookRequest = Book;
type UpdateBookRequest = PartialBook;
