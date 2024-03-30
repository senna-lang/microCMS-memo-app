import { instance } from "@/lib/axiosClient";
import { useQuery } from "@tanstack/react-query";

const fetcher = async () => {
  const res = await instance.get("/api/memoList");
  return res.data.contents;
};

export const useMemoList = () => {
  const { data: memoList, status } = useQuery({
    queryKey: ["memoList"],
    queryFn: fetcher,
  });

  return {
    memoList,
    status,
  };
};
