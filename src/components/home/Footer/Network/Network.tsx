import React from 'react';

function Network() {
  const networkdata = [
    {
      title: 'QuranicAudio.com',
    },
    {
      title: 'Salah.com',
    },
    {
      title: 'Sunnah.com',
    },
    {
      title: 'Legacy.Quran.com',
    },
    {
      title: 'Previous.Quran.com',
    },
  ];

  return (
    <div>
      <h4 className="text-lg font-bold text-tertiary">Navigate</h4>
      <div className="mt-4">
        {networkdata.map((item) => {
          return (
            <div className="mb-[10px]">
              <h6 className="text-gray-700">{item.title}</h6>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Network;
