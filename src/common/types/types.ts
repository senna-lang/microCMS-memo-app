export type MemoContent = {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
};
export type PostMemo = {
  title: string;
  content: string;
};
export type UpdateMemo = {
  id: string;
  title: string;
  content: string;
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
