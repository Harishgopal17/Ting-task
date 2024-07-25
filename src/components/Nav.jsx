import { useState } from "react";
import logo from "../assets/logo.png";
import { navLinks } from "../constants";
import { BsFillHandbagFill } from "react-icons/bs";
import { LiaUserCircle } from "react-icons/lia";
import { VscMenu } from "react-icons/vsc";
import { AiOutlineClose } from "react-icons/ai";

export function Nav() {
  const [mblMenu, setMblMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setMblMenu(!mblMenu);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  return (
    <>
      <header
        className={`w-full px-8 fixed z-10 text-[#c8c2c4] ${
          isScrolled && "bg-[#00000080]"
        }  transition-all duration-300`}
      >
        <nav className="flex justify-between items-center">
          <div className="cursor-pointer">
            <a href="/">
              <img src={logo} alt="beejLogo" />
            </a>
          </div>
          <ul className="flex justify-center items-center gap-8 max-md:hidden">
            {navLinks.map((link) => (
              <a href={link.href} key={link.label}>
                <li className="cursor-pointer transition-all duration-300 hover:text-[#fff]">
                  {link.label}
                </li>
              </a>
            ))}
          </ul>
          <div className="flex justify-center items-center gap-8">
            <div className="flex justify-center items-center gap-2">
              <a href="/">
                <BsFillHandbagFill
                  size={20}
                  className="cursor-pointer transition-all duration-300 hover:text-[#fff]"
                />
              </a>
              <a href="/">
                <LiaUserCircle
                  size={25}
                  className="cursor-pointer transition-all duration-300 hover:text-[#fff]"
                />
              </a>
            </div>
            <div className="max-md:hidden cursor-pointer">
              <VscMenu size={25} />
            </div>
            <div
              className="hidden max-md:block z-30 cursor-pointer transition-all ease duration-[600ms]"
              onClick={toggleMenu}
            >
              {!mblMenu ? (
                <VscMenu size={25} />
              ) : (
                <AiOutlineClose size={25} color="black" />
              )}
            </div>
            <div
              className={
                mblMenu
                  ? "fixed top-0 left-0 right-0 w-full h-[50%] z-20 ease duration-[600ms] hidden max-md:block"
                  : "fixed top-[-100%] left-0 right-0 w-full h-[auto] z-20 ease duration-[600ms]"
              }
            >
              <ul className="flex flex-col justify-center items-center pt-9 font-[400] text-[20px] text-black bg-[#dcd8cb]">
                {navLinks.map((link) => (
                  <li
                    className="px-10 py-3 border-b border-slate-gray w-full"
                    key={link.label}
                  >
                    <a href={link.href} onClick={toggleMenu}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
