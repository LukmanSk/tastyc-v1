"use client";

import Image from "next/image";
import logo from "@/public/logo-white.png";
import CartIcon from "../_components/icons/CartIcon";
import HamburgerIcon from "../_components/icons/HamburgerIcon";
import NavMenu from "../_components/NavMenu";
import { useState } from "react";
import Link from "next/link";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <header className="fixed w-full z-[1000]  " >
      <nav className="section flex items-center justify-between px-8 py-4 text-white">
        <Link href="/" className="logo">
          <Image width={130} height={130} src={logo} alt="logo" />
        </Link>

        {/* menu */}
        <NavMenu  isOpen={isOpen} />

        {/*  */}
        <div className="buttons flex items-center gap-4 ">
          <button className="cart  relative ">
            <CartIcon className="w-7 " />
            <span className="badge absolute text-sm top-0 -right-1 bg-tertiary rounded-full w-2/3 h-2/3">
              0
            </span>
          </button>
          <button onClick={toggleMenu} className="hamburger">
            <HamburgerIcon className="w-8" />
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
