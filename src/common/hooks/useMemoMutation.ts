import { instance } from "@/lib/axiosClient";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { PostMemo, UpdateMemo } from "../types/types";

export const useMemoMutation = () => {
  const queryClient = useQueryClient();

  const createMemo = useMutation({
    mutationFn: async (post: PostMemo) =>
      await instance.post("/api/postMemo", post),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["memoList"],
      });
    },
  });

  const deleteMemo = useMutation({
    mutationFn: async (id: string) =>
      await instance.delete(`/api/deleteMemo/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["memoList"],
      });
    },
  });

  const updateMemo = useMutation({
    mutationFn: async (props: UpdateMemo) => {
      const { id, title, content } = props;
      const body = {
        title,
        content,
      };
      await instance.put(`/api/updateMemo/${id}`, body);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["memoContent"],
      });
    },
  });

  return {
    createMemo,
    deleteMemo,
    updateMemo,
  };
};
