import Message from "@/components/messages/Message";
import MessagePostForm from "@/components/messages/MessagePostForm";
import messageAPI from "@/services/messages/message.service";

const MessagePage = async ({ params }: { params: { id: string } }) => {
  const repliesPagePromise = messageAPI.geMessageReplies(params.id, 0, 10);
  const messagePromise = messageAPI.geMessage(params.id);

  const [repliesPage, message] = await Promise.all([
    repliesPagePromise,
    messagePromise,
  ]);

  return (
    <main className="flex flex-col bg-gray-100 p-8">
      <section className="flex flex-col mb-8">
        <Message message={message}></Message>
      </section>

      <section className="flex flex-col mb-8">
        <MessagePostForm parentId={params.id} />
      </section>

      <section className="flex flex-col w-full">
        {repliesPage.content.map((reply, index) => (
          <Message key={`${index}`} message={reply}></Message>
        ))}
      </section>
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
