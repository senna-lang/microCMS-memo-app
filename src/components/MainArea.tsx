'use client';
import { useTextDetail } from '@/common/hooks/useTextDetail';
import { useStore } from '@/common/store/store';
import TextTitle from './TextTitle';
import TextContent from './TextContent';

const MainArea = () => {
  const textId = useStore(state => state.textId);
  const { textDetail } = useTextDetail(textId);
  return (
    <div className="flex h-screen flex-col bg-slate-100 p-6">
      <TextTitle textTitle={textDetail.title} />
      <TextContent textContent={textDetail.body} />
    </div>
  );
};

export default MainArea;
