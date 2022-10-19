import { useState } from "react";
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
} from "react-icons/ri";

function App() {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className="min-h-screen ">
      {/* // sidebar */}
      <div
        className={`bg-white fixed w-6/8 md:w-96 h-full border-r p-8 flex flex-col justify-between overflow-y-scroll transition-all duration-700 lg:left-0 ${
          menu ? "left-0" : "-left-full"
        }`}
      >
        <div>
          {/* logo */}
          <h1 className="text-2xl uppercase font-bold mb-10">Tu Logo</h1>
          {/* info usuario */}
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
        {/* logout */}
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
      {/* button menu */}
      <button
        onClick={toggleMenu}
        className="lg:hidden fixed bottom-6 right-6 border p-3 rounded-full bg-white "
      >
        {menu ? <RiCloseLine /> : <RiMenu3Fill />}
      </button>
      {/* Header */}
      <header className="bg-white fixed lg:ml-96 w-full lg:w-[calc(100%-384px)] border-b p-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold">Messages</h1>
        <button className="flex items-center gap-4 border text-blue-900 font-bold p-4 rounded-lg">
          <RiSendPlaneFill />
          New Message
        </button>
      </header>
    </div>
  );
}

export default App;
