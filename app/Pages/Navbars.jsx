'use client';
import React, { useState, useEffect } from 'react';
import '../globals.css';
import Link from 'next/link';

export default function Navbars() {
    const [open, setOpen] = useState(false);
    const [isWhiteBg, setIsWhiteBg] = useState(false);

    const menuLinks = [
        {
            name: "Jobs",
            link: "#jobs",
        },
        { name: "About-us", link: "#about" },
        { name: "Contact", link: "#contact" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            // Get the navbar element
            const navbar = document.querySelector('nav');
            if (!navbar) return;

            // Get the element directly below the navbar
            const navbarRect = navbar.getBoundingClientRect();
            const elementBelow = document.elementFromPoint(
                window.innerWidth / 2,
                navbarRect.bottom + 1
            );

            // Check if the background color is white
            if (elementBelow) {
                const bgColor = window.getComputedStyle(elementBelow).backgroundColor;
                const isWhite = bgColor === 'rgb(255, 255, 255)' || 
                               bgColor === 'rgba(255, 255, 255, 1)';
                setIsWhiteBg(isWhite);
            }
        };

        // Initial check
        handleScroll();

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Cleanup
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Dynamic text color classes
    const textColorClass = isWhiteBg ? 'text-slate-900' : 'text-slate-200';
    const hoverTextColorClass = isWhiteBg ? 'hover:text-cyan-800' : 'hover:text-cyan-600';
    const mobileTextColorClass = isWhiteBg ? 'text-slate-900' : 'text-white';

    return (
        <nav className={`fixed font-poppins font-sans w-full bg-blacker left-0 top-0 z-[999] ${isWhiteBg ? 'bg-white shadow-md' : 'bg-transparent'}`}>
            <div className="flex items-center justify-between">
                <div className="mx-7">
                <Link href="/">
                    <h4 className={`text-sm uppercase font-bold ${textColorClass}`}>
                        Kuvosh Jobs
                    </h4>
                </Link>
                </div>

                {/* Desktop Menu */}
                <div className='md:block hidden px-7 py-2 font-medium'>
                    <ul className="flex items-center font-poppins font-sans py-2 text-sm">
                        {menuLinks.map((menu, i) => (
                            <li key={i} className={`relative group px-3 ${textColorClass} ${hoverTextColorClass} cursor-pointer text-xl font-light`}>
                                <a href={menu.link || "#"}>{menu.name}</a>

                                {/* Dropdown */}
                                {menu.dropdown && (
                                    <ul className="absolute top-full left-0 mt-2 bg-white text-black shadow-lg rounded-md py-2 w-40 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300 z-50">
                                        {menu.links.map((item, j) => (
                                            <li key={j}>
                                                <a href={item.link} className="block px-4 py-2 hover:bg-cyan-100">{item.name}</a>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Hamburger Icon */}
                <div
                    onClick={() => setOpen(!open)}
                    className={`z-[999] ${isWhiteBg ? 'text-slate-900' : 'text-slate-200'} text-3xl md:hidden m-5`}
                >
                    <svg
                        className="w-8 h-8"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        {open ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            ></path>
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            ></path>
                        )}
                    </svg>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`md:hidden absolute w-full h-screen px-7 py-2 font-medium ${
                        isWhiteBg ? 'bg-white' : 'bg-black'
                    } top-0 duration-300 ${
                        open ? "right-0" : "right-[-100%]"
                    }`}
                >
                    <ul className="flex flex-col justify-center h-full gap-10 py-2 text-lg">
                        {menuLinks.map((menu, i) => (
                            <li key={i} className={`px-6 ${hoverTextColorClass}`}>
                                <a onClick={() => setOpen(false)} href={menu.link || "#"}>
                                    {menu.name}
                                </a>
                                {menu.dropdown && (
                                    <ul className="mt-2 pl-4 text-base space-y-2">
                                        {menu.links.map((item, j) => (
                                            <li key={j}>
                                                <a onClick={() => setOpen(false)} href={item.link} className={`block ${hoverTextColorClass}`}>
                                                    {item.name}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}