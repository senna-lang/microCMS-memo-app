import { instance } from "@/lib/axiosClient";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { PostMemo } from "../types/types";

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

  return {
    createMemo,
  };
};
