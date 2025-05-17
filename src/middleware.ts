import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { AccessDeniedError } from "./services/common/http.errors";
import authAPI from "./services/auth/auth.api";

export async function middleware(request: NextRequest) {
  try {
    const sessionId = request.cookies.get("SocialSessionID")?.value ?? "";

    if (!sessionId)
      throw new AccessDeniedError("Session ID is not valid anymore");
    console.log(sessionId);
    const accessToken = await getAccessToken(sessionId);
    if (!accessToken)
      throw new AccessDeniedError("Accesstoken is not valid anymore");
    console.log(accessToken);
    return getAthenticationHeaders(request, accessToken);
  } catch (error) {
    if (error instanceof AccessDeniedError) {
      if (!request.url.endsWith("/profile")) {
        return NextResponse.next();
      }
    }
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

const getAccessToken = async (sessionId: string): Promise<string> => {
  return (await authAPI.getRedisValue(sessionId)).value;
};

const getAthenticationHeaders = (request: NextRequest, accessToken: string) => {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-social-acces-token", accessToken);

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
};

export const config = {
  matcher: [
    "/",
    "/messages/:path*",
    "/explore",
    "/profile",
    "/api/proxy/:path*",
  ],
};
