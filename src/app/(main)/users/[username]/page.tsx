import Message from "@/components/messages/Message";
import Link from "next/link";

const UserPage = ({ params }: { params: { username: string } }) => {
  const user = {
    username: params.username,
    name: "John Doe",
    bio: "Yo soy John Doe",
    followersCount: 15,
    followingCount: 5,
    messages: [
      {
        name: "John Doe",
        username: "JohnD",
        message: "Primer mensaje",
        repliesCount: 13,
      },
      {
        name: "John Doe",
        username: "JohnD",
        message: "Segundo mensaje",
        repliesCount: 20,
      },
    ],
    replies: [
      {
        message: "Mi respuesta",
        repliesCount: 0,
      },
    ],
  };

  return (
    <main className="flex flex-col bg-gray-100 p-8">
      <section className="flex flex-col mb-8">
        <div className="rounded-full p-6 bg-gray-300 w-20 text-center">
          <span className="font-semibold text-lg">JD</span>
        </div>
        <h2 className="mb-1">{user.name}</h2>
        <div className="text-md mb-4 text-gray-600 cursor-pointer">
          @ <Link href={`/users/${user.username}`}> {user.username}</Link>
        </div>
        <div className="mb-4">{user.bio}</div>
        <div className="flex justify-between mb-4">
          <div>
            {" "}
            <span className="font-semibold"> {user.followersCount}</span>{" "}
            Seguidores
          </div>
          <div>
            {" "}
            <span className="font-semibold"> {user.followingCount}</span>{" "}
            Siguiendo
          </div>
        </div>
      </section>

      <div className="flex justify-evenly mb-4">
        <div className="cursor-pointer border-b-2 border-blue-400">
          Mensajes
        </div>
        <div className="cursor-pointer">Respuestas</div>
      </div>
      <div>
        {user.messages.map((message, index) => (
          <Message key={`${index}`} message={message}></Message>
        ))}
      </div>
    </main>
  );
};

export default UserPage;
