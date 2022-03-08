import React from "react";

import {
	Nav,
	NavLogo,
	NavLink,
	Bars,
	NavMenu,
	NavBtn,
	NavBtnLink,
} from "./NavbarElements";

const Navbar = () => {
	return (
		<>
			<Nav>
				<NavLogo to="/">esb</NavLogo>
				<Bars />
				<NavMenu>
					<NavLink to="/" exact>
						Home
					</NavLink>
					<NavLink to="/about">About</NavLink>
					<NavLink to="/contact">Contact</NavLink>
					<NavLink to="/signin">Sign In</NavLink>
					<NavBtn>
						<NavBtnLink to="/signup">Sign Up</NavBtnLink>
					</NavBtn>
				</NavMenu>
			</Nav>
		</>
	);
};
export default Navbar;
