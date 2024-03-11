'use client';
import { Button } from '../ui/button';
import { useStore } from '@/common/store/store';
import AddIcon from '../../../public/icons/+.svg';
import CheckIcon from '../../../public/icons/done.svg';
import EditIcon from '../../../public//icons/edit.svg';
import { instance } from '@/lib/axiosClient';
import { useTextList } from '@/common/hooks/useTextList';

const EditButton = () => {
  const { sidebarEdit, toggleSidebarEdit } = useStore();
  const { listTrigger } = useTextList();
  const data = {
    title: 'タイトル',
    body: 'コンテンツ',
  };
  const createText = async () => {
    try {
      await instance.post('/content', data);
      listTrigger();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      {sidebarEdit ? (
        <div className=" w-full flex justify-between">
          <Button
            className=" border-blue-400"
            size="lg"
            variant="outline"
            onClick={() => createText()}
          >
            <div className=" flex flex-col items-center">
              <AddIcon />
              <span className=" text-blue-400">New page</span>
            </div>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className=" bg-blue-400"
            onClick={() => toggleSidebarEdit(false)}
          >
            <div className=" flex flex-col items-center">
              <CheckIcon />
              <span className=" text-white">Done</span>
            </div>
          </Button>
        </div>
      ) : (
        <div className=" w-full flex justify-end">
          <Button
            variant="outline"
            className=" bg-blue-400"
            size="lg"
            onClick={() => toggleSidebarEdit(true)}
          >
            <div className=" flex flex-col items-center">
              <EditIcon />
              <span className="text-white">Edit</span>
            </div>
          </Button>
        </div>
      )}
    </div>
  );
};

export default EditButton;
