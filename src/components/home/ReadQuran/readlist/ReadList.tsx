import React from 'react';

import { readqurandata } from '../readquran-data';

const ReadList = () => {
  return (
    <div className="lg:grid lg:grid-cols-3 gap-x-6 ">
      {readqurandata.map((item, index) => {
        return (
          <div className="bg-white rounded-md py-5 my-4 px-5 lg:w-[23.1rem] gap-4 flex">
            <div className="bg-elipse h-max w-max rounded-md py-2 px-3">
              {item.number}
            </div>

            <div className=" flex justify-between w-full">
              <div>
                <h5 className="text-xl font-bold text-tertiary">
                  {item.title}
                </h5>
                <h6 className="text-sm text-gray-600">{item.info}</h6>
              </div>
              <div className="text-right">
                <h5 className="text-xl font-bold text-tertiary">
                  {item.arabic}
                </h5>
                <h6 className="text-sm text-gray-600">{item.count}</h6>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ReadList;
