import {
  endpoint,
  request,
  response,
  body,
  pathParams,
  String,
} from "@airtasker/spot";
import {
  Member,
  PartialMember,
  CreateMember,
  Error,
} from "../../components/schemas";

@endpoint({
  method: "GET",
  path: "/members",
})
class GetMembers {
  @request
  request(@body body: GetMembersRequest) {}

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
})
class AddMember {
  @request
  request(@body body: AddMemberRequest) {}

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
})
class GetMemberById {
  @request
  request(@pathParams pathParams: { memberId: String }) {}

  @response({ status: 200 })
  successResponse(@body body: Member) {}

  @response({ status: 400 })
  BadRequestResponse(@body body: Error) {}

  @response({ status: 500 })
  InternalServerErrorResponse(@body body: Error) {}
}

@endpoint({
  method: "PUT",
  path: "/members/:memberId",
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
  BadRequestResponse(@body body: Error) {}

  @response({ status: 403 })
  ForbiddenResponse(@body body: Error) {}

  @response({ status: 500 })
  InternalServerErrorResponse(@body body: Error) {}
}

@endpoint({
  method: "DELETE",
  path: "/members/:memberId",
})
class DeleteMember {
  @request
  request(@pathParams pathParams: { memberId: String }) {}

  @response({ status: 200 })
  successResponse(@body body: Member) {}

  @response({ status: 400 })
  BadRequestResponse(@body body: Error) {}

  @response({ status: 403 })
  ForbiddenResponse(@body body: Error) {}

  @response({ status: 500 })
  InternalServerErrorResponse(@body body: Error) {}
}

type GetMembersRequest = PartialMember;
type AddMemberRequest = Member;
type UpdateMemberRequest = PartialMember;
