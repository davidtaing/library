import { api } from "@airtasker/spot";

import "./paths/books";
import "./paths/members";
import "./paths/login";
import "./paths/register";
import "./paths/checkout";

@api({
  name: "Simple Library",
  version: "0.0.0",
})
class Api {}
