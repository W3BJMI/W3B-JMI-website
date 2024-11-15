"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function TopBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsMenuOpen(isMenuOpen => !isMenuOpen);
    };
  
    return (
      <div className="relative">
        <div className="flex items-center justify-between bg-background p-4 text-textColor h-[72px] ">
            <div>
                <Image src='/logo.png' alt="logo" width={59} height={47} />
            </div>
            <div onClick={toggleMenu} className="hover:cursor-pointer">
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.7235 36.1467L49.2765 36.1466M10.7235 36.1466L49.2765 36.1467" stroke="#F5F5F5" strokeWidth="1.5"/>
                    <path d="M10.7235 23.8534L49.2765 23.8533M10.7235 23.8533L49.2765 23.8534" stroke="#F5F5F5" strokeWidth="1.5"/>
                </svg>
            </div>
        </div>
  
        {/* Mobile Menu */}
        {isMenuOpen && (
            <div className="absolute top-0 left-0 right-0 z-10 bg-mobileView text-textColor">
                <div className="flex items-center justify-between h-[72px] bg-black p-4 mb-48" >
                    <div>
                        <Image src='/logo.png' alt="logo" width={59} height={47} />
                    </div>
                    <div className="text-textColor text-2xl font-unbounded font-light ">
                        W3B
                    </div>
                    <div onClick={toggleMenu} className="hover:cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none">
                            <path d="M10.0193 9.92835L34.7485 34.6575M10.0194 34.6575L34.7485 9.92834" stroke="white" strokeWidth="2"/>
                        </svg>
                    </div>
                </div>
                <div className="mb-[92px]" >
                    <ul className="inline-flex flex-col justify-start gap-3.5 px-8 text-[40px] font-unbounded font-light">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#events">Events</a></li>
                        <li><a href="#team">Team</a></li>
                        <li><a href="#gallery">Gallery</a></li>
                        <li><a href="#suggestions">Suggestions</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                <div className="flex justify-center mb-[62px] ">
                    <button className="rounded-[10px] text-black bg-textColor text-center font-unbounded text-2xl font-normal h-[64px] w-[348px]"> 
                        JOIN US
                    </button>
                </div>
            </div>
        )}
      </div>
    );
  }