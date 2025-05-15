import { TrendingUserType, UserType } from "@/types/user.types";
import { PageType } from "@/types/pagination.types";
import { TrendingHashtag } from "@/types/hash.types";
import httpInternalApi from "../common/http.internal.service";

class ExploreAPI {
  getTrendingHashtags = async (
    page: number,
    size: number
  ): Promise<PageType<TrendingHashtag>> =>
    httpInternalApi.httpGetPublic(
      `/explore/trending`,
      new URLSearchParams({ page: `${page}`, size: `${size}` })
    );

  getFollowsRecomendations = async (
    page: number,
    size: number
  ): Promise<PageType<TrendingUserType>> =>
    httpInternalApi.httpGetPublic(
      `/explore/follow-recommendations`,
      new URLSearchParams({ page: `${page}`, size: `${size}` })
    );
}

const exploreAPI = new ExploreAPI();
export default exploreAPI;
