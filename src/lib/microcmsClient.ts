import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "fnblt2o36e",
  apiKey: process.env.NEXT_PUBLIC_API_KEY!,
});

export const getAllMemo = async () => {
  const data = await client.get({ endpoint: "memo" });
  return data;
};
export const getMemoDetail = async (id: string) => {
  const data = await client.get({ endpoint: "memo", contentId: `${id}` });
  return data;
};
