import messageAPI from "@/services/messages/message.service";
import MessagePageContainer from "../page.container";
import { headers } from "next/headers";
import userAPI from "@/services/users/users.service";

const MessagePage = async ({ params }: { params: { id: string } }) => {
  const accessToken = (await headers()).get("x-social-acces-token");
  const currentUser = accessToken
    ? await userAPI.getMeInternal(accessToken)
    : undefined;

  const repliesPagePromise = messageAPI.geMessageReplies(params.id, 0, 10);
  const messagePromise = messageAPI.geMessage(params.id);

  const [repliesPage, message] = await Promise.all([
    repliesPagePromise,
    messagePromise,
  ]);

  return (
    <main className="flex flex-col bg-gray-100 p-8">
      <MessagePageContainer
        message={message}
        repliesPage={repliesPage}
        parentId={params.id}
        currentUser={currentUser}
      />
    </main>
  );
};

export default MessagePage;

/////////////////opcion de ChatGPT/////////////////
// export default async function MessagePage({
//   params,
// }: {
//   params: Promise<{ slug: string }>;
// }) {
//   const { slug } = await params;
//   return <h1>Message: {slug}</h1>;
// }
