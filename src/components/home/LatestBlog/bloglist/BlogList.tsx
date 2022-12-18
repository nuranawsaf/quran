import React from 'react';

import clsx from 'clsx';

import { blogdata } from '../latestblog-data';

function BlogList() {
  return (
    <div className="lg:grid lg:grid-cols-2 lg:gap-8">
      {blogdata.map((item, index) => {
        return (
          <div
            className={clsx(
              'border p-2 lg:p-4 rounded-lg flex items-center gap-7 lg:my-0 my-4',
              item.img == '/assets/images/blog1.svg' &&
                'bg-white border-none  shadow'
            )}
          >
            <div className="w-[19.8rem] lg:w-[24.6rem] ">
              <img src={item.img} alt="" />
            </div>
            <div>
              <h5 className="text-xs lg:text-xl font-bold text-tertiary mb-2 lg:mb-4">
                {item.title}
              </h5>
              <img src="/assets/images/blogborder.svg" alt="" />
              <p className="text-[.63rem] lg:text-sm lg:mt-4 mt-2 lg:w-[16.82rem] ">
                How many times bismillah repeated in Quran? “In the name of God
                the most merciful...
              </p>

              <h6
                className={clsx(
                  'text-[.63rem] lg:text-sm font-bold text-tertiary mt-2 lg:mt-4',
                  item.img == '/assets/images/blog1.svg' && 'text-secondary'
                )}
              >
                {item.read}
              </h6>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default BlogList;
