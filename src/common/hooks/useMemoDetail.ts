import { instance } from "@/lib/axiosClient";
import { useQuery } from "@tanstack/react-query";

const fetcher = async (id: string) => {
  const res = await instance.get(`/api/memoContent/${id}`);
  return res.data;
};

export const useMemoDetail = (id: string) => {
  const { data: memoContent, status } = useQuery({
    queryKey: ["memoDetail", id],
    queryFn: async () => {
      const data = await fetcher(id);
      return data;
    },
    enabled: !!id,
  });

  return {
    memoContent,
    status,
  };
};
