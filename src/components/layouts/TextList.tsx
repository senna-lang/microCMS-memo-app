"use client";

import { MemoContent } from "@/common/types/types";
import TitleCard from "../TitleCard";
import { useMemoList } from "@/common/hooks/useMemoList";

const TextList = () => {
  const { memoList } = useMemoList();
  return (
    <div className="flex-grow overflow-y-auto">
      {memoList ? (
        memoList.map((text: MemoContent) => (
          <TitleCard textId={text.id} textTitle={text.title} key={text.id} />
        ))
      ) : (
        <></>
      )}
    </div>
  );
};

export default TextList;
