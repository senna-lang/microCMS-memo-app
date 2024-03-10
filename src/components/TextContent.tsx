'use client';

import { useStore } from '@/common/store/store';
import ContentEditButton from './ContentEditButton';

const TextContent = ({ textContent }: { textContent: string }) => {
  const { contentEdit, updateContent } = useStore();
  return (
    <div className="h-full overflow-y-auto rounded-lg bg-white p-5">
      <div className="mb-4 h-full">
        {contentEdit ? (
          <textarea
            className="mb-5 w-full h-full"
            defaultValue={textContent}
            onChange={e => updateContent(e.target.value)}
          />
        ) : (
          <div className="mb-5">{textContent}</div>
        )}
        <ContentEditButton />
      </div>
    </div>
  );
};

export default TextContent;
