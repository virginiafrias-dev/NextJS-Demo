import UserPageContainerAsync from "@/components/users/UserPageContainerAsync";
import userAPI from "@/services/users/users.service";
import { cookies } from "next/headers";
import { createClient } from "redis";

const client = createClient({
  url: "redis://default:SocialNetworkPass@localhost:6379",
});

await client.connect().then(() => {
  console.log("connected to redis");
});

const ProfilePage = async () => {
  const cookieStore = await cookies();
  const sessionId = cookieStore.get("SocialSessionID");
  const accessToken = await client.get(sessionId?.value ?? "");
  if (!accessToken) {
    return new Response(JSON.stringify({ error: "Acces denied" }), {
      status: 403,
    });
  }
  const me = await userAPI.getMeInternal(accessToken);

  return <UserPageContainerAsync username={me.username} />;
};

export default ProfilePage;
