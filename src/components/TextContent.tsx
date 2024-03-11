'use client';

import { useStore } from '@/common/store/store';

const TextContent = ({ textContent }: { textContent: string }) => {
  const { contentEdit, updateContent } = useStore();
  return (
    <div className="min-h-full overflow-y-auto rounded-lg bg-white p-5">
      <div className="flex mb-4">
        {contentEdit ? (
          <textarea
            className="mb-5 flex-grow w-full h-full"
            defaultValue={textContent}
            onChange={e => updateContent(e.target.value)}
          />
        ) : (
          <div className="mb-5 flex-grow">{textContent}</div>
        )}
      </div>
    </div>
  );
};

export default TextContent;
