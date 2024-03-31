import { PostMemo } from "@/common/types/types";
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
export const createMemo = async (props: PostMemo) => {
  const { title, content } = props;
  const data = await client.create({
    endpoint: "memo",
    content: {
      title,
      content,
    },
  });
  return data;
};
export const deleteMemo = async (id: string) => {
  const data = await client.delete({
    endpoint: "memo",
    contentId: id,
  });
  return data;
};
