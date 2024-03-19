export type TextContent = {
  id: number;
  title: string;
  body: string;
  createdAt: string;
  updatedAt: string;
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
