import React from 'react';

import clsx from 'clsx';

import { quranchapterdata } from './quaranchapter-data';

function QuranChapter() {
  return (
    <div className="w-full  bg-primary py-14 ">
      <div className="lg:wrapper lg:flex text-center">
        {quranchapterdata.map((item) => {
          return (
            <div
              className={clsx(
                'border-r border-gray-500 px-14 py-4 lg:py-0',
                item.title == 'Madani Surahs' && 'border-none'
              )}
            >
              <h2 className="text-secondary text-[1.63rem] lg:text-[2.5rem] font-bold">
                {item.count}
              </h2>
              <h6 className="text-white">{item.title}</h6>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default QuranChapter;
