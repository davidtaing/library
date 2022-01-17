import { endpoint, request, response, body } from "@airtasker/spot";
import { Member, Error } from "../../components/schemas";

@endpoint({
  method: "POST",
  path: "/register",
  tags: ["Register"],
})
class Register {
  @request
  request(@body body: RegisterRequest) {}

  @response({ status: 200 })
  successResponse(@body body: Member) {}

  @response({ status: 400 })
  badRequestResponse(@body body: Error) {}

  @response({ status: 500 })
  internalServerErrorResponse(@body body: Error) {}
}

type RegisterRequest = Member;
