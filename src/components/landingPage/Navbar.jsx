import { Fragment,useEffect,useState } from "react";
import Logo from "../../constants/images/formulargray_03.png";
import {userStore} from '../../stores'
import {refreshSession} from '../../data/api/authenticatedRequests'
import { Popover, Transition } from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  BookmarkSquareIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorArrowRaysIcon,
  LifebuoyIcon,
  PhoneIcon,
  PlayIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
const features = [
  {
    name: "Schools",
    href: "/schools",
    description:
      "Get a better understanding of where your traffic is coming from.",
    icon: ChartBarIcon,
  },
  {
    name: "Programs",
    href: "/programs",
    description: "Speak directly to your customers in a more meaningful way.",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Visa",
    href: "/visa",
    description: "Your customers' data will be safe and secure.",
    icon: ShieldCheckIcon,
  },

];
const callsToAction = [
  
];
const resources = [
,
];
const recentPosts = [
  { id: 1, name: "Boost your conversion rate", href: "#" },
  {
    id: 2,
    name: "How to use search engine optimization to drive traffic to your site",
    href: "#",
  },
  { id: 3, name: "Improve your customer experience", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export const Navbar = () => {
  const user = userStore((state) => state.user);
  const setUser = userStore((state) => state.storeUser);
  useEffect(()=>{
   const getUser= async ()=>{
      const res=await refreshSession();
      
      setUser(res.data.user)
    
    }
   
    getUser();

      },[])
  return (
    <div className="relative bg-gray-50">
      <Popover className="relative bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex items-center justify-between py-6 md:justify-start md:space-x-10">
            <div className=" lg:w-0 lg:flex-1  text-gray-500 ">

              {/* <img className="h-12 w-auto" src={Logo} alt="Your Company" /> */}
              {/* <div className=" text-purple-900 text-lg   pr-2 ">Connecting you to quality education, globally</div> */}
            </div>
            <div className="-my-2 -mr-2 md:hidden">
              <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#07443f]">
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            <Popover.Group as="nav" className="hidden space-x-10 md:flex">
              <Popover className="relative">
                {({ open }) => (
                  <>
                   

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
                        <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                          <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                            {features.map((item) => (
                              <Link
                                key={item.name}
                                to={item.href}
                                className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                              >
                                <item.icon
                                  className="h-6 w-6 flex-shrink-0 text-indigo-500"
                                  aria-hidden="true"
                                />
                                <div className="ml-4">
                                  <p className="text-base font-medium text-gray-900">
                                    {item.name}
                                  </p>
                                  <p className="mt-1 text-sm text-gray-500">
                                    {item.description}
                                  </p>
                                </div>
                              </Link>
                            ))}
                          </div>
                          <div className="space-y-6 bg-gray-50 px-5 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                            {callsToAction.map((item) => (
                              <div key={item.name} className="flow-root">
                                <Link 
                                  to={item.href}
                                  className="-m-3 flex items-center rounded-md p-3 text-base font-medium text-gray-900 hover:bg-gray-100"
                                >
                                  <item.icon
                                    className="h-6 w-6 flex-shrink-0 text-gray-400"
                                    aria-hidden="true"
                                  />
                                  <span className="ml-3">{item.name}</span>
                                </Link>
                              </div>
                            ))}
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>

              <Link
              to="/schools"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Schools
              </Link>
              <Link
                to="/programs"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Programs
              </Link>
              <Link
                to="/visa"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Visa
              </Link>

              <Popover className="relative">
                {({ open }) => (
                  <>
                

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 transform px-2 sm:px-0">
                        <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                          <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                            {resources.map((item) => (
                              <Link
                                key={item.name}
                                to={item.href}
                                className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                              >
                                <item.icon
                                  className="h-6 w-6 flex-shrink-0 text-indigo-500"
                                  aria-hidden="true"
                                />
                                <div className="ml-4">
                                  <p className="text-base font-medium text-gray-900">
                                    {item.name}
                                  </p>
                                  <p className="mt-1 text-sm text-gray-500">
                                    {item.description}
                                  </p>
                                </div>
                              </Link>
                            ))}
                          </div>
                          <div className="bg-gray-50 px-5 py-5 sm:px-8 sm:py-8">
                            <div>
                              <h3 className="text-base font-medium text-gray-500">
                                Recent Posts
                              </h3>
                              <ul role="list" className="mt-4 space-y-4">
                                {recentPosts.map((item) => (
                                  <li
                                    key={item.id}
                                    className="truncate text-base"
                                  >
                                    <Link
                                      to={item.href}
                                      className="font-medium text-gray-900 hover:text-gray-700"
                                    >
                                      {item.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="mt-5 text-sm">
                              <a
                                href="#"
                                className={`font-medium text-indigo-500 hover:text-indigo-700`}
                              >
                                View all posts
                                <span aria-hidden="true"> &rarr;</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
            </Popover.Group>
          {!user&&  <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
              <Link
                to="/signin"
                className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Sign in
              </Link>
              <Link
                to="/signup"
                className="ml-8 inline-flex items-center bg-indigo-500 justify-center whitespace-nowrap rounded-md border border-transparent px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
              >
                Sign up
              </Link>
            </div>||
           <Link to={user&&user?.role=='admin'?'/adminDashboard':user&&user?.role=='student'?'/studentDashboard':'/dashboard'}> <div className="hidden md:block cursor-pointer font-semibold capitalize text-purple-900">
              {user &&user.firstName && user.firstName|| user.email && user.email.split("@")[0]}
           
            </div></Link>}
          </div>
        </div>

        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden"
          >
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pt-5 pb-6">
                <div className="flex items-center justify-between">
                  <div className="flex justify-start lg:w-0 lg:flex-1 text-base font-medium text-gray-500 hover:text-gray-900">
                    {/* <a href="/">
                      <span className="sr-only">Formula Gray</span>
                      <span className="pt-3 text-indigo-500">
                        Formula
                      </span>
                      Gray
                    </a> */}
                    <img
                      className="h-12 w-auto"
                      src={Logo}
                      alt="Your Company"
                    />
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#07443f]">
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-8">
                    {features.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
                      >
                        <item.icon
                          className="h-6 w-6 flex-shrink-0 text-indigo-500"
                          aria-hidden="true"
                        />
                        <span className="ml-3 text-base font-medium text-gray-900">
                          {item.name}
                        </span>
                      </Link>
                    ))}
                  </nav>
                </div>
              </div>
              <div className="space-y-6 py-6 px-5">
                <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                  <a
                    href="#"
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    Pricing
                  </a>

                  <a
                    href="#"
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    About us
                  </a>
                  {resources.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-base font-medium text-gray-900 hover:text-gray-700"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div>
                  <Link
                    to="/signup"
                    className="flex w-full items-center  bg-indigo-500 justify-center rounded-md border border-transparent px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                  >
                    Sign up
                  </Link>
                  <p className="mt-6 text-center text-base font-medium text-gray-500">
                    Existing customer?
                    <Link
                      to="/signin"
                      className="text-indigo-500 hover:text-indigo-700"
                    >
                      Sign in
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  );
};
