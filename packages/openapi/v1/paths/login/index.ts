import { endpoint, request, response, body } from "@airtasker/spot";
import { LoginRequest, Member, Error } from "../../components/schemas";

@endpoint({
  method: "POST",
  path: "/login",
  tags: ["Login"],
})
class Login {
  @request
  request(@body body: LoginRequest) {}

  @response({ status: 200 })
  successResponse(@body body: Member) {}

  @response({ status: 401 })
  unauthorizedResponse(@body body: Error) {}

  @response({ status: 500 })
  internalServerErrorResponse(@body body: Error) {}
}
