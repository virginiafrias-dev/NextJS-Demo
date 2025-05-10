import MessageFeed from "@/components/messages/MessageFeed";
import MessagePostForm from "@/components/messages/MessagePostForm";
import messageAPI from "@/services/messages/message.service";

const IndexPage = async () => {
  const messageResponse = await messageAPI.geMessageFeed(0, 10);
  return (
    <>
      <main className="flex flex-col bg-gray-100 p-8">
        <section className="flex flex-col mb-8">
          <MessagePostForm />
          <MessageFeed initialMessages={messageResponse} />
        </section>
      </main>
    </>
  );
};

export default IndexPage;
