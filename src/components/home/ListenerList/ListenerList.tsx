import React from 'react';

import ListenNow from './listenNow/ListenNow';

function ListenerList() {
  return (
    <div className="bg-primary  lg:py-24 py-8 lg:flex justify-between relative">
      <div className="lg:flex   gap-6 ">
        <div className=" hidden lg:block">
          <img src="/assets/images/listen1.svg" alt="" />
        </div>

        <div className="lg:hidden block my-6 mx-4">
          <h2 className="text-white font-bold">
            Listen by your favorite{' '}
            <span className="text-clip w-max px-1 py-4 bg-secondary">
              <span className="bg-primary p-3 text-clip">Reciters</span>
            </span>
          </h2>
          <p className="text-gray-300 mt-4 ">
            Listen holy quran by your favourite reciters and feel the best of
            quran.{' '}
          </p>
        </div>

        <div className=" relative px-4 lg:px-0">
          <img src="/assets/images/listen2.svg" alt="" />
          <div className="absolute bottom-8 left-16">
            <ListenNow />
          </div>
        </div>
      </div>
      <div className="lg:w-[23.1rem] lg:mr-16 ">
        <h2 className="text-white font-bold hidden lg:block">
          Listen by your favorite{' '}
          <span className="text-clip w-max px-1 py-4 bg-secondary">
            <span className="bg-primary p-3 text-clip">Reciters</span>
          </span>
        </h2>
        <p className="text-gray-300 mt-4 hidden lg:block">
          Listen holy quran by your favourite reciters and feel the best of
          quran.{' '}
        </p>

        <div className="mt-9 w-max  px-4 lg:px-0">
          <img src="/assets/images/Arrows.svg" alt="" />
        </div>
      </div>

      <div className="absolute bottom-6 hidden lg:block right-6">
        <img src="/assets/images/listenBg.svg" alt="" />
      </div>
    </div>
  );
}

export default ListenerList;
