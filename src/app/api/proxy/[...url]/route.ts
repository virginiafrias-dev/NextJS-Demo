import { type NextRequest } from "next/server";
import { headers } from "next/headers";
import httpInternalApi from "@/services/common/http.internal.service";

export async function GET(request: NextRequest) {
  const url = request.url.split("/proxy")[1];
  const accessToken = (await headers()).get("x-social-acces-token");

  //TO DO fix URL params for get PROXY
  const response = await httpInternalApi.httpGet(
    url,
    undefined,
    accessToken ?? undefined
  );
  return new Response(JSON.stringify(response), {
    status: 200,
  });
}

export async function POST(request: NextRequest) {
  const url = request.url.split("/proxy")[1];
  const accessToken = (await headers()).get("x-social-acces-token");
  const body = await request.json();
  const response = await httpInternalApi.httpPost(
    url,
    body,
    accessToken ?? undefined
  );
  return new Response(JSON.stringify(response), {
    status: 200,
  });
}
