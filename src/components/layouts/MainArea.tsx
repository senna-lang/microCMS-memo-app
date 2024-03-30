"use client";

import { useStore } from "@/common/store/store";
import TextTitle from "../TextTitle";
import TextContent from "../TextContent";
import ContentEditButton from "../elements/ContentEditButton";
import TitleEditButton from "../elements/TitleEditButton";
import { useMemoDetail } from "@/common/hooks/useMemoDetail";


const MainArea = () => {
  const { textId } = useStore();
  const { memoContent } = useMemoDetail(textId);

  return (
    <div className="flex h-screen flex-col bg-slate-100 p-6">
      {memoContent ? (
        <>
          <div className=" flex w-full justify-between">
            <div className=" w-5/6">
              <TextTitle textTitle={memoContent.title} />
            </div>
            <div className=" w-1/6">
              <div className=" flex w-full justify-end">
                {/* <TitleEditButton /> */}
              </div>
            </div>
          </div>
          <div className=" flex flex-grow justify-between">
            <div className=" w-5/6">
              <TextContent textContent={memoContent.content} />
            </div>
            <div className=" w-1/6">
              <div className=" flex w-full justify-end">
                {/* <ContentEditButton /> */}
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default MainArea;
