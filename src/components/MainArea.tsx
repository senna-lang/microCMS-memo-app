'use client';
import { useTextDetail } from '@/common/hooks/useTextDetail';
import { useStore } from '@/common/store/store';

const MainArea = () => {
  const textId = useStore(state => state.textId);
  const { textDetail } = useTextDetail(textId);
  // console.log(textDetail)
  return (
    <div className="flex h-screen flex-col bg-slate-100 p-6">
      <div className=" min-h-full overflow-y-auto rounded-lg bg-white p-5">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-2xl font-bold ">test</h1>
        </div>
        <div className="mb-4 flex-grow">
          <div>
            {/* <div className="mb-5">{textDetail.body}</div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainArea;
