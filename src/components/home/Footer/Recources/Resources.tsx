import React from 'react';

function Resources() {
  const resourcesdata = [
    {
      title: 'Mobile Apps',
    },
    {
      title: 'Developers',
    },
    {
      title: 'Product Updates',
    },
    {
      title: 'Feedback',
    },
    {
      title: 'Help',
    },
  ];

  return (
    <div>
      <h4 className="text-lg font-bold text-tertiary">Navigate</h4>
      <div className="mt-4">
        {resourcesdata.map((item) => {
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

export default Resources;
