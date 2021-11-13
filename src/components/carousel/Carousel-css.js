import styled from 'styled-components';
import { BtnMain } from '../../theme/buttons';
import { GalleryModalBtn } from '../modal/GalleryModal-css';

export const CarouselBody = styled.div`
	display: flex;
	height: 80%;
	width: 90%;
	background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${(props) => props.img});
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
	overflow: hidden;
	flex-direction: row;
	border-radius: 4px;
	box-shadow: 0.3rem 0.3rem 1rem ${(props) => props.theme.colors.shadow};
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
	height: 50%;
	width: 70%;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	text-align: center;
`;

export const CarouselTextMain = styled.h2`
	font-size: 6rem;
	text-transform: capitalize;
	color: ${(props) => props.theme.colors.light};
`;

export const CarouselParagraph = styled.p`
	font-size: 2rem;
	color: ${(props) => props.theme.colors.light};
	font-weight: 500;
`;

export const EstimateBtn = styled(BtnMain)`
	font-size: 1.6rem;
	width: 20rem;
	line-height: 3rem;
`;

export const CarouselBtn = styled(GalleryModalBtn)`
	width: 3rem;
	height: 3rem;
	font-size: 2rem;
`;
