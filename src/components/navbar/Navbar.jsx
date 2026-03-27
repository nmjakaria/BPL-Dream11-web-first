import React from 'react';
import Dollar from '../../assets/dollar1.png';
import Logo from '../../assets/logo.png';

const Navbar = ({coin}) => {
    return (
        <div className="sticky top-0 z-50 backdrop-blur bg-white/70">
            <div className="container mx-auto">
                <div className="navbar shadow-sm rounded-xl">

                    {/* LEFT */}
                    <div className="navbar-start">
                        <img src={Logo} alt="logo" className="w-14 h-14" />
                    </div>

                    {/* CENTER */}
                    <div className="navbar-center hidden md:flex">
                        <ul className="menu menu-horizontal px-1">
                            <li><a>Home</a></li>
                            <li><a>Fixture</a></li>
                            <li><a>Teams</a></li>
                            <li><a>Schedules</a></li>
                        </ul>
                    </div>

                    {/* RIGHT */}
                    <div className="navbar-end">
                        <div className="flex items-center gap-2 btn btn-outline rounded-xl">
                            <p className="font-bold">{coin}</p>
                            <span>Coin</span>
                            <img src={Dollar} alt="coin" className="w-5 h-5" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Navbar;