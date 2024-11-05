import { useEffect, useMemo, useState } from 'react';
import { NavLink } from 'react-router-dom';

import useSWR from 'swr';

import axios from '../../configs/axios';
import AccountSideToggle from './AccountSideToggle';
import SearchBarBtn from './SearchBarBtn';

const NavBar = ({ navdata }) => {
  const fetcher = (url) => axios.get(url).then((response) => response.data);
  const { data, error, isLoading } = useSWR('/user/profile', fetcher);
  console.log(data);

  const [name, setname] = useState('name');
  useEffect(() => {
    if (data) {
      setname(data.user.name);
    }
  }, []);

  const dropdownnav = [
    { title: 'Profile', href: '/' },
    { title: 'Settings', href: '/' },
    { title: 'Logout', href: '/' },
  ];

  return (
    <div className="main-nav w-[90%] fixed top-0 left-0 right-0 rounded-bl-xl rounded-br-xl mx-auto bg-zinc-100 shadow-md z-50">
      <div className="container-nav h-16 mx-5 flex justify-between items-center relative">
        <div className="left flex items-center space-x-4">
          <h1 className="text-xl font-semibold text-gray-800">Hii, {name}</h1>
          <div className="location relative">
            <i className="absolute left-3 top-1/2 transform -translate-y-1/2 text-lg text-gray-500 ri-map-pin-line"></i>
            <input
              className="bg-white border border-gray-300 rounded-full pl-10 pr-4 py-2 w-full max-w-xs focus:outline-none focus:border-gray-400"
              type="text"
              placeholder="Your current location"
            />
          </div>
        </div>

        <div className="middle flex-grow text-center">
          <h1 className="text-2xl font-bold text-gray-900">Quickbite</h1>
        </div>

        <div className="right flex items-center space-x-4">
          <div className="flex items-center justify-center gap-3">
            <SearchBarBtn />
            {navdata.map((e, i) => (
              <NavLink
                to={e.href}
                className={'text-lg  hover:underline px-1 rounded-md'}
                key={i}
              >
                <i className={`${e.icon} mr-1 `}></i>
                {e.label}
              </NavLink>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <AccountSideToggle />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

{
  /* <div className="relative">
<img
  src="https://via.placeholder.com/40"
  alt="User"
  className="rounded-full cursor-pointer"
  onClick={() => setShowMenu(!showMenu)}
/>
{showMenu && (
  <div className="absolute right-0 mt-8 w-48 bg-white border rounded-md shadow-lg z-10">
    <ul className="py-1">
      {dropdownnav.map((e, i) => (
        <NavLink key={i} to={e.href}>
          <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
            {e.title}
          </li>
        </NavLink>
      ))}
    </ul>
  </div>
)}
</div> */
}
