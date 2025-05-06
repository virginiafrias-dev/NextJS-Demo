"use client";

import InfiniteScroll from "react-infinite-scroll-component";
import { PageType } from "@/types/pagination.types";
import { MessageType } from "@/types/message.types";
import { useState } from "react";
import Message from "./Message";
import messageAPI from "@/services/messages/message.service";

type MessageFeedProps = {
  initialMessages: PageType<MessageType>;
};

const MessageFeed = ({ initialMessages }: MessageFeedProps) => {
  const [messageResponse, setMessageResponse] =
    useState<PageType<MessageType>>(initialMessages);
  const [messages, setMessages] = useState<MessageType[]>(
    initialMessages.content
  );
  const [hasMore, setHasMore] = useState<boolean>(
    !initialMessages.pagination.last
  );

  const fetchData = async () => {
    const page = messageResponse.pagination.page + 1;
    const response = await messageAPI.geMessageFeed(page, 10);
    setMessageResponse(response);
    setMessages([...messages, ...response.content]);
    setHasMore(!response.pagination.last);
    throw new Error("Function not implemented.");
  };

  const refresh = async () => {
    const response = await messageAPI.geMessageFeed(0, 10);
    setMessageResponse(response);
    setMessages(response.content);
    setHasMore(!response.pagination.last);

    throw new Error("Function not implemented.");
  };

  return (
    <>
      <InfiniteScroll
        dataLength={messages.length} //This is important field to render the next data
        next={fetchData}
        hasMore={hasMore}
        loader={<h4>cargando mas mensajes...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Ups! Has llegado al final</b>
          </p>
        }
        // below props only if you need pull down functionality
        refreshFunction={refresh}
        pullDownToRefresh
        pullDownToRefreshThreshold={50}
        pullDownToRefreshContent={
          <h3 style={{ textAlign: "center" }}>
            &#8595; Arrastra hacia abajo para refrescar
          </h3>
        }
        releaseToRefreshContent={
          <h3 style={{ textAlign: "center" }}>&#8593; Suelta para refrescar</h3>
        }
      >
        {messages.map((message, index) => (
          <Message key={`${index}`} message={message}></Message>
        ))}
      </InfiniteScroll>
    </>
  );
};

export default MessageFeed;
