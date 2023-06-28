import React from 'react';
import { logoas } from '../../assets/index';
import { navLinksdata } from '../../constants';

const Navbar = () => {
  return (
    <div className="w-full h-20 mx-auto flex justify-between items-center ">
      <div>
        <img className="w-full h-16"  src={logoas} alt="logo" />
      </div>
      <div>
        <ul className='flex items-center gap-10'>
          {
            navLinksdata.map((navLink)=>(
              <li className='text-base font-normal text-grey-400 cursor-pointer hover:text-designColor duration-300'
              key={navLink._id}>{navLink.title}
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default Navbar
