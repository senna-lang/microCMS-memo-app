'use client';
import { Button } from '../ui/button';
import { useStore } from '@/common/store/store';
import SaveIcon from '../../../public/icons/save.svg';
import CancelIcon from '../../../public/icons/cancel.svg';
import EditIcon from '../../../public/icons/edit.svg';
import { instance } from '@/lib/axiosClient';
import { useTextDetail } from '@/common/hooks/useTextDetail';

const ContentEditButton = () => {
  const { contentEdit, toggleContentEdit, textId, content } = useStore();
  const { detailTrigger } = useTextDetail(textId);
  const data = {
    body: content,
  };
  const handleAppDate = async (id: number | null) => {
    try {
      await instance.put(`/content/${id}`, data);
      toggleContentEdit(false);
      detailTrigger();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      {contentEdit ? (
        <div className=" w-full flex justify-between">
          <Button
            variant="outline"
            className=" bg-blue-400"
            onClick={() => handleAppDate(textId)}
          >
            <div className=" flex flex-col items-center">
              <SaveIcon />
              <span className=" text-white text-xs">Save</span>
            </div>
          </Button>
          <Button
            variant="outline"
            className=" bg-gray-400"
            onClick={() => toggleContentEdit(false)}
          >
            <div className="flex flex-col items-center">
              <CancelIcon />
              <span className=" text-white text-xs">Cancel</span>
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