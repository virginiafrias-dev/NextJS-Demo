import { TrendingUserType, UserType } from "@/types/user.types";
import { httpGetPublic } from "../common/http.service";
import { PageType } from "@/types/pagination.types";
import { TrendingHashtag } from "@/types/hash.types";

class ExploreAPI {
  getTrendingHashtags = async (
    page: number,
    size: number
  ): Promise<PageType<TrendingHashtag>> =>
    httpGetPublic(
      `/explore/trending`,
      new URLSearchParams({ page: `${page}`, size: `${size}` })
    );

  getFollowsRecomendations = async (
    page: number,
    size: number
  ): Promise<PageType<TrendingUserType>> =>
    httpGetPublic(
      `/explore/follow-recommendations`,
      new URLSearchParams({ page: `${page}`, size: `${size}` })
    );
}

const exploreAPI = new ExploreAPI();
export default exploreAPI;
