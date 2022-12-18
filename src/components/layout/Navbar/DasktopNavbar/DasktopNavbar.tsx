import React, { useState } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';

import { links } from '../navdata';

const DasktopNavbar = () => {
  const [active, setActive] = useState(0);

  return (
    <div className="wrapper">
      <nav className=" py-7 hidden lg:block  border-b-2 border-primary">
        <div className="  flex items-center justify-between">
          <div>
            <Link href="/">
              <img src="/assets/images/Logo.svg" alt="Brand Logo" />
            </Link>
          </div>

          <div className="flex items-center gap-10  ">
            {links.map((link) => {
              return (
                <Link key={link.id} href={link.href}>
                  <a className="" href="">
                    {link.title}
                  </a>
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-8">
            <h6 className="font-semibold">Log in</h6>

            <div className="bg-primary rounded-md px-7 py-2">
              <button className="text-white ">Sign up</button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default DasktopNavbar;
