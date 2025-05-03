export type TrendingUserType = {
  id: string;
  username: string;
  name: string;
  photoUrl: string;
  followersCount: number;
};

export type UserType = TrendingUserType & {
  bio: string;
  createdAt: string;
  followingCount: number;
  messageCount: number;
};
