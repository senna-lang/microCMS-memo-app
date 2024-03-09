'use client';

import { useStore } from '@/common/store/store';
import MainAreaEditButton from './MainAreaEditButton';

const TextTitle = ({ textTitle }: { textTitle: string }) => {
  const { mainAreaEdit } = useStore();
  return (
    <div className="mb-8 flex items-center justify-between">
      {mainAreaEdit ? (
        <input type="text" defaultValue={textTitle} />
      ) : (
        <h1 className="text-2xl font-bold ">{textTitle}</h1>
      )}
      <MainAreaEditButton />
    </div>
  );
};

export default TextTitle;
