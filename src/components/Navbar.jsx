
"use client"

import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    const session = useSession()
    console.log(session);
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">


                        </ul>
                    </div>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">

                        {/* ............................................... */}
                        
                            {
                                navItems.map((item) => (
                                    <li key={item.path}><Link href={item.path} >{item.title}</Link></li>
                                ))
                            }
                        
                       
                        {/* ............................................... */}
                    </ul>
                </div>

                {
                     !session.data  ?
                     <Link href="/login" className='btn btn-primary px-8'>Login</Link> :
                     <button className='btn btn-primary px-8' onClick={() => signOut()}>LogOut</button>
                }
                <div className="navbar-end"></div>
            </div>
        </div>
    );
};


const navItems = [

    {
        title: "Home",
        path: "/"
    },
 
    {
        title: "Services",
        path: "/services"
    },
    {
        title: "MyBookings",
        path: "/my-bookings"
    },
    
    {
        title: "Contact",
        path: "/contact"
    },
   
   
]

export default Navbar;



