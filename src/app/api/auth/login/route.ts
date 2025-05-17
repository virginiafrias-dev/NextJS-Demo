import { AccessDeniedError } from "@/services/common/http.errors";
import { type NextRequest } from "next/server";
import authService from "@/services/auth/auth.service";
import LoginScheme from "@/schemes/login.scheme";
import { cookies } from "next/headers";

export async function POST(request: NextRequest) {
  const { username, password } = await LoginScheme.validate(
    await request.json()
  );

  try {
    const loginResponse = await authService.authenticated(username, password);

    (await cookies()).set("SocialSessionID", loginResponse.sessionId, {
      expires: loginResponse.expireAt,
      httpOnly: true,
      secure: true,
      domain: "localhost",
      path: "/",
    });

    (await cookies()).set("SocialUsername", loginResponse.user.username, {
      expires: loginResponse.expireAt,
      httpOnly: false,
      secure: true,
      domain: "localhost",
      path: "/",
    });

    return new Response(JSON.stringify(loginResponse.user), {
      status: 200,
    });
  } catch (error) {
    if (error instanceof AccessDeniedError) {
      return new Response(
        JSON.stringify({ error: "Invalid credentials for user: " + username }),
        {
          status: 403,
        }
      );
    } else {
      return new Response(JSON.stringify({ error: "Internal server error" }), {
        status: 500,
      });
    }
  }
}
