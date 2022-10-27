import React, { Fragment, useState, useEffect } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "../../constants/images/formulargray_03.png";

const navigation = [];

export const Countdown = () => {
  const [day, setDay] = useState("");
  const [hour, setHour] = useState("");
  const [minute, setMinute] = useState("");
  const [second, setSecond] = useState("");
  const [partners, setPartners] = useState(150);
  var countDownDate = new Date("Dec 1, 2022 00:00:00").getTime();

  useEffect(()=>{
     let startValue = 0;
     let endValue = 500;

     const counter = () => {
       startValue++;
       setPartners(startValue);
       if (startValue === endValue) {
         clearInterval(partnerCounter);
       }
     };
  let partnerCounter = setInterval(counter, 5);
  },[])

  var myTimer = setInterval(function () {
    var now = new Date().getTime();
    var timeleft = countDownDate - now;
    var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
    setDay(days);
    setHour(hours);
    setMinute(minutes);
    setSecond(seconds);
  }, 1000);

 

  return (
    <div className="relative overflow-hidden bg-gray-50">
      <div
        className="hidden sm:absolute sm:inset-y-0 sm:block sm:h-full sm:w-full"
        aria-hidden="true"
      >
        <div className="relative mx-auto h-full max-w-7xl">
          <svg
            className="absolute right-full translate-y-1/4 translate-x-1/4 transform lg:translate-x-1/2"
            width={404}
            height={784}
            fill="none"
            viewBox="0 0 404 784"
          >
            <defs>
              <pattern
                id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={784}
              fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
            />
          </svg>
          <svg
            className="absolute left-full -translate-y-3/4 -translate-x-1/4 transform md:-translate-y-1/2 lg:-translate-x-1/2"
            width={404}
            height={784}
            fill="none"
            viewBox="0 0 404 784"
          >
            <defs>
              <pattern
                id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={784}
              fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"
            />
          </svg>
        </div>
      </div>

      <div className="relative pt-6 pb-16 sm:pb-24">
        <Popover>
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <nav
              className="relative flex items-center justify-between sm:h-10 md:justify-center"
              aria-label="Global"
            >
              <div className="flex flex-1 items-center md:absolute md:inset-y-0 md:left-0">
                <div className="flex w-full items-center justify-between md:w-auto">
                  <a href="#">
                    <span className="sr-only">Your Company</span>
                    <img className="h-8 w-auto sm:h-10" src={Logo} alt="" />
                  </a>
                  <div className="-mr-2 flex items-center md:hidden">
                    <Popover.Button className="inline-flex items-center justify-center rounded-md bg-gray-50 p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Open main menu</span>
                      <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
              </div>
              <div className="hidden md:flex md:space-x-10">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="font-medium text-gray-500 hover:text-gray-900"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="flex hidden md:absolute md:inset-y-0 md:right-0 md:flex md:items-center md:justify-end">
                <div className="text-md font-bold text-indigo-600 p-1">
                  Tel:
                </div>
                <div className="text-md font-bold text-indigo-600 p-1">
                  +234 701 0000 641
                </div>
                <div className="text-md font-bold text-indigo-600 p-1">|</div>
                <div className="text-md font-bold text-indigo-600 p-1">
                  Email:
                </div>
                <div className="text-md font-bold text-indigo-600 p-2">
                  partners@formulagray.io
                </div>
              </div>
            </nav>
          </div>

          <Transition
            as={Fragment}
            enter="duration-150 ease-out"
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
              <div className="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5">
                <div className="flex items-center justify-between px-5 pt-4">
                  <div>
                    <img className="h-8 w-auto" src={Logo} alt="" />
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="px-2 pt-2 pb-3">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                {/* <a
                  href="#"
                  className="block w-full bg-gray-50 px-5 py-3 text-center font-medium text-indigo-600 hover:bg-gray-100"
                >
                  Log in
                </a> */}
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>

        <main className="mx-auto mt-16 max-w-7xl px-4 sm:mt-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-600 sm:text-5xl md:text-6xl">
              <span className="block xl:inline">WE'RE COMING SOON</span>
            </h1>
            <p className="mx-auto mt-3 max-w-md text-base text-gray-500 sm:text-lg md:mt-5 md:max-w-3xl md:text-xl">
              We are putting together the best Institutions globally and
              developing the best user experience for you to be able to make
              applications for your students easily.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 md:w-1/2  text-white font-bold text-xl mx-auto ">
              <div className="border w-36 h-36 grow-0 shrink-0 rounded-full p-10 border-2 bg-gray-500 hover:bg-blue-500">
                {day}
                <br />
                Days
              </div>
              <div className="border w-36 h-36 grow-0 shrink-0 rounded-full p-10 border-2 bg-gray-500 hover:bg-blue-500">
                {hour}
                <br />
                Hours
              </div>
              <div className="border w-36 h-36 grow-0 shrink-0 rounded-full p-10 border-2 bg-gray-500 hover:bg-blue-500">
                {minute}
                <br />
                Minutes
              </div>
              <div className="border w-36 h-36 grow-0 shrink-0 rounded-full p-10 border-2 bg-gray-500 hover:bg-blue-500">
                {second}
                <br />
                Seconds
              </div>
            </div>
            <div className="flex text-gray-600 font-bold text-xl justify-center m-3 ">
              <div className="border w-48 h-48 grow-0 shrink-0 rounded-md p-8 border-2 m-3 shadow-lg">
                Recruitment partners <br />
                <br />
                <span>{partners}</span> +
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
