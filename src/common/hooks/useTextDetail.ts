import useSWR, { Fetcher } from 'swr';
import useSWRMutation from 'swr/mutation';
import { useCallback } from 'react';
import { TextContent } from '../types/types';
import { instance } from '../../lib/axiosClient';

const url = '/content';

const fetcher: Fetcher<TextContent> = async (url: string) => {
  const response = await instance.get(url);
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
