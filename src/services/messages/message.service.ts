import { httpGetPublic } from "../common/http.service";
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
}

const messageAPI = new MessageAPI();
export default messageAPI;
