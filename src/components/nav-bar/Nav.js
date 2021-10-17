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
	ContactBtn,
} from './Nav-css';
import companyLogo from '../../assets/logo.PNG';

const Nav = ({ isDesktop }) => {
	const [menuOpen, setMenuOpen] = useState(false);

	useEffect(() => {
		setMenuOpen(false);
	}, [isDesktop]);

	return (
		<NavContainer isDesktop={isDesktop}>
			{isDesktop ? (
				<>
					<LogoContainer isDesktop={isDesktop}>
						<Logo isDesktop={isDesktop} onClick={() => (window.location.href = '#')}>
							<img src={companyLogo} alt='logo' />
						</Logo>
					</LogoContainer>
					<NavContentDesktop>
						<Links menuOpen={menuOpen}>
							<Link href='#services'>services</Link>
							<Link href='#work'>work</Link>
							<Link href='#about'>about</Link>
							<Link href='#contact'>contact</Link>
						</Links>
						<ContactBox>
							<ContactBtn href='tel:9162136418' isDesktop={isDesktop}>
								916-213-6418
							</ContactBtn>
						</ContactBox>
					</NavContentDesktop>
				</>
			) : (
				<NavContentMobile>
					<BurgerMenu for='check' onChange={() => setMenuOpen((prevChek) => !prevChek)}>
						<input type='checkbox' id='check' checked={menuOpen} />
						<span></span>
						<span></span>
						<span></span>
					</BurgerMenu>
					<ContactBox>
						<ContactBtn href='tel:9162136418' isDesktop={isDesktop}>
							916-213-6418
						</ContactBtn>
					</ContactBox>
					<LogoContainer>
						<Logo href='#'>
							<img src={companyLogo} alt='logo' />
						</Logo>
					</LogoContainer>
				</NavContentMobile>
			)}
			{menuOpen && !isDesktop ? (
				<SideBar>
					<Links menuOpen={menuOpen}>
						<LinkMobile href='#services' onClick={() => setMenuOpen(false)}>
							services
						</LinkMobile>
						<LinkMobile href='#work' onClick={() => setMenuOpen(false)}>
							work
						</LinkMobile>
						<LinkMobile href='#about' onClick={() => setMenuOpen(false)}>
							about
						</LinkMobile>
						<LinkMobile href='#contact' onClick={() => setMenuOpen(false)}>
							contact
						</LinkMobile>
					</Links>
				</SideBar>
			) : null}
		</NavContainer>
	);
};

export default Nav;
