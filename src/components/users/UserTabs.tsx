"use client";
import { MessageType } from "@/types/message.types";
import Message from "../messages/Message";
import { useState } from "react";

enum TabView {
  MESSAGES,
  REPLIES,
}

type UserTabsProps = {
  messages: MessageType[];
  replies: MessageType[];
};

const UserTabs = ({ messages, replies }: UserTabsProps) => {
  const [tab, setTab] = useState<TabView>(TabView.MESSAGES);

  return (
    <>
      <div className="flex justify-evenly mb-4 w-full">
        <div
          onClick={() => setTab(TabView.MESSAGES)}
          className={`cursor-pointer  ${
            tab === TabView.MESSAGES ? "border-b-2 border-blue-400" : ""
          }`}
        >
          Mensajes
        </div>
        <div
          onClick={() => setTab(TabView.REPLIES)}
          className={`cursor-pointer ${
            tab === TabView.REPLIES ? "border-b-2 border-blue-400" : ""
          }`}
        >
          Respuestas
        </div>
      </div>
      <div className="flex w-full flex-col">
        {tab === TabView.MESSAGES &&
          messages.map((message, index) => (
            <Message key={`${index}`} message={message}></Message>
          ))}
        {tab === TabView.REPLIES &&
          replies.map((reply, index) => (
            <Message key={`${index}`} message={reply}></Message>
          ))}
      </div>
    </>
  );
};

export default UserTabs;
