import { OpenAPIV3 } from "openapi-types";
import apiDoc from "../../../../openapi/build/api/v1/api.json";

// remove paths and replace with empty object
const { paths: pathsSpec, ...remainingApiSpec } = apiDoc;
const apiSpec = { paths: {}, ...remainingApiSpec } as OpenAPIV3.Document;

if (apiDoc === undefined || pathsSpec === undefined)
  throw Error("Failed to load OpenAPI Spec.");

export const paths = pathsSpec as OpenAPIV3.PathsObject;

export default apiSpec;
