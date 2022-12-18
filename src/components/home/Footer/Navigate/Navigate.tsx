import React from 'react';

const Navigate = () => {
  const navigate = [
    {
      title: 'Home',
    },
    {
      title: 'Reciters',
    },
    {
      title: 'About Us',
    },
    {
      title: 'Donate',
    },
  ];

  return (
    <div className="lg:ml-10">
      <h4 className="text-lg font-bold text-tertiary">Navigate</h4>
      <div className="mt-4">
        {navigate.map((item) => {
          return (
            <div className="mb-[10px]">
              <h6 className="text-gray-700">{item.title}</h6>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Navigate;
