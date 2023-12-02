import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-white border-gray-200 px-4 rounded shadow lg:px-6 py-2.5 dark:bg-gray-800">
    <div className="flex flex-wrap justify-between items-center">
      <div className="flex justify-start items-center">
      
        <a href="https://flowbite.com" className="flex mr-4">
          <img
            src="https://flowbite.s3.amazonaws.com/logo.svg"
            className="mr-3 h-8"
            alt="FlowBite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Kaju Store
          </span>
        </a>
        
        <form action="#" method="GET" className="hidden lg:block lg:pl-2">
          <label htmlFor="topbar-search" className="sr-only">
            Search
          </label>
          <div className="relative mt-1 lg:w-96">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                {" "}
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />{" "}
              </svg>
            </div>
            <input
              type="text"
              name="email"
              id="topbar-search"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-9 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Search"
            />
          </div>
        </form>
      </div>


      <div className="flex items-center lg:order-2">
    
        <button
          id="toggleSidebarMobileSearch"
          type="button"
          className="p-2 text-gray-500 rounded-lg lg:hidden hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          <span className="sr-only">Search</span>
          {/* Search icon */}
          <svg
            className="w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </button>
    

      </div>
    </div>
  </nav>
  )
}

export default Navbar