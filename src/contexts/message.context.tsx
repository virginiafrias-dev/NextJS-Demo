import messageAPI from "@/services/messages/message.service";
import { MessageType } from "@/types/message.types";
import { PageType } from "@/types/pagination.types";
import {
  createContext,
  FC,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export type MessageStates = {
  message?: MessageType | undefined;
  messages: MessageType[];
  messagePage: PageType<MessageType>;
  postMessage: (message: string, parentId?: string) => void;
  fetchNextPage: () => void;
  refresh: () => void;
};

const MessageContext = createContext<MessageStates | undefined>(undefined);

type MessageProviderProps = PropsWithChildren & {
  initialPage: PageType<MessageType>;
  initialMessage?: MessageType;
};

export const MessageProvider: FC<MessageProviderProps> = ({
  initialPage,
  initialMessage,
  children,
}: MessageProviderProps) => {
  const [messagePage, setMessagePage] =
    useState<PageType<MessageType>>(initialPage);

  const [messages, setMessages] = useState<MessageType[]>(initialPage.content);

  const [message, setMessage] = useState<MessageType | undefined>(
    initialMessage
  );

  useEffect(() => {
    setMessagePage(initialPage);
    setMessages(initialPage.content);
  }, [initialPage]);

  const postMessage = useCallback(
    async (textMessage: string, parentId?: string) => {
      const response = await messageAPI.postMessage(textMessage, parentId);

      setMessages([response, ...messagePage.content]);

      if (message && message.id === parentId) {
        setMessage({
          ...message,
          repliesCount: message.repliesCount + 1,
        });
      }
    },
    [messagePage, message]
  );

  const fetchNextPage = useCallback(async () => {
    const page = messagePage.pagination.page + 1;
    const response = await messageAPI.geMessageFeed(page, 10);
    setMessagePage(response);
    setMessages([...messages, ...response.content]);
    // setHasMore(!response.pagination.last);
    throw new Error("Function not implemented.");
  }, [messagePage.pagination.page, messages]);

  const refresh = useCallback(async () => {
    const response = await messageAPI.geMessageFeed(0, 10);
    setMessagePage(response);
    setMessages(response.content);
    // setHasMore(!response.pagination.last);

    throw new Error("Function not implemented.");
  }, []);

  const value = useMemo(
    () => ({
      message,
      messages,
      messagePage,
      postMessage,
      fetchNextPage,
      refresh,
    }),
    [message, messages, messagePage, postMessage, fetchNextPage, refresh]
  );

  return (
    <MessageContext.Provider value={value}>{children}</MessageContext.Provider>
  );
};

const useMessages = (): MessageStates => {
  const context = useContext(MessageContext);
  if (!context) {
    throw new Error("useMessages must be used within a MessageProvider");
  }
  return context;
};

export default useMessages;
