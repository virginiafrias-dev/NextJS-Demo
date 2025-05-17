import { AccessDeniedError } from "@/services/common/http.errors";
import { type NextRequest } from "next/server";
import authService from "@/services/auth/auth.service";
import { cookies } from "next/headers";

export async function POST(request: NextRequest) {
  try {
    const authCookie = request.cookies.get("SocialSessionID");
    if (authCookie) {
      const sessionId = authCookie.value;
      await authService.logout(sessionId);
    }
    (await cookies()).delete("SocialSessionID");

    (await cookies()).delete("SocialUsername");
    return new Response(JSON.stringify({}), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
    });
  }
}
