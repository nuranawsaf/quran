import React from 'react';

const Recitering = () => {
  return (
    <div className="bg-primary px-3 lg:px-3">
      <div className="lg:wrapper lg:py-24 py-12 bg-style flex justify-center">
        <div className="lg:w-[40rem]">
          <h2 className=" text-center text-white font-bold">
            Recitering Listening quran is more
            <span className="text-clip w-max px-1 py-4 bg-secondary">
              <span className="bg-primary p-3 text-clip">blog</span>
            </span>
            now
          </h2>
          <h6 className="lg:w-[35.5rem] text-center mt-2 text-gray-300">
            The Quran, also romanized Qur'an or Koran, is the central religious
            text of Islam, believed by Muslims to be a revelation from Allah.
          </h6>
          <div className="mt-9 flex justify-center">
            <img src="/assets/images/googleplay.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recitering;
