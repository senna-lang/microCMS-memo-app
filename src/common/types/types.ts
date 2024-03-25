export type MemoContent = {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
};
export type PostText = {
  title: string;
  body: string;
};
export type PostFetcher = <T, U>(
  url: string,
  arg: {
    arg: T;
  },
) => Promise<U>;
export type PatchFetcher = <T, U>(
  url: string,
  arg: {
    arg: T;
  },
) => Promise<U>;
