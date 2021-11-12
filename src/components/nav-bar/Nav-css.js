import styled, { keyframes } from 'styled-components';
import { FadeIn } from '../../theme/animations';
import { BtnMain } from '../../theme/buttons';

export const GrowSidebar = keyframes`
    0%{
        height:0;
    }
  
    100%{
        height: 100vh
    }
`;

export const NavContainer = styled.nav`
	display: flex;
	position: -webkit-sticky;
	position: sticky;
	top: 0;
	height: 10vh;
	width: 100vw;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	background-image: ${(props) =>
		props.isDesktop ? 'linear-gradient(120deg, #990f13 0%, #990f13 25%, #1c1c1e 25%)' : 'none'};
	background-color: ${(props) => props.theme.colors.mainRed};
	box-shadow: 0.3rem 0.3rem 1rem ${(props) => props.theme.colors.shadow};
	z-index: 10;
`;

export const LogoContainer = styled.div`
	display: flex;
	height: 100%;
	width: ${(props) => (props.isDesktop ? '20%' : 'calc(100% / 3)')};
	align-items: center;
	justify-content: center;
	cursor: pointer;
	z-index: 20;
`;

export const Logo = styled.div`
	display: flex;
	height: ${(props) => (props.isDesktop ? '80%' : '90%')};
	justify-content: center;
	align-items: center;
	background-color: ${(props) => props.theme.colors.mainRed};
	img {
		height: ${(props) => (props.isDesktop ? '100%' : '60%')};
	}
`;

export const NavContentMobile = styled.div`
	display: flex;
	height: 100%;
	width: 100%;
	flex-direction: row;
	align-items: center;
	justify-content: center;
`;

export const BurgerMenu = styled.label`
	display: flex;
	flex-direction: column;
	height: 100%;
	width: calc(100% / 3);
	align-items: center;
	justify-content: center;
	gap: 0.8rem;
	cursor: pointer;
	z-index: 20;
	input {
		display: none;
	}
	span {
		height: 0.4rem;
		width: 4rem;
		border-radius: 1rem;
		background-color: ${(props) => props.theme.colors.light};
		box-shadow: 0.3rem 0.3rem 1rem ${(props) => props.theme.colors.shadow};
		transition: 0.4s cubic-bezier(0.68, -0.6, 0.32, 1.6);
	}

	input[type='checkbox'] {
		display: none;
	}

	input[type='checkbox']:checked ~ span:nth-of-type(1) {
		transform-origin: bottom;
		transform: rotate(45deg) translate(22%, 0.7rem);
		width: 4rem;
	}

	input[type='checkbox']:checked ~ span:nth-of-type(2) {
		transform-origin: top;
		transform: rotate(-45deg);
		width: 4rem;
	}

	input[type='checkbox']:checked ~ span:nth-of-type(3) {
		transform-origin: bottom;
		width: 0rem;
		transform: rotate(45deg);
	}
`;

export const NavContentDesktop = styled.div`
	display: flex;
	height: 100%;
	width: 80%;
	flex-direction: row;
	align-items: center;
	justify-content: center;
`;

export const Links = styled.div`
	display: flex;
	width: 70%;
	flex-direction: ${(props) => (props.menuOpen ? 'column' : 'row')};
	gap: 2rem;
	align-items: center;
	justify-content: space-evenly;
`;

export const Link = styled.a`
	color: ${(props) => props.theme.colors.light};
	font-size: 1.6rem;
	text-transform: uppercase;
	font-weight: 500;
	position: relative;
	transition: all 200ms ease-in-out;
	&:hover {
		color: rgba(255, 255, 255, 0.5);
	}
	&:after {
		content: '';
		display: block;
		width: 0;
		height: 2px;
		margin-top: 0.5rem;
		background: ${(props) => props.theme.colors.light};
		transition: width 0.3s;
	}
	&:hover::after {
		width: 100%;
	}
	&:focus {
		outline: none;
	}
`;
export const LinkMobile = styled(Link)`
	animation: 1.5s ${FadeIn} ease-in;
	font-size: 2rem;
`;

export const ContactBox = styled.div`
	display: flex;
	height: 100%;
	width: calc(100% / 3);
	justify-content: center;
	align-items: center;
`;

export const ContactBtn = styled(BtnMain)`
	width: ${(props) => (props.isDesktop ? '13rem' : '10rem')};
	background: ${(props) => props.theme.colors.secondaryRed};
	font-size: ${(props) => (props.isDesktop ? '1.6rem' : '1.2rem')};
	color: ${(props) => props.theme.colors.light};
	transition: all 200ms ease-in;
`;

export const SideBar = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100vh;
	position: absolute;
	width: 100vw;
	left: 0;
	top: 0;
	background-color: ${(props) => props.theme.colors.mainRed};
	z-index: 10;
	animation: 1s ${GrowSidebar} ease-in-out;
`;
