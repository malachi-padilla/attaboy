import React, { useEffect, useState } from 'react';
import {
	BurgerMenu,
	ContactBox,
	Link,
	Links,
	Logo,
	LogoContainer,
	NavContainer,
	NavContentDesktop,
	NavContentMobile,
	SideBar,
	LinkMobile,
} from './nav-bar/Nav-css';
import companyLogo from '../assets/logo.PNG';

const Nav = () => {
	const getWidth = () => {
		if (window.innerWidth >= 770) {
			return true;
		} else {
			return false;
		}
	};
	const [isDesktop, setIsDesktop] = useState(getWidth);
	const [menuOpen, setMenuOpen] = useState(false);

	useEffect(() => {
		const handleIsDesktop = () => {
			setIsDesktop(getWidth);
		};
		window.addEventListener('resize', handleIsDesktop);
	}, []);

	useEffect(() => {
		setMenuOpen(false);
	}, [isDesktop]);
	return (
		<NavContainer isDesktop={isDesktop}>
			{isDesktop ? (
				<>
					<LogoContainer isDesktop={isDesktop}>
						<Logo isDesktop={isDesktop}>
							<img src={companyLogo} alt='logo' />
						</Logo>
					</LogoContainer>
					<NavContentDesktop>
						<Links menuOpen={menuOpen}>
							<Link href='#'>services</Link>
							<Link href='#'>work</Link>
							<Link href='#'>about</Link>
						</Links>
						<ContactBox>
							<Link href='#'>contact</Link>
						</ContactBox>
					</NavContentDesktop>
				</>
			) : (
				<NavContentMobile>
					<BurgerMenu for='check' onChange={() => setMenuOpen((prevChek) => !prevChek)}>
						<input type='checkbox' id='check' />
						<span></span>
						<span></span>
						<span></span>
					</BurgerMenu>
					<LogoContainer>
						<Logo>
							<img src={companyLogo} alt='logo' />
						</Logo>
					</LogoContainer>
				</NavContentMobile>
			)}
			{menuOpen && !isDesktop ? (
				<SideBar>
					<Links menuOpen={menuOpen}>
						<LinkMobile href='#'>services</LinkMobile>
						<LinkMobile href='#'>work</LinkMobile>
						<LinkMobile href='#'>about</LinkMobile>
						<LinkMobile href='#'>contact</LinkMobile>
					</Links>
				</SideBar>
			) : null}
		</NavContainer>
	);
};

export default Nav;
