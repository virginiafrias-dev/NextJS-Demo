"use client";
import { MessageType } from "@/types/message.types";
import Message from "../messages/Message";
import { useState } from "react";
import UserCard, { UserCardLayout } from "./UserCard";
import { TrendingUserType } from "@/types/user.types";

enum TabView {
  MESSAGES,
  REPLIES,
  FOLLOWERS,
  FOLLOWING,
}

type UserTabsProps = {
  messages: MessageType[];
  replies: MessageType[];
  followers: TrendingUserType[];
  following: TrendingUserType[];
};

const UserTabs = ({
  messages,
  replies,
  followers,
  following,
}: UserTabsProps) => {
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
        <div
          onClick={() => setTab(TabView.FOLLOWERS)}
          className={`cursor-pointer ${
            tab === TabView.FOLLOWERS ? "border-b-2 border-blue-400" : ""
          }`}
        >
          Seguidores
        </div>
        <div
          onClick={() => setTab(TabView.FOLLOWING)}
          className={`cursor-pointer ${
            tab === TabView.FOLLOWING ? "border-b-2 border-blue-400" : ""
          }`}
        >
          Siguiendo
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
        {tab === TabView.FOLLOWERS &&
          followers.map((user, index) => (
            <UserCard
              user={user}
              key={`followers-user-${index}`}
              layout={UserCardLayout.VERTICAL}
            />
          ))}
        {tab === TabView.FOLLOWING &&
          following.map((user, index) => (
            <UserCard
              user={user}
              key={`following-user-${index}`}
              layout={UserCardLayout.VERTICAL}
            />
          ))}
      </div>
    </>
  );
};

export default UserTabs;
