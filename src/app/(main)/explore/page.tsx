import ExploreTabs from "@/components/explore/ExploreTabs";
import exploreAPI from "@/services/explore/explore.service";

const ExplorePage = async ({
  searchParams,
}: {
  searchParams?: { [key: string]: string | undefined };
}) => {
  const hashesPromise = exploreAPI.getTrendingHashtags(0, 20);
  const usersPromise = exploreAPI.getFollowsRecomendations(0, 20);

  const [users, hashes] = await Promise.all([usersPromise, hashesPromise]);

  return (
    <>
      <main className="flex flex-col bg-gray-100 p-8">
        <section className="flex flex-col mb-8">
          <ExploreTabs
            hashtags={hashes}
            users={users}
            initialTab={searchParams?.type}
          />
        </section>
      </main>
    </>
  );
};

export default ExplorePage;
