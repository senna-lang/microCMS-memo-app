import useSWR, { Fetcher } from "swr";
import useSWRMutation from "swr/mutation";
import { useCallback } from "react";
import { PatchFetcher, TextContent } from "../types/types";
import { instance } from "../../lib/axiosClient";

const url = "/content";

const getFetcher: Fetcher<TextContent> = async (url: string) => {
  const response = await instance.get(url);
  return response.data;
};
const patchFetcher: PatchFetcher = async (url, { arg }) => {
  const response = await instance.put(url, arg);
  return response.data;
};

export const useTextDetail = (textId: number | null) => {
  const {
    data: textDetail,
    isLoading,
    error,
    mutate,
  } = useSWR(textId ? `${url}/${textId}` : null, getFetcher, {
    suspense: true,
  });

  const revalidate = useCallback(() => mutate(), [mutate]);

  const {
    trigger: detailTrigger,
    isMutating,
    error: mutateError,
  } = useSWRMutation(textId ? `${url}/${textId}` : null, patchFetcher, {
    onSuccess: revalidate,
  });

  return {
    mutate,
    textDetail,
    revalidate,
    isLoading,
    error,
    detailTrigger,
    isMutating,
    mutateError,
  };
};
