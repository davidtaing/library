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
  Member,
  CreateMemberRequest,
  UpdateMemberRequest,
  GetMembersRequestFilters,
  Error,
} from "../../components/schemas";

@endpoint({
  method: "GET",
  path: "/members",
  tags: ["Members"],
})
class GetMembers {
  @request
  request(@queryParams queryParams: GetMembersRequestFilters) {}

  @response({ status: 200 })
  successResponse(@body body: Member[]) {}

  @response({ status: 400 })
  BadRequestResponse(@body body: Error) {}

  @response({ status: 500 })
  InternalServerErrorResponse(@body body: Error) {}
}

@endpoint({
  method: "POST",
  path: "/members",
  tags: ["Members"],
})
class CreateMember {
  @request
  request(@body body: CreateMemberRequest) {}

  @response({ status: 200 })
  successResponse(@body body: Member) {}

  @response({ status: 400 })
  BadRequestResponse(@body body: Error) {}

  @response({ status: 500 })
  InternalServerErrorResponse(@body body: Error) {}
}

@endpoint({
  method: "GET",
  path: "/members/:memberId",
  tags: ["Members"],
})
class GetMemberById {
  @request
  request(@pathParams pathParams: { memberId: String }) {}

  @response({ status: 200 })
  successResponse(@body body: Member) {}

  @response({ status: 400 })
  badRequestResponse(@body body: Error) {}

  @response({ status: 500 })
  internalServerErrorResponse(@body body: Error) {}
}

@endpoint({
  method: "PATCH",
  path: "/members/:memberId",
  tags: ["Members"],
})
class UpdateMember {
  @request
  request(
    @pathParams pathParams: { memberId: String },
    @body body: UpdateMemberRequest
  ) {}

  @response({ status: 200 })
  successResponse(@body body: Member) {}

  @response({ status: 400 })
  badRequestResponse(@body body: Error) {}

  @response({ status: 403 })
  forbiddenResponse(@body body: Error) {}

  @response({ status: 500 })
  internalServerErrorResponse(@body body: Error) {}
}

@endpoint({
  method: "DELETE",
  path: "/members/:memberId",
  tags: ["Members"],
})
class DeleteMember {
  @request
  request(@pathParams pathParams: { memberId: String }) {}

  @response({ status: 200 })
  successResponse(@body body: Member) {}

  @response({ status: 400 })
  badRequestResponse(@body body: Error) {}

  @response({ status: 403 })
  forbiddenResponse(@body body: Error) {}

  @response({ status: 500 })
  internalServerErrorResponse(@body body: Error) {}
}
