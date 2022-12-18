import React from 'react';

import BlogList from './bloglist/BlogList';

function LatestBlog() {
  return (
    <div className="bg-white">
      <div className="lg:wrapper px-4 lg:px-4 ">
        <div className="  flex justify-center">
          <div className="lg:w-[26.8rem] mt-20 lg:mt-[10rem] ">
            <h2 className="text-tertiary font-bold text-center">
              Latest Islamic{' '}
              <span className="text-clip w-max px-1 py-4 bg-secondary">
                <span className="bg-white p-3 text-clip">blog</span>
              </span>
            </h2>
            <p className="text-center text-tertiary mt-3 lg:mt-0">
              Read top free Islamic articles & blog posts on the Internet and
              know about islam.
            </p>
          </div>
        </div>

        <div className="mt-12 lg:pb-14">
          <BlogList />
        </div>
        <div className="flex justify-center pb-20 lg:pb-40">
          <button className="button2 bg-secondary text-tertiary font-bold">
            Read All
          </button>
        </div>
      </div>
    </div>
  );
}

export default LatestBlog;
