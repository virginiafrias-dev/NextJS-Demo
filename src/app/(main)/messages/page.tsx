import Message from "@/components/messages/Message";
import Link from "next/link";

const MessagesPage = () => {
  const messages = [
    {
      name: "Han Solo",
      username: "HSolo",
      message: "Tercer mensaje",
      repliesCount: 3,
    },
    {
      name: "Juliet Doe",
      username: "JulieeD",
      message: "Cuarto mensaje",
      repliesCount: 2,
    },
  ];

  return (
    <>
      <main className="flex flex-col bg-gray-100 p-8">
        <section className="flex flex-col mb-8">
          <div>
            {messages.map((message, index) => (
              <Message key={`${index}`} message={message}></Message>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default MessagesPage;
