import { Fragment, useState } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";
import Logo from "../../constants/images/formulargray_03.png";
import {
  Bars3BottomLeftIcon,
  HomeIcon,
  XMarkIcon,
  FolderIcon,
  InboxIcon,
  ChartBarIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: HomeIcon, current: true },
  {
    name: "Applications",
    href: "/applications",
    icon: InboxIcon,
    current: false,
  },
  { name: "Students", href: "/students", icon: UsersIcon, current: false },
  { name: "Programs", href: "/programs", icon: FolderIcon, current: false },
  { name: "Schools", href: "/schools", icon: UsersIcon, current: false },
  { name: "Visa", href: "/visa", icon: ChartBarIcon, current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div className="flex min-h-full">
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 lg:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative flex w-full max-w-xs flex-1 bg-gray-500 flex-col pt-5 pb-4">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 right-0 -mr-12 pt-2">
                      <button
                        type="button"
                        className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex flex-shrink-0 items-center px-4">
                    <a href="/" className="text-white">
                      <span className="sr-only">FormularGray</span>
                      <span className="pt-3 font-bold text-lg">
                        FormularGray
                      </span>
                    </a>
                  </div>
                  <div className="mt-5 h-0 flex-1 overflow-y-auto">
                    <nav className="px-2">
                      <div className="space-y-1">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current
                                ? "bg-gray-900 text-white"
                                : "text-gray-300 hover:bg-gray-700 hover:text-white",
                              "group flex items-center px-2 py-2 text-base font-medium rounded-md"
                            )}
                            aria-current={item.current ? "page" : undefined}
                          >
                            <item.icon
                              className={classNames(
                                item.current
                                  ? "text-gray-300"
                                  : "text-gray-400 group-hover:text-gray-300",
                                "mr-4 flex-shrink-0 h-6 w-6"
                              )}
                              aria-hidden="true"
                            />
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
              <div className="w-14 flex-shrink-0" aria-hidden="true">
                {/* Dummy element to force sidebar to shrink to fit close icon */}
              </div>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-40">
          {/* Sidebar component */}
          <div className="flex min-h-0 flex-1 flex-col">
            <div className="flex h-16 flex-shrink-0 items-center px-4">
              <div className="text-lg font-bold text-black">
                <div className="mt-1">
                  <a href="/">
                    <img src={Logo} />
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col overflow-y-auto ">
              <nav className="flex-1 px-2 py-4">
                <div className="space-y-1">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "text-indigo-500"
                          : "text-indigo-500 hover:bg-indigo-700 hover:text-white",
                        "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      <item.icon
                        className={classNames(
                          item.current
                            ? "text-indigo-500"
                            : "text-indigo-500 group-hover:text-white",
                          "mr-3 flex-shrink-0 h-6 w-6"
                        )}
                        aria-hidden="true"
                      />
                      {item.name}
                    </a>
                  ))}
                </div>
              </nav>
            </div>
          </div>
        </div>
        <div className="flex w-0 flex-1 flex-col lg:pl-64">
          <div className="sticky top-0 z-10 flex h-16 fixed flex-shrink-0 border-b border-gray-200 bg-white">
            <button
              type="button"
              className="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-900 lg:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <Bars3BottomLeftIcon className="h-6 w-6" aria-hidden="true" />
            </button>
            <div className="flex flex-1 justify-between px-4">
              <div className="flex flex-1"></div>
              <div className="ml-4 flex items-center lg:ml-6">
                <div className="lg:ml-4 lg:flex lg:items-center">
                  {/* Profile dropdown */}
                  <Menu as="div" className="relative ml-4 flex-shrink-0">
                    <div className="flex">
                      <div className="ml-3 mr-3">
                        <div className="text-base font-medium text-indigo-500">
                          Dennis
                        </div>
                        <div className="text-sm text-center text-gray-300">
                          Agent
                        </div>
                      </div>

                      <div>
                        <Menu.Button className="flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                          <span className="sr-only">Open user menu</span>
                          <img
                            className="h-8 w-8 rounded-full"
                            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                            alt=""
                          />
                        </Menu.Button>
                      </div>
                    </div>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="/"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Menu link
                            </a>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
