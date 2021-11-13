import styled from 'styled-components';
import { BtnMain } from '../../theme/buttons';

export const CarouselBody = styled.div`
	display: flex;
	height: 100%;
	width: ${(props) => (props.isDesktop ? '60%' : ' 100%')};
	background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${(props) => props.img});
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
	overflow: hidden;
	flex-direction: row;
`;

export const CarouselContents = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	padding-right: 1rem;
	animation: 1000ms ${(props) => props.animate && props.animation} ease-in-out;
`;

export const TextBox = styled.div`
	height: 100%;
	width: 70%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	gap: ${(props) => (props.isDesktop ? '10rem' : '3rem')};
`;

export const CarouselTextMain = styled.h2`
	font-size: ${(props) => (props.isDesktop ? '6rem' : ' 5rem')};
	text-transform: capitalize;
	color: ${(props) => props.theme.colors.light};
`;

export const CarouselParagraph = styled.p`
	font-size: 2rem;
	color: ${(props) => props.theme.colors.light};
	font-weight: 300;
`;

export const EstimateBtn = styled(BtnMain)`
	font-size: 1.6rem;
	width: 20rem;
	line-height: 3rem;
`;

export const CarouselBtn = styled.button`
	background-color: transparent;
	color: ${(props) => props.theme.colors.light};
	outline: none;
	border: none;
	font-size: ${(props) => (props.isDesktop ? '5rem' : '3rem')};
	cursor: pointer;
	width: 15%;
`;
