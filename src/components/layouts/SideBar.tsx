import React from 'react';
import TextList from './TextList';
import EditButton from '../elements/SidebarEditButton';
import ServiceIcon from '../../../public/icons/logo.svg';

const SideBar = () => {
  return (
    <div className="flex h-full flex-col overflow-y-auto bg-white px-5">
      <div className="my-12 flex items-center justify-center">
        <div className=" w-full flex justify-around items-center mr-1 text-3xl font-bold">
          <ServiceIcon />
          <h1>ServiceName</h1>
        </div>
        <div className=" text-4xl font-extrabold text-blue-600"></div>
      </div>
      <TextList />
      <div className="w-full p-2">
        <EditButton />
      </div>
    </div>
  );
};

export default SideBar;
