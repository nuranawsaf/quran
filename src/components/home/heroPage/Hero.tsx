import React from 'react';

function Hero() {
  return (
    <div className="bg-pattern">
      <div className="lg:wrapper mx-4">
        <div className="h-max">
          <div className="w-full grid justify-center lg:mt-20 mt-7">
            <div className="lg:w-[43rem]">
              <h1 className=" text-center font-bold text-tertiary text-4xl  lg:text-6xl leading-[2.9rem] lg:leading-[4.5rem]">
                Make self-purification by reading
                <span className="text-clip w-max px-1 py-4 bg-secondary">
                  <span className="bg-elipse p-3 text-clip">Quran</span>
                </span>
              </h1>

              <p className="text-center lg:text-base text-sm text-gray-500 pt-6 pb-10">
                Make self-purification by reading Quran. This website is all
                about holy quran. You can read, you listen and you learn so many
                things about Islam.
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="gap-5 flex">
              <button className="button1 font-bold text-tertiary bg-secondary flex items-center gap-1.5">
                <span>
                  <img src="/assets/images/book.svg" alt="" />
                </span>
                Read Quran
              </button>

              <button className="button1 font-bold border text-tertiary border-primary flex items-center gap-1.5">
                <span>
                  <img src="/assets/images/voice.svg" alt="" />
                </span>
                Read Quran
              </button>
            </div>
          </div>

          <div className=" flex justify-between -mb-[1px] gap-2 mt-8 lg:mt-14">
            <img
              className="w-[11.6rem] lg:w-max"
              src="/assets/images/quran1.svg"
              alt=""
            />
            <img
              className="w-[8.14rem]  lg:w-max"
              src="/assets/images/quran2.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
