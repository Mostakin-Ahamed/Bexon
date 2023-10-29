

const Navbar = () => {
    return (
        <div className="lg:ml-10 justify-center font-family-[Satoshi]">
            <div className="flex justify-center">
                <div className=" navbar bg-[#FAF5EF]">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-md dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li><a>Home</a></li>
                                <li><a>About Us</a></li>
                                <li><a>Portfolio</a></li>
                                <li><a>Reviews</a></li>
                                <li><a>Contact Us</a></li>
                            </ul>
                        </div>
                        <a className="btn btn-ghost normal-case lg:ml-60 text-3xl font-bold">Bexon</a>
                    </div>
                    <div className=" hidden lg:flex">
                        <ul className="menu menu-horizontal menu-lg px-1">
                            <li><a>Home</a></li>
                            <li><a>About Us</a></li>
                            <li><a>Portfolio</a></li>
                            <li><a>Reviews</a></li>
                            <li><a>Contact Us</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Navbar;