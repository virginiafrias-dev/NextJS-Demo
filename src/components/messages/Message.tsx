import { MessageType } from "@/types/message.types";
import Link from "next/link";

type MessageProps = {
  message: MessageType;
};

const Message = ({ message }: MessageProps) => {
  return (
    <div>
      <div className="flex">
        <div className="rounded-full p-4 bg-gray-300 w-14 text-center mb-4">
          <span className="font-semibold text-sm">JD</span>
        </div>
        <div className="flex flex-col ml-4 mt-2">
          <div className="flex">
            <h3>{message.name}</h3>
            <div className="text-md ml-2 text-gray-500 cursor-pointer">
              @{" "}
              <Link href={`/users/${message.username}`}>
                {" "}
                {message.username}
              </Link>
            </div>
          </div>
          <p> {message.message}</p>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default Message;
