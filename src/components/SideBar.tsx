import React from 'react';
import TextList from './TextList';

const SideBar = () => {
  return (
    <div className="flex h-full flex-col overflow-y-auto bg-white px-5">
      <div className="my-12 flex items-center justify-center">
        <div className=" mr-1 text-3xl font-bold">ServiceName</div>
        <div className=" text-4xl font-extrabold text-blue-600"></div>
      </div>
      <TextList />
    </div>
  );
};

export default SideBar;
