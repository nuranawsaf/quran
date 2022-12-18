import React from 'react';

import { RiArrowUpSLine } from 'react-icons/ri';

import ReadList from './readlist/ReadList';

function ReadQuran() {
  return (
    <div className="lg:wrapper px-4">
      <div className="lg:flex justify-center">
        <h2 className="lg:w-[29.4rem] text-tertiary text-center font-bold mt-24 lg:mt-0 mb-6 lg:mb-0">
          Read holy quran with{' '}
          <span className="">
            <span className="text-clip w-max px-1 py-4 bg-secondary">
              <span className="bg-elipse p-3 text-clip">translations</span>
            </span>
          </span>
        </h2>
      </div>

      <div className="flex justify-between">
        <div className="border p-1 flex border-gray-400 rounded-md w-max">
          <div className="">
            <button className="px-5 text-white text-sm lg:text-base  py-2 rounded-md bg-primary">
              Surah
            </button>
          </div>
          <div>
            <button className="px-5 text-tertiary text-sm lg:text-base py-2 font-bold rounded-md">
              Juz
            </button>
          </div>
        </div>

        <div className="flex items-center text-sm lg:text-base">
          <h4 className="text-gray-500">Sort by:</h4>
          <h4 className="flex items-center text-tertiary font-bold">
            Ascending
            <RiArrowUpSLine />
          </h4>
        </div>
      </div>

      <div className="mt-10">
        <ReadList />
      </div>

      <div className="flex justify-center mt-8 mb-8">
        <button className="px-8 py-3 rounded-md text-tertiary font-bold bg-secondary">
          Show More
        </button>
      </div>
    </div>
  );
}

export default ReadQuran;
