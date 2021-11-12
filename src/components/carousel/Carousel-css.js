import styled from 'styled-components';
import { BtnMain } from '../../theme/buttons';
import { PrimaryHeading } from '../../theme/typogrophy';

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
	width: 80%;
	display: flex;
	flex-direction: column;
	gap: 10rem;
	justify-content: center;
	align-items: center;
	text-align: center;
`;

export const CarouselTextMain = styled(PrimaryHeading)`
	font-size: ${(props) => (props.isDesktop ? '6rem' : ' 5.5rem')};
	text-transform: capitalize;
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
	width: 10%;
`;
