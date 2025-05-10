import { httpGetPublic, httpPost } from "../common/http.service";
import { PageType } from "@/types/pagination.types";
import { MessageType } from "@/types/message.types";

class MessageAPI {
  geMessageFeed = async (
    page: number,
    size: number
  ): Promise<PageType<MessageType>> =>
    httpGetPublic(
      `/messages/feed`,
      new URLSearchParams({ page: `${page}`, size: `${size}` })
    );

  geMessage = async (id: string): Promise<MessageType> =>
    httpGetPublic(`/messages/${id}`);

  geMessageReplies = async (
    id: string,
    page: number,
    size: number
  ): Promise<PageType<MessageType>> =>
    httpGetPublic(
      `/messages/${id}/replies`,
      new URLSearchParams({ page: `${page}`, size: `${size}` })
    );

  postMessage = async (
    message: string,
    parentId?: string
  ): Promise<MessageType> =>
    httpPost(`/messages`, { message: message, parentId: parentId ?? null });

  geMessagesByHash = async (
    hashtag: string,
    page: number,
    size: number
  ): Promise<PageType<MessageType>> =>
    httpGetPublic(
      `/messages/hash/${hashtag}`,
      new URLSearchParams({ page: `${page}`, size: `${size}` })
    );
}

const messageAPI = new MessageAPI();
export default messageAPI;
