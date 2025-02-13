/** @format */
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { IoMdArrowBack } from "react-icons/io";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import logo from '../../../../frontend/public/logo.png'


const navItems = [
  {
    label: "Home",
    link: "/"
  },
  {
    label: "About Us",
    link: "/about"
  },


];

export default function Navbar() {
  const [animationParent] = useAutoAnimate();
  const [isSideMenuOpen, setSideMenue] = useState(false);
  const [isMounted, setIsMounted] = useState(false);


  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // Prevent rendering on the server
  }
  function openSideMenu() {
    setSideMenue(true);
  }
  const  closeSideMenu = ()  => {
    setSideMenue(false);
  }

  return (
    <div className="">
    <div className="mx-auto flex  w-full bg-green-100  justify-between  py-3 text-md">
      {/* left side  */}
      <section ref={animationParent} className="flex w-full px-12 justify-start  items-center">
        {/* logo */}
        <div className="flex items-center space-x-3">
              <Link href="/" className="flex items-center space-x-3">
                <div className=" rounded-full  flex items-center justify-center">
                <Image className="rounded-full border border-green-800" src={logo} alt="logo" width={75}/>
                </div>
               
              </Link>
            </div>
        {isSideMenuOpen && <MobileNav closeSideMenu={closeSideMenu} />}
        <div className="hidden  xl:flex space-x-12 items-center w-full justify-center gap-2 transition-all">
          {navItems.map((d, i) => (
            <Link
              key={i}
              href={d.link ?? "#"}
              className="relative group  px-1 py-3 transition-all "
            >
              <p className="flex cursor-pointer items-center  text-gray-800 ">
                <span className="text-xl">{d.label}</span>
               
              </p>

              {/* dropdown */}
              {d.children && (
                <div className="absolute   right-0 z-50   top-10 hidden w-auto  flex-col gap-1   rounded-lg bg-primary py-3 shadow-md  transition-all group-hover:flex ">
                  {d.children.map((ch ,i) => (
                    <Link
                      key={i}
                      href={ch.link}
                      className=" flex cursor-pointer items-center  py-1 pl-6 pr-8  text-neutral-400 hover:text-black  "
                    >
                      {/* image */}
                      {ch.iconImage && (
                        <Image src={ch.iconImage} alt="item-icon" />
                      )}
                      {/* item */}
                      <span className="whitespace-nowrap  hover:border-b-[2px] hover:border-white text-white">
                        {ch.label}
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </Link>
          ))}
        </div>
        {/* navitems */}
      </section>

      {/* right side data */}
    

     {
      isSideMenuOpen ? null : (
        <FiMenu
        onClick={openSideMenu}
        className="cursor-pointer text-4xl xl:hidden text-primary"
      />
      )
     }
    </div>
    </div>
  );
}

function MobileNav( {closeSideMenu}) {
  return (
    <div className="fixed bg-green-100 z-50 left-0 top-0 flex h-full w-full justify-end xl:hidden">
      <div className="h-full w-[65%]  bg-primary  px-4 py-4">
        <section className="flex justify-end">
          <AiOutlineClose
            onClick={closeSideMenu}
            className="cursor-pointer text-4xl text-black"
          />
        </section>
        <div className="flex flex-col gap-2 text-base text-white transition-all">
          {navItems.map((d , i) => (
            <SingleNavItem
              key={i}
              label={d.label}
              iconImage={d.iconImage}
              link={d.link}
              closeSideMenu={closeSideMenu}
              
            >
              {d.children}
            </SingleNavItem>
          ))}
        </div>
      </div>
    </div>
  );
}


function SingleNavItem({ label, link, children, closeSideMenu }) {
  const [animationParent] = useAutoAnimate();
  const [isItemOpen, setItem] = useState(false);

  function toggleItem() {
    setItem(!isItemOpen);
  }

  return (
    <div ref={animationParent} className="relative px-2 py-3 transition-all">
      <p
        onClick={toggleItem}
        className="flex cursor-pointer items-center gap-2 text-neutral-400 group-hover:text-black "
      >
       
        {children && (
          <IoIosArrowDown
            className={`text-xs transition-all text-gray-800 ${isItemOpen ? "rotate-180" : ""}`}
          />
        )}
      </p>

      {/* Dropdown items */}
      {isItemOpen && children && (
        <div className="w-full flex-col gap-1 rounded-lg bg-white py-3 transition-all flex">
          {children.map((ch, i) => (
            <Link
              key={i}
              href={ch.link}
              onClick={closeSideMenu} // Close side menu on click
              className="flex cursor-pointer items-center py-1 pl-6 pr-8 text-black"
            >
              <span className="whitespace-wrap text-sm text-black text-start">{ch.label}</span>
            </Link>
          ))}
        </div>
      )}

      {/* Direct link */}
      {!children && (
        <Link href={link} onClick={closeSideMenu} className="text-gray-800 block">
          {label}
        </Link>
      )}
    </div>
  );
}

