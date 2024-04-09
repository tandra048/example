import { NavLink,Link } from "react-router-dom";

const Navbar = () => {
    const navlinks = <>
    <li><NavLink to= "/">Home</NavLink></li>
    <li><NavLink to= "/update">Update Profile</NavLink></li>
    <li><NavLink to= "/user">User Profile</NavLink></li>
    </>
    return (
        <div className="my-16">
        <div className="navbar bg-base-100 max-w-screen-xl mx-auto">
        
<div className="navbar-start">
<div className="dropdown">
  <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
  </div>
  <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
   {navlinks}
  </ul>
</div>
<h2 className="font-bold text-3xl">Residential</h2>
</div>
<div className="navbar-center hidden lg:flex">
<ul className="menu menu-horizontal px-1">
 {navlinks}
</ul>
</div>

 
<div className="navbar-end">
<Link to="/login" className="btn btn-active btn-neutral">Login</Link>
</div>

</div>
</div>
    );
};

export default Navbar;