'use client';
import { useTextList } from '@/common/hooks/useTextList';
import { useTextDetail } from '@/common/hooks/useTextDetail';
import { useStore } from '@/common/store/store';

const TextList = () => {
  const textId = useStore(state => state.textId);
  const updateTextId = useStore(state => state.updateTextId);
  const { textList } = useTextList();
  const { detailTrigger } = useTextDetail(textId);
  const selectText = (id: number) => {
    updateTextId(id);
    detailTrigger();
  };
  return (
    <div className="flex-grow overflow-y-auto">
      <ul>
        {textList ? (
          textList.map((text: TextContent) => (
            <li
              key={text.id}
              className="mb-2 flex cursor-pointer items-center border-b border-black p-4 font-semibold text-slate-500 duration-150 hover:rounded-md hover:border-white hover:bg-blue-500 hover:text-white "
              onClick={() => selectText(text.id)}
            >
              <span className="mr-2 inline-block">
                {/* <FaRegFileLines /> */}
              </span>
              <span className=" inline-block">{text.title}</span>
            </li>
          ))
        ) : (
          <></>
        )}
      </ul>
    </div>
  );
};

export default TextList;
