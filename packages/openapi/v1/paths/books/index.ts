import {
  endpoint,
  request,
  response,
  body,
  pathParams,
  queryParams,
  String,
} from "@airtasker/spot";
import {
  Book,
  UpdateBookRequest,
  GetBooksRequestFilters,
  Error,
  AddBookRequest,
} from "../../components/schemas";

@endpoint({
  method: "GET",
  path: "/books",
  tags: ["Books"],
})
class GetBooks {
  @request
  request(@queryParams queryParams: GetBooksRequestFilters) {}

  @response({ status: 200 })
  successResponse(@body body: Book[]) {}

  @response({ status: 400 })
  badRequestResponse(@body body: Error) {}

  @response({ status: 500 })
  internalServerErrorResponse(@body body: Error) {}
}

@endpoint({
  method: "POST",
  path: "/books",
  tags: ["Books"],
})
class AddBook {
  @request
  request(@body body: AddBookRequest) {}

  @response({ status: 200 })
  successResponse(@body body: Book) {}

  @response({ status: 400 })
  badRequestResponse(@body body: Error) {}

  @response({ status: 403 })
  forbiddenResponse(@body body: Error) {}

  @response({ status: 500 })
  internalServerErrorResponse(@body body: Error) {}
}

@endpoint({
  method: "GET",
  path: "/books/:bookId",
  tags: ["Books"],
})
class GetBookById {
  @request
  request(@pathParams pathParams: { bookId: String }) {}

  @response({ status: 200 })
  successResponse(@body body: Book) {}

  @response({ status: 400 })
  badRequestResponse(@body body: Error) {}

  @response({ status: 500 })
  internalServerErrorResponse(@body body: Error) {}
}

@endpoint({
  method: "PATCH",
  path: "/books/:bookId",
  tags: ["Books"],
})
class UpdateBook {
  @request
  request(
    @pathParams pathParams: { bookId: String },
    @body body: UpdateBookRequest
  ) {}

  @response({ status: 200 })
  successResponse(@body body: Book) {}

  @response({ status: 400 })
  badRequestResponse(@body body: Error) {}

  @response({ status: 403 })
  forbiddenResponse(@body body: Error) {}

  @response({ status: 500 })
  internalServerErrorResponse(@body body: Error) {}
}

@endpoint({
  method: "DELETE",
  path: "/books/:bookId",
  tags: ["Books"],
})
class DeleteBook {
  @request
  request(@pathParams pathParams: { bookId: String }) {}

  @response({ status: 200 })
  successResponse(@body body: Book) {}

  @response({ status: 400 })
  badRequestResponse(@body body: Error) {}

  @response({ status: 401 })
  unauthorizedResponse(@body body: Error) {}

  @response({ status: 403 })
  forbiddenResponse(@body body: Error) {}

  @response({ status: 500 })
  internalServerErrorResponse(@body body: Error) {}
}
