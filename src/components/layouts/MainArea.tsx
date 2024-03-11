'use client';
import { useTextDetail } from '@/common/hooks/useTextDetail';
import { useStore } from '@/common/store/store';
import TextTitle from '../TextTitle';
import TextContent from '../TextContent';
import ContentEditButton from '../elements/ContentEditButton';
import TitleEditButton from '../elements/TitleEditButton';

const MainArea = () => {
  const textId = useStore(state => state.textId);
  const { textDetail } = useTextDetail(textId);
  return (
    <div className="flex h-screen flex-col bg-slate-100 p-6">
      {textDetail ? (
        <>
          <div className=" w-full flex justify-between">
            <div className=" w-5/6">
              <TextTitle textTitle={textDetail.title} />
            </div>
            <div className=" w-1/6">
              <div className=" w-full flex justify-end">
                <TitleEditButton />
              </div>
            </div>
          </div>
          <div className=" flex justify-between">
            <div className=" w-5/6">
              <TextContent textContent={textDetail.body} />
            </div>
            <div className=" w-1/6">
              <div className=" w-full flex justify-end">
                <ContentEditButton />
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
