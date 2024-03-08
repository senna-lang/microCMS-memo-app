'use client';
import MainArea from '@/components/MainArea';
import SideBar from '@/components/SideBar';

const Home = () => {
  return (
    <div>
      <div className="h-screen items-center justify-center bg-slate-300 md:flex">
        <div className="h-full md:flex xl:w-[1280px]">
          <div className="h-full border-r md:w-1/4">
            <SideBar />
          </div>
          <div className="max-h-screen md:w-3/4">
            <MainArea />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
