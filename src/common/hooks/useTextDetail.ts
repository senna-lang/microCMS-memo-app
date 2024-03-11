import useSWR, { Fetcher } from 'swr';
import useSWRMutation from 'swr/mutation';
import axios from 'axios';
import { useCallback } from 'react';
import { TextContent } from '../types/types';

const url = 'http://localhost:3000/content';

const fetcher: Fetcher<TextContent> = async (url: string) => {
  const response = await axios.get(url);
  return response.data;
};

export const useTextDetail = (textId: number | null) => {
  const {
    data: textDetail,
    isLoading,
    error,
    mutate,
  } = useSWR(textId ? `${url}/${textId}` : null, fetcher, {
    suspense: true,
  });

  const revalidate = useCallback(() => mutate(), [mutate]);

  const {
    trigger: detailTrigger,
    isMutating,
    error: mutateError,
  } = useSWRMutation(textId ? `${url}/${textId}` : null, fetcher, {
    onSuccess: revalidate,
  });

  return {
    textDetail,
    revalidate,
    isLoading,
    error,
    detailTrigger,
    isMutating,
    mutateError,
  };
};
