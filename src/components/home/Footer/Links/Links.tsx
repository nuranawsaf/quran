import React from 'react';

function Links() {
  const linksdata = [
    {
      title: 'Ayatul Kursi',
    },
    {
      title: 'Yaseen',
    },
    {
      title: 'Al Mulk',
    },
    {
      title: 'Ar-Rahman',
    },
    {
      title: "Al Waqi'ah",
    },
    {
      title: 'Al Kahf',
    },
    {
      title: 'Al Muzzammil',
    },
  ];

  return (
    <div>
      <h4 className="text-lg font-bold text-tertiary">Navigate</h4>
      <div className="mt-4">
        {linksdata.map((item) => {
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

export default Links;
