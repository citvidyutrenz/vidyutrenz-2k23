import React, { useState } from 'react';
import { Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

function OffCanvasMenu() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="relative">
      <div className="flex justify-between items-center py-4 md:py-8 px-4 md:px-8 bg-white border-b border-gray-200 md:border-none">
        <div className="flex items-center">
          <h1 className="font-bold text-lg md:text-xl">My App</h1>
        </div>

        <div className="md:hidden">
          <button
            type="button"
            className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
            onClick={toggleMenu}
          >
            <span className="sr-only">Open menu</span>
            <MenuIcon className="w-6 h-6" />
          </button>
        </div>

        <Transition
          show={isOpen}
          enter="transition-opacity duration-150"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="absolute inset-x-0 top-0 p-2 md:hidden">
            <div className="rounded-lg shadow-md bg-white divide-y divide-gray-200">
              <div className="py-6 px-5">
                <div className="flex items-center justify-between">
                  <h1 className="font-bold text-lg">My App</h1>

                  <div className="md:hidden">
                    <button
                      type="button"
                      className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
                      onClick={toggleMenu}
                    >
                      <span className="sr-only">Close menu</span>
                      <XIcon className="w-6 h-6" />
                    </button>
                  </div>
                </div>

                <nav className="mt-6">
                  <ul className="space-y-4">
                    <li>
                      <a
                        href="#"
                        className="font-medium text-gray-600 hover:text-gray-800"
                      >
                        Home
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="font-medium text-gray-600 hover:text-gray-800"
                      >
                        About
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="font-medium text-gray-600 hover:text-gray-800"
                      >
                        Contact
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </div>
  );
}

export default OffCanvasMenu;
