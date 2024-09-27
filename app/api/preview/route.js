import { redirectToPreviewURL } from "@prismicio/next";

import { createClient } from "../../../prismicio";
import { draftMode } from "next/headers";

export async function GET(request) {
  const client = createClient();
  draftMode().enable();

  return await redirectToPreviewURL({ client, request });
}
