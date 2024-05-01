import React, { useState } from "react";

export const NavList = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className="background-color: transparent">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                onClick={toggleMobileMenu}
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-expanded={isMobileMenuOpen ? "true" : "false"}
                aria-controls="mobile-menu"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className={`h-6 w-6 ${isMobileMenuOpen ? "hidden" : "block"}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                <svg
                  className={`h-6 w-6 ${isMobileMenuOpen ? "block" : "hidden"}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <img className="h-8 w-auto" src="..\public\assets\images\c-letter-logo-png-17.png" alt="CareerBuilder" />
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <a href="/" className="text-black hover:bg-gray-300 no-underline hover:text-white rounded-md px-3 py-2 text-sm font-medium">Home</a>
                  <a href="#" className="text-black hover:bg-gray-300 no-underline hover:text-white rounded-md px-3 py-2 text-sm font-medium">Contact</a>
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <a class="rounded bg-blue-100	pl-2 pr-2 pt-1 pb-1 no-underline font-semibold" href="/cvbuilder">Build Your CV</a>


              <div className="relative ml-3">
                <div>
                  


                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`${isMobileMenuOpen ? "block" : "hidden"} sm:hidden`} id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <a href="#" className="text-black block hover:bg-gray-200 rounded-md px-3 py-2 text-base font-medium no-underline">Home</a>
            <a href="#" className="text-black block hover:bg-gray-200 hover:text-white block rounded-md px-3 py-2 text-base font-medium no-underline">Contact</a>
          </div>
        </div>
      </nav>
    </>
  );
};
