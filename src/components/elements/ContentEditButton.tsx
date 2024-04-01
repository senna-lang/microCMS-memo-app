"use client";
import { Button } from "../ui/button";
import { useStore } from "@/common/store/store";
import SaveIcon from "../../../public/icons/save.svg";
import CancelIcon from "../../../public/icons/cancel.svg";
import EditIcon from "../../../public/icons/edit.svg";
import { useMemoMutation } from "@/common/hooks/useMemoMutation";

const ContentEditButton = () => {
  const { contentEdit, toggleContentEdit, textId, title, content } = useStore();
  const { updateMemo } = useMemoMutation();
  const data = {
    id: textId,
    title,
    content,
  };
  const handleAppDate = () => {
    try {
      updateMemo.mutate(data);
      toggleContentEdit(false);
    } catch (err) {
      console.error(err);
      window.alert(
        "テキストの更新に失敗しました。しばらくしてからもう１度お試しください。",
      );
    }
  };

  return (
    <div>
      {contentEdit ? (
        <div className=" flex w-full justify-between">
          <Button
            variant="outline"
            className=" bg-blue-400"
            onClick={() => handleAppDate()}
          >
            <div className=" flex flex-col items-center">
              <SaveIcon />
              <span className=" text-xs text-white">Save</span>
            </div>
          </Button>
          <Button
            variant="outline"
            className=" bg-gray-400"
            onClick={() => toggleContentEdit(false)}
          >
            <div className="flex flex-col items-center">
              <CancelIcon />
              <span className=" text-xs text-white">Cancel</span>
            </div>
          </Button>
        </div>
      ) : (
        <Button
          size="lg"
          className=" bg-blue-400"
          onClick={() => toggleContentEdit(true)}
        >
          <div className=" flex flex-col items-center">
            <EditIcon />
            <span>Edit</span>
          </div>
        </Button>
      )}
    </div>
  );
};

export default ContentEditButton;
