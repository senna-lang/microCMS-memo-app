import { instance } from "@/lib/axiosClient";
import { useQuery } from "@tanstack/react-query";

const fetcher = async (id:string) => {
  const res = await instance.get(`/api/memoList/${id}`);
  return res.data;
};

export const useMemoDetail = (id:string) => {
  const { data: memoContent, status } = useQuery({
    queryKey: ["memoDetail"],
    queryFn: async () => {
      const data = await fetcher(id)
      return data
    },
  });

  return {
    memoContent,
    status,
  };
};
