"use client";

import Message from "@/components/messages/Message";
import MessageList from "@/components/messages/MessageList";
import MessagePostForm from "@/components/messages/MessagePostForm";
import useMessages, { MessageProvider } from "@/contexts/message.context";
import { MessageType } from "@/types/message.types";
import { PageType } from "@/types/pagination.types";

type MessagePageProps = {
  message: MessageType;
  repliesPage: PageType<MessageType>;
  parentId?: string;
};

const MessageContainer = () => {
  const { message } = useMessages();
  if (!message) return <></>;
  return (
    <section className="flex flex-col mb-8">
      <Message message={message}></Message>
    </section>
  );
};

const MessagePageContainer = ({
  message,
  repliesPage,
  parentId,
}: MessagePageProps) => {
  return (
    <MessageProvider initialPage={repliesPage} initialMessage={message}>
      <MessageContainer />
      <section className="flex flex-col mb-8">
        <MessagePostForm parentId={parentId} />
      </section>

      <section className="flex flex-col w-full">
        <MessageList />
      </section>
    </MessageProvider>
  );
};

export default MessagePageContainer;
