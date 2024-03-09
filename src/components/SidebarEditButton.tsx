'use client';
import { Button } from './ui/button';
import { useStore } from '@/common/store/store';
import AddIcon from '../../public/icons/+.svg';
import CheckIcon from '../../public/icons/done.svg';
import axios from 'axios';
import { useTextList } from '@/common/hooks/useTextList';

const EditButton = () => {
  const { sidebarEdit, toggleSidebarEdit } = useStore();
  const { listTrigger } = useTextList();
  const data = {
    title: 'タイトル',
    body: 'コンテンツ',
  };
  const createText = async () => {
    await axios.post('http://localhost:3000/content', data);
    listTrigger();
  };
  return (
    <div>
      {sidebarEdit ? (
        <div className=" w-full flex justify-between">
          <div>
            <Button variant="outline" color="blue" onClick={() => createText()}>
              <AddIcon />
              <span>New page</span>
            </Button>
          </div>
          <div>
            <Button variant="outline" onClick={() => toggleSidebarEdit(false)}>
              <CheckIcon />
              <span>完了</span>
            </Button>
          </div>
        </div>
      ) : (
        <div>
          <Button color="blue" onClick={() => toggleSidebarEdit(true)}>
            編集
          </Button>
        </div>
      )}
    </div>
  );
};

export default EditButton;
