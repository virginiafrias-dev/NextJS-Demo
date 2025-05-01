import UserTabs from "@/components/users/UserTabs";
import Link from "next/link";
import profilePic from "../../../../../public/Princess_Leia.jpg";
import Image from "next/image";

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
        <div className=" text-center block relative w-20 h-20">
          <Image
            className="rounded-full"
            src={profilePic}
            alt="Picture of the author"
            fill
            priority
            placeholder="blur"
          />
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
      <UserTabs messages={user.messages} replies={[]} />
    </main>
  );
};

export default UserPage;
