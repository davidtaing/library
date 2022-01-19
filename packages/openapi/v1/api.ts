import { api } from "@airtasker/spot";

import "./paths/books";
import "./paths/members";
import "./paths/checkouts";

@api({
  name: "Simple Library",
  version: "0.0.0",
})
class Api {}
