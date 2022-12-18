import React from 'react';

function About() {
  return (
    <div className="lg:wrapper px-4 mt-24 lg:mt-0 lg:py-40 lg:gap-32 lg:grid lg:grid-cols-2">
      <div>
        <img src="/assets/images/about.svg" alt="" />
      </div>

      <div className="">
        <h2 className=" font-bold text-tertiary mt-8">
          <span className="">
            <span className="text-clip w-max px-1 py-4 bg-secondary">
              <span className="bg-elipse p-3 text-clip">About</span>
            </span>
          </span>
          holy quran
        </h2>
        <div className="lg:w-[29.4rem] text-gray-700 mt-2">
          <p>
            The Quran, also romanized Qur'an or Koran, is the central religious
            text of Islam, believed by Muslims to be a revelation from Allah. It
            is organized in 30 chapters, 114 surahs which consist of 6666
            verses.
          </p>
          <p className="mt-3.5">
            In addition to its religious significance, it is widely regarded as
            the finest work in Arabic literature.
          </p>
        </div>

        <button className="button2 bg-secondary font-bold text-gray-800 mt-9">
          Learn More
        </button>
      </div>
    </div>
  );
}

export default About;
