import useSWR from "swr";
import useSWRMutation from "swr/mutation";
import { useCallback } from "react";
import { Fetcher } from "swr";
import { PostFetcher, TextContent } from "../types/types";
import { instance } from "../../lib/axiosClient";

const url = "/content";

const getFetcher: Fetcher<TextContent[]> = async (url: string) => {
  const response = await instance.get(url);
  return response.data;
};
const postFetcher: PostFetcher= async (url, { arg }) => {
  const response = await instance.post(url, arg);
  return response.data;
};

export const useTextList = () => {
  const { data: textList, isLoading, error, mutate } = useSWR(url, getFetcher);

  const revalidate = useCallback(() => mutate(), [mutate]);

  const {
    trigger: listTrigger,
    isMutating,
    error: mutateError,
  } = useSWRMutation(url, postFetcher, {
    onSuccess: revalidate,
  });

  return {
    mutate,
    textList,
    revalidate,
    isLoading,
    error,
    listTrigger,
    isMutating,
    mutateError,
  };
};
