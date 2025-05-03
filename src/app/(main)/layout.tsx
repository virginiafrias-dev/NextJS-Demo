import ExploreTrending from "@/components/explore/ExploreTrending";
import ExploreUsers from "@/components/explore/ExploreUsers";
import Menu from "@/components/menu/Menu";
import exploreAPI from "@/services/explore/explore.service";
import { FC, PropsWithChildren } from "react";

const LINKS = [
  { title: "Inicio", href: "/" },
  { title: "Explorar", href: "/explore" },
  { title: "Perfil", href: "/profile" },
];

const UsersLayout: FC<PropsWithChildren> = async ({ children }) => {
  const hashesPromise = exploreAPI.getTrendingHashtags(0, 3);
  const usersPromise = exploreAPI.getFollowsRecomendations(0, 5);

  const [users, hashes] = await Promise.all([usersPromise, hashesPromise]);

  return (
    <>
      <div className="w-full h-full grid grid-cols-12 gap-4 px-4">
        <div className="col-span-2">
          <Menu links={LINKS} />
        </div>
        <main className="col-span-6">{children}</main>
        <div className="col-span-4">
          <div className="mb-4">
            <ExploreTrending hashes={hashes.content} />
          </div>
          <ExploreUsers users={users.content} />
        </div>
      </div>
    </>
  );
};
export default UsersLayout;
