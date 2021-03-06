import { endpoint, request, response, body, String } from "@airtasker/spot";
import { Book, Error, CheckoutRequest } from "../../components/schemas";

@endpoint({
  method: "POST",
  path: "/checkouts",
  tags: ["Checkout"],
})
class Checkout {
  @request
  request(@body body: CheckoutRequest) {}

  @response({ status: 200 })
  successResponse(@body body: Book[]) {}

  @response({ status: 400 })
  badRequestResponse(@body body: Error) {}

  @response({ status: 401 })
  unauthorizedResponse(@body body: Error) {}

  @response({ status: 500 })
  internalServerErrorResponse(@body body: Error) {}
}
