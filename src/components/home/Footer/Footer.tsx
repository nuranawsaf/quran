import React from 'react';

import { RiArrowDownSLine } from 'react-icons/ri';

import Links from './Links/Links';
import Navigate from './Navigate/Navigate';
import Network from './Network/Network';
import Resources from './Recources/Resources';
import Quran from './quran/Quran';

const Footer = () => {
  return (
    <div className="lg:wrapper px-4 lg:px-0 mt-16">
      <div className="lg:grid grid-cols-5 border-b border-primary pb-7 relative my-6">
        <div className="mb-6">
          <Quran />
        </div>
        <div className="mb-6">
          <Navigate />
        </div>
        <div className="mb-6">
          <Network />
        </div>
        <div className="mb-6">
          <Links />
        </div>
        <div className="mb-6">
          <Resources />
        </div>

        <div className="absolute bottom-0 right-0">
          <img src="/assets/images/Group5769.svg" alt="" />
        </div>
      </div>

      <div className="flex justify-center mb-6">
        <div className="flex items-center text-tertiary">
          <h6>English</h6>
          <RiArrowDownSLine />
        </div>
      </div>
    </div>
  );
};

export default Footer;
