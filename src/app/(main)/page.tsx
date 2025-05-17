import messageAPI from "@/services/messages/message.service";
import IndexPageContainer from "./page.container";
import { headers } from "next/headers";
import userAPI from "@/services/users/users.service";

const IndexPage = async ({
  searchParams,
}: {
  searchParams?: { [key: string]: string | undefined };
}) => {
  const accessToken = (await headers()).get("x-social-acces-token");

  const currentUser = accessToken
    ? await userAPI.getMeInternal(accessToken)
    : undefined;

  const messageResponse = searchParams?.query
    ? await messageAPI.geMessagesByHash(searchParams?.query, 0, 10)
    : await messageAPI.geMessageFeed(0, 10);
  return (
    <>
      <main className="flex flex-col bg-gray-100 p-8">
        <section className="flex flex-col mb-8">
          <IndexPageContainer
            initialQuery={searchParams?.query}
            messageResponse={messageResponse}
            currentUser={currentUser}
          />
        </section>
      </main>
    </>
  );
};

export default IndexPage;
