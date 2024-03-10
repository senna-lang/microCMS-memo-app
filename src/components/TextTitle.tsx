'use client';

import { useStore } from '@/common/store/store';
import TitleEditButton from './TitleEditButton';

const TextTitle = ({ textTitle }: { textTitle: string }) => {
  const { titleEdit, updateTitle } = useStore();
  return (
    <div className="mb-8 flex items-center justify-between">
      {titleEdit ? (
        <input
          type="text"
          className="text-2xl font-bold "
          defaultValue={textTitle}
          onChange={e => updateTitle(e.target.value)}
        />
      ) : (
        <h1 className="text-2xl font-bold ">{textTitle}</h1>
      )}
      <TitleEditButton />
    </div>
  );
};

export default TextTitle;
