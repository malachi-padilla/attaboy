import styled from 'styled-components';
import { MainSection } from '../../../theme/layout/containers';
import { ParagraphSecondary, PrimaryHeading } from '../../../theme/typogrophy';

export const WorkSectionContainer = styled(MainSection)`
	flex-direction: column;
	background-color: ${(props) => props.theme.colors.greyMed};
	padding-top: 1rem;
	padding-bottom: ${(props) => (props.isDesktop ? 'none' : '1rem')};
`;

export const WorkSectionGallery = styled.div`
	display: flex;
	flex-wrap: wrap;
	padding: 0 4px;
	height: ${(props) => (props.isDesktop ? '60%' : '50%')};
	width: ${(props) => (props.isDesktop ? '100%' : '90%')};
	border-radius: 4px;
	box-shadow: 0.3rem 0.3rem 1rem ${(props) => props.theme.colors.shadow};
	background-color: ${(props) => props.theme.colors.dark};
	overflow: hidden;
	position: relative;
	:hover img {
		filter: blur(3px) brightness(80%);
	}
	:hover figcaption {
		opacity: 1;
	}
`;

export const Caption = styled.figcaption`
	position: absolute;
	top: 20%;
	left: 50%;
	transform: translate(-50%, 20%);
	color: ${(props) => props.theme.colors.light};
	text-transform: uppercase;
	font-size: 4rem;
	font-weight: 600;
	text-align: center;
	opacity: 0;
	transition: all 300ms;
	backface-visibility: hidden;
	z-index: 10;
	cursor: pointer;
	:hover {
		text-decoration: underline;
	}
`;

export const ImageCol = styled.figure`
	flex: 25%;
	max-width: calc(100% / 3);
	padding: 0 4px;
	img {
		margin-top: 0.8rem;
		vertical-align: middle;
		width: 100%;
		transition: all 0.3s ease-in;
	}
`;

export const WorkSectionTextBox = styled.div`
	display: inherit;
	height: ${(props) => (props.isDesktop ? '20%' : '25%')};
	width: 100%;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	text-align: center;
`;

export const WorkSectionHeading = styled(PrimaryHeading)`
	font-size: ${(props) => (props.isDesktop ? '6rem' : '4rem')};
	line-height: 5rem;
	color: ${(props) => props.theme.colors.light};
	font-weight: 800;
	span {
		font-size: ${(props) => (props.isDesktop ? '7rem' : '5rem')};
		font-family: 'Fugaz One', cursive;
		color: ${(props) => props.theme.colors.secondaryRed};
	}
`;

export const WorkSectionLogos = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	height: ${(props) => (props.isDesktop ? '20%' : '25%')};
	width: 100%;
	position: relative;
`;

export const Row = styled.div`
	height: 50%;
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	gap: 0.5rem;
`;
export const WorkSectionLogo = styled.div`
	display: flex;
	height: 5rem;
	width: 16rem;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border-radius: 4px;
	background-color: ${(props) => props.theme.colors.light};
	box-shadow: 0.3rem 0.3rem 1rem ${(props) => props.theme.colors.shadow};
	padding: 5px;
	cursor: pointer;
`;

export const LogoImg = styled.div`
	height: 50%;
	width: 100%;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	img {
		height: 90%;
		max-width: 60%;
	}
`;

export const LogoTextBox = styled.div`
	height: 50%;
	width: 100%;
	span {
		color: #ffd60a;
	}
`;

export const LogoText = styled(ParagraphSecondary)``;
