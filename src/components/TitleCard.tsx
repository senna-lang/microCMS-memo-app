'use client';

import { useStore } from '@/common/store/store';
import { useTextDetail } from '@/common/hooks/useTextDetail';
import DeleteIcon from '../../public/icons/delete.svg';
import axios from 'axios';
import { useTextList } from '@/common/hooks/useTextList';

const TitleCard = ({
  textId,
  textTitle,
}: {
  textId: number;
  textTitle: string;
}) => {
  const {
    updateTextId,
    updateContent,
    updateTitle,
    sidebarEdit,
    contentEdit,
    titleEdit,
  } = useStore();
  const { detailTrigger, textDetail } = useTextDetail(textId);
  const { listTrigger } = useTextList();
  const style = sidebarEdit
    ? 'b-2 flex items-center border-b border-black p-4 font-semibold text-slate-500 duration-150 '
    : 'b-2 flex cursor-pointer items-center border-b border-black p-4 font-semibold text-slate-500 duration-150 hover:rounded-md hover:border-white hover:bg-blue-500 hover:text-white ';

  const selectText = (id: number) => {
    if (contentEdit || titleEdit) {
      return;
    }
    updateTextId(id);
    updateContent(textDetail.body);
    updateTitle(textDetail.title);
    detailTrigger();
  };

  const deleteText = async (id: number) => {
    axios.delete(`http://localhost:3000/content/${id}`);
    listTrigger();
  };

  return (
    <ul>
      <li key={textId} className={style} onClick={() => selectText(textId)}>
        <div className="w-full flex justify-between">
          <span className=" inline-block">{textTitle}</span>
          {sidebarEdit ? (
            <button
              className="mr-2 block cursor-pointer"
              onClick={() => deleteText(textId)}
            >
              <DeleteIcon />
            </button>
          ) : (
            <></>
          )}
        </div>
      </li>
    </ul>
  );
};

export default TitleCard;
