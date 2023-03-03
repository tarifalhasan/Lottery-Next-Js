import Link from 'next/link';
import { Avatar } from 'flowbite-react';
import { IoNotifications } from 'react-icons/io5';
import { FiChevronDown } from 'react-icons/fi';
const Navigation = () => {
  return (
    <nav className="flex bg-white px-5 border-b border-slate-200 pb-4 items-center justify-between">
      <div className="serach">
        <form className="flex items-center">
          <label htmlFor="simple-search" className="sr-only">
            Search
          </label>
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <input
              type="text"
              id="simple-search"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search"
              required=""
            />
          </div>
          <button
            type="submit"
            className="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <span className="sr-only">Search</span>
          </button>
        </form>
      </div>
      <div>
        <ul className="flex gap-3 items-center">
          <li>
            <IoNotifications size={25} className="text-slate-300" />
          </li>
          <li className="flex gap-2 items-center">
            <Avatar
              img="https://imgs.search.brave.com/w3-1sBiKU9i5eSiU2m7baLvk2vnWWdc1zlp7lvutY9w/rs:fit:640:400:1/g:ce/aHR0cHM6Ly9pbWFn/ZS5jcmljdHJhY2tl/ci5jb20vd3AtY29u/dGVudC91cGxvYWRz/LzIwMTkvMTAvU2hh/a2liLUFsLUhhc2Fu/LTEtMS5qcGc"
              rounded={true}
            />
            <FiChevronDown size={20} className="text-slate-300" />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
