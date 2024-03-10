'use client';
import { Button } from './ui/button';
import { useStore } from '@/common/store/store';
import AddIcon from '../../public/icons/+.svg';
import CheckIcon from '../../public/icons/done.svg';
import axios from 'axios';
import { useTextDetail } from '@/common/hooks/useTextDetail';
import { useTextList } from '@/common/hooks/useTextList';

const ContentEditButton = () => {
  const { contentEdit, toggleContentEdit, textId, content } = useStore();
  const { detailTrigger } = useTextDetail(textId);
  const { listTrigger } = useTextList();
  const data = {
    body: content,
  };
  const handleAppDate = async (id: number) => {
    await axios.put(`http://localhost:3000/content/${id}`, data);
    toggleContentEdit(false);
    detailTrigger();
    listTrigger();
  };

  return (
    <div>
      {contentEdit ? (
        <div className=" w-full flex justify-between">
          <div>
            <Button
              variant="outline"
              color="blue"
              onClick={() => handleAppDate(textId)}
            >
              <AddIcon />
              <span>セーブ</span>
            </Button>
          </div>
          <div>
            <Button variant="outline" onClick={() => toggleContentEdit(false)}>
              <CheckIcon />
              <span>キャンセル</span>
            </Button>
          </div>
        </div>
      ) : (
        <div>
          <Button color="blue" onClick={() => toggleContentEdit(true)}>
            編集
          </Button>
        </div>
      )}
    </div>
  );
};

export default ContentEditButton;
