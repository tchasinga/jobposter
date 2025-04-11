'use client';
import React, { useState } from 'react';
import '../globals.css';

export default function Navbars() {
    const [open, setOpen] = useState(false);

    const menuLinks = [
        {
            name: "Jobs",
            dropdown: true,
            links: [
                { name: "Remote", link: "#team" },
                { name: "On-site", link: "#vision" },
                { name: "Hybrid", link: "#careers" },
            ],
        },
        { name: "About-us", link: "#about" },
        { name: "Contact", link: "#contact" },
    ];

    return (
        <nav className='fixed font-poppins font-sans w-full left-0 top-0 z-[999]'>
            <div className="flex items-center justify-between">
                <div className="mx-7">
                    <h4 className="text-sm myheader uppercase font-bold text-slate-200">
                        Jet-codesign
                    </h4>
                </div>

                {/* Desktop Menu */}
                <div className='text-gray-900 md:block hidden px-7 py-2 font-medium'>
                    <ul className="flex items-center font-poppins font-sans py-2 text-sm">
                        {menuLinks.map((menu, i) => (
                            <li key={i} className="relative group px-3 text-white hover:text-cyan-600 cursor-pointer text-xl font-light">
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
                    className={`z-[999] ${open ? "text-gray-200" : "text-gray-100"} text-3xl md:hidden m-5`}
                >
                    <svg
                        className="w-8 h-8 text-slate-200"
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
                    className={`md:hidden text-gray-900 absolute w-full h-screen px-7 py-2 font-medium bg-black top-0 duration-300 ${
                        open ? "right-0" : "right-[-100%]"
                    }`}
                >
                    <ul className="flex flex-col justify-center h-full text-white gap-10 py-2 text-lg">
                        {menuLinks.map((menu, i) => (
                            <li key={i} className="px-6 hover:text-cyan-600">
                                <a onClick={() => setOpen(false)} href={menu.link || "#"}>
                                    {menu.name}
                                </a>
                                {menu.dropdown && (
                                    <ul className="mt-2 pl-4 text-base space-y-2">
                                        {menu.links.map((item, j) => (
                                            <li key={j}>
                                                <a onClick={() => setOpen(false)} href={item.link} className="block hover:text-cyan-400">
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
