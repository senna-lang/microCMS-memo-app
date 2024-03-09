'use client';
import { Button } from './ui/button';
import { useStore } from '@/common/store/store';
import AddIcon from '../../public/icons/+.svg';
import CheckIcon from '../../public/icons/done.svg';
import axios from 'axios';
import { useTextDetail } from '@/common/hooks/useTextDetail';

const MainAreaEditButton = () => {
  const { mainAreaEdit, toggleMainAreaEdit, textId } = useStore();
  const { detailTrigger } = useTextDetail(textId);
  const handleAppDate = async (id: number) => {
    await axios.put(`http://localhost:3000/content/${id},`);
    detailTrigger();
  };

  return (
    <div>
      {mainAreaEdit ? (
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
            <Button variant="outline" onClick={() => toggleMainAreaEdit(false)}>
              <CheckIcon />
              <span>キャンセル</span>
            </Button>
          </div>
        </div>
      ) : (
        <div>
          <Button color="blue" onClick={() => toggleMainAreaEdit(true)}>
            編集
          </Button>
        </div>
      )}
    </div>
  );
};

export default MainAreaEditButton;
