import Image from "next/image";
import Script from "next/script";

import home from "../../public/assets/home.svg";
import list from "../../public/assets/list.svg";
import listui from "../../public/assets/list-ui.svg";
import setting from "../../public/assets/setting.svg";
import profile from "../../public/assets/profile.png"

const HeaderBar = () => {
  let navigationList = [
    { icon: home, des: "Home" },
    { icon: list, des: "Contents" },
    { icon: listui, des: "Categories" },
    { icon: setting, des: "Settings" },
  ];



 return (
    <>
      <nav className="fixed z-10 bg-black h-14 w-full flex items-center lg:px-8 px-4 text-white text-sm justify-between ">
        <div id="menu" className="block sm:hidden">
            <Image  src={list} />
        </div>

        <div id="nav-link" className="hidden sm:block">
          <ul className="flex items-center">
            {navigationList.map((e, index) => {
              return (
                <li  className="flex mr-6 hover:cursor-pointer" key={index}>
                  <Image src={e.icon} />
                  <p className=" text-sm ml-3 hover:text-slate-300 hover:font-medium">{e.des}</p>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="flex items-center bg-white py-1 pl-1 pr-4 rounded-3xl">
            <Image src={profile}/>
            <p className="ml-1.5 text-black">İsmail İhsan Bülbül</p>
        </div>
      </nav>

      {/* mobile-menu */}
      <div id="nav-menu" className="z-10 hidden pt-14 items-start bg-slate-900 text-white w-6/12 h-screen mobile-menu transition duration-700 ease-in-out">
        <ul className="flex items-start px-4 pt-8 flex-col">
            {navigationList.map((e, index) => {
              return (
                <li  className="flex mr-6 pb-14 hover:cursor-pointer" key={index}>
                  <Image src={e.icon} />
                  <p className=" text-sm ml-3 hover:text-slate-300 hover:font-weight">{e.des}</p>
                </li>
              );
            })}
          </ul>
        </div>
        <Script id="show-responsive-menu" strategy="lazyOnload">
        {`const btn = document.querySelector("#menu");
            const menu = document.querySelector(".mobile-menu");

            btn.addEventListener("click", () => {
                menu.classList.toggle("hidden");
            });`}
      </Script>
    </>
    
  );
};

export default HeaderBar;
