import { useState } from "react";
// icons
import {
  RiHome3Line,
  RiMoneyDollarCircleLine,
  RiArrowLeftRightFill,
  RiArrowDropUpLine,
  RiCheckboxBlankCircleFill,
  RiListSettingsFill,
  RiLogoutBoxLine,
  RiMenu3Fill,
  RiCloseLine,
  RiSendPlaneFill,
  RiSearchLine,
} from "react-icons/ri";
import { AiOutlineCopy } from "react-icons/ai";

function App() {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className="min-h-screen">
      {/* Sidebar */}
      <div
        className={`bg-white fixed w-6/8 md:w-96 h-full border-r p-8 flex flex-col justify-between overflow transition-all duration-700 lg:left-0 z-50 ${
          menu ? "left-0" : "-left-full"
        }`}
      >
        <div>
          {/* Logo */}
          <h1 className="text-2xl uppercase font-bold mb-10">Tu Logo</h1>
          {/* Info Usuario */}
          <div className="flex items-center gap-4 mb-10">
            <span className="bg-blue-100 py-2 px-[11px] rounded-full text-blue-700 font-medium">
              FG
            </span>
            <div>
              <p className="text-gray-400 text-sm">Web Developer</p>
              <h5 className="font-bold text-lg">Facundo Guardia</h5>
            </div>
          </div>
          {/* menu */}
          <ul>
            <li>
              <a
                href="#"
                className="flex items-center gap-4 text-grey-500 py-2 px-4"
              >
                <RiHome3Line />
                Dashboard
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-4 text-grey-500 py-2 px-4"
              >
                <RiMoneyDollarCircleLine />
                Trade
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex justify-between items-center gap-4 text-grey-500 py-2 px-4"
              >
                <span className="flex items-center gap-4">
                  <RiArrowLeftRightFill />
                  Transfers
                </span>
                <RiArrowDropUpLine />
              </a>
              <ul className="pl-8">
                <li>
                  <a
                    href="#"
                    className="flex items-center gap-4 py-2 px-4 text-gray-500"
                  >
                    <RiCheckboxBlankCircleFill className="text-[8px]" />
                    Overview
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center gap-4 py-2 px-4 text-gray-500"
                  >
                    <RiCheckboxBlankCircleFill className="text-[8px]" />
                    Beneficiaries
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex justify-between items-center gap-4 py-2 px-4 text-gray-500"
                  >
                    <span className="flex items-center gap-4">
                      <RiCheckboxBlankCircleFill className="text-[8px]" />
                      Messages
                    </span>
                    <span className="py-1 px-2 box-content bg-orange-400 text-white rounded-full text-xs">
                      2
                    </span>
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-4 text-grey-500 py-2 px-4"
              >
                <RiListSettingsFill />
                System Settings
              </a>
            </li>
          </ul>
        </div>
        {/* Logout */}
        <ul>
          <li>
            <a
              href="#"
              className="flex items-center gap-4 text-grey-500 py-2 px-4"
            >
              <RiLogoutBoxLine />
              Logout
            </a>
          </li>
        </ul>
      </div>
      {/* Button Menu Movil */}
      <button
        onClick={toggleMenu}
        className="lg:hidden fixed bottom-6 right-6 border p-3 rounded-full bg-white "
      >
        {menu ? <RiCloseLine /> : <RiMenu3Fill />}
      </button>
      {/* Header */}
      <header className="bg-white fixed lg:ml-96 w-full lg:w-[calc(100%-384px)] border-b">
        <div className=" flex items-center justify-between p-8">
          <h1 className="text-3xl font-bold">Messages</h1>
          <button className="flex items-center gap-4 border text-blue-900 font-bold p-4 rounded-lg">
            <RiSendPlaneFill />
            New Message
          </button>
        </div>
        <div className="bg-gray-100 grid grid-cols-1 md:grid-cols-4 p-4">
          <form className="col-span-1 p-4 border-r ">
            <div className="relative">
              <RiSearchLine className="text-blue-900 absolute top-1 translate-y-1/2  left-2" />
              <input
                type="text"
                className="bg-white w-full py-2 px-10 outline-none rounded-lg border border-transparent focus:border-blue-700"
                placeholder="Search"
              />
            </div>
          </form>
          <div className="col-span-3 p-4 flex items-center justify-between">
            <h3 className="">Error code CR045</h3>
            <p className="flex items-center gap-2 text-blue-900 ">
              {" "}
              <span className="text-gray-500">Transaction</span>123456{" "}
              <AiOutlineCopy className="hover:cursor-pointer text-xl" />
            </p>
          </div>
        </div>
      </header>
      {/* Main */}
      <main className="lg:ml-96 pt-60 h-screen lg:w-[calc(100%-384px)] grid grid-cols-1 lg:grid-cols-4">
        <ul className="col-span-1 border-r p-4 h-full max-h-full overflow-y-scroll">
          <li>
            <a href="#" className="hover:bg-gray-100 block rounded-lg p-2">
              <h5 className="font-bold flex items-center gap-4">
                <RiCheckboxBlankCircleFill className="text-[10px] text-orange-300" />
                Lorem Ipsum
              </h5>
              <p className="text-gray-500 text-sm mb-2 mt-2">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Placeat, voluptate!
              </p>
              <span className="text-xs text-gray-400 ">
                Yesterday, 14:35 hrs
              </span>
            </a>
          </li>
          <li>
            <a href="#" className="hover:bg-gray-100 block rounded-lg p-2">
              <h5 className="font-bold flex items-center gap-4">Lorem Ipsum</h5>
              <p className="text-gray-500 text-sm mb-2 mt-2">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Placeat, voluptate!
              </p>
              <span className="text-xs text-gray-400 ">
                Yesterday, 14:35 hrs
              </span>
            </a>
          </li>
          <li>
            <a href="#" className="hover:bg-gray-100 block rounded-lg p-2">
              <h5 className="font-bold flex items-center gap-4">Lorem Ipsum</h5>
              <p className="text-gray-500 text-sm mb-2 mt-2">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Placeat, voluptate!
              </p>
              <span className="text-xs text-gray-400 ">
                Yesterday, 14:35 hrs
              </span>
            </a>
          </li>
          <li>
            <a href="#" className="hover:bg-gray-100 block rounded-lg p-2">
              <h5 className="font-bold flex items-center gap-4">Lorem Ipsum</h5>
              <p className="text-gray-500 text-sm mb-2 mt-2">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Placeat, voluptate!
              </p>
              <span className="text-xs text-gray-400 ">
                Yesterday, 14:35 hrs
              </span>
            </a>
          </li>
          <li>
            <a href="#" className="hover:bg-gray-100 block rounded-lg p-2">
              <h5 className="font-bold flex items-center gap-4">Lorem Ipsum</h5>
              <p className="text-gray-500 text-sm mb-2 mt-2">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Placeat, voluptate!
              </p>
              <span className="text-xs text-gray-400 ">
                Yesterday, 14:35 hrs
              </span>
            </a>
          </li>
        </ul>
        {/* Container */}
        <div className="col-span-3 relative p-4 h-full overflow-y-scroll">
          <div className="flex justify-center">
            <p className="text-center border py-2 px-4 my-6 rounded-full font-bold">
              Yesterday
            </p>
          </div>
          {/* Message 1 */}
          <div className="flex items-start gap-4">
            <span className="bg-blue-100 py-2 px-[10px] rounded-full text-blue-900 font-bold">
              JC
            </span>
            <div className="">
              <p className="border p-3 bg-gray-100 rounded-tr-2xl rounded-br-2xl rounded-bl-2xl ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                quos sapiente nam eum voluptatum alias corrupti? Debitis magnam
                adipisci laborum voluptas similique quae voluptatibus
                perspiciatis sint, minus ipsa corporis doloribus labore
                consequuntur eligendi quo numquam provident! Tempore provident
                illo eum!Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Unde quos sapiente nam eum voluptatum alias corrupti?
                Debitis magnam adipisci laborum voluptas similique quae
                voluptatibus.
              </p>
              <span className="text-xs text-gray-400 pt-2">
                Yesterday, 14:35 hrs
              </span>
            </div>
          </div>
          <div className="flex justify-center">
            <p className="text-center border py-2 px-4 my-6 rounded-full font-bold">
              Today
            </p>
          </div>
          {/* Message 2 */}
          <div className="flex items-start gap-4 flex-row-reverse">
            <span className="bg-blue-100 py-2 px-[10px] rounded-full text-blue-900 font-bold">
              FG
            </span>
            <div className="">
              <p className="border p-3 bg-blue-700 text-white  rounded-tl-2xl rounded-br-2xl rounded-bl-2xl ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              </p>
              <span className="flex flex-row-reverse text-xs text-gray-400 pt-2">
                12 diciembre 2022, 10:00 hrs
              </span>
            </div>
          </div>
          {/* Send message */}
          <form className="bg-gray-200 absolute w-full bottom-0 left-0 p-6  ">
            <div className="relative">
              <RiSendPlaneFill className=" absolute right-4 top-1/2 -translate-y-1/2 text-[20px] hover:cursor-pointer" />
              <input
                type="text"
                className="bg-white w-full outline-none py-2 pl-6 pr-10  rounded-full border border-transparent focus:border-blue-700"
                placeholder="Write your message"
              />
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

export default App;
