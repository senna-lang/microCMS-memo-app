"use client";

import { useStore } from "@/common/store/store";
import DeleteIcon from "../../public/icons/delete.svg";
import { useMemoDetail } from "@/common/hooks/useMemoDetail";

const TitleCard = ({
  textId,
  textTitle,
}: {
  textId: string;
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
  const style = sidebarEdit
    ? "b-2 flex items-center border-b border-black p-4 font-semibold text-slate-500 duration-150 "
    : "b-2 flex cursor-pointer items-center border-b border-black p-4 font-semibold text-slate-500 duration-150 hover:rounded-md hover:border-white hover:bg-slate-300 hover:text-blue-500 ";
  const { memoContent } = useMemoDetail(textId);

  const selectText = (id: string) => {
    if (contentEdit || titleEdit || sidebarEdit) {
      return;
    }
    try {
      updateTextId(id);
      updateContent(memoContent.content);
      updateTitle(memoContent.title);
    } catch (err) {
      window.alert(
        "テキストデータの取得に失敗しました。しばらくしてからもう１度お試しください。",
      );
      console.error(err);
    }
  };

  // const deleteText = async (id: number) => {
  //   try {
  //     await axios.delete(`http://localhost:3000/content/${id}`);
  //     updateTextId('');
  //     // mutate();
  //   } catch (err) {
  //     console.error(err);
  //     window.alert(
  //       "テキストの削除に失敗しました。しばらくしてからもう１度お試しください。",
  //     );
  //   }
  // };

  return (
    <ul>
      <li key={textId} className={style} onClick={() => selectText(textId)}>
        <div className="flex w-full justify-between">
          <span className=" inline-block">{textTitle}</span>
          {sidebarEdit ? (
            <button
              className="mr-2 block cursor-pointer"
              // onClick={() => deleteText(textId)}
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
