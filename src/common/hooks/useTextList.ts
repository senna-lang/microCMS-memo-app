import useSWR from 'swr';
import useSWRMutation from 'swr/mutation';
import axios from 'axios';
import { useCallback } from 'react';
import { Fetcher } from 'swr';
import { TextContent } from '../types/types';

const url = 'http://localhost:3000/content';

const fetcher: Fetcher<TextContent[]> = async (url: string) => {
  const response = await axios.get(url);
  return response.data;
};

export const useTextList = () => {
  const { data: textList, isLoading, error, mutate } = useSWR(url, fetcher);

  const revalidate = useCallback(() => mutate(), [mutate]);

  const {
    trigger: listTrigger,
    isMutating,
    error: mutateError,
  } = useSWRMutation(url, fetcher, {
    onSuccess: revalidate,
  });

  return {
    textList,
    revalidate,
    isLoading,
    error,
    listTrigger,
    isMutating,
    mutateError,
  };
};
