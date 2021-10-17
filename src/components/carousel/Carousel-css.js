import styled from 'styled-components';
import { BtnMain } from '../../theme/buttons';
import { PrimaryHeading } from '../../theme/typogrophy';

export const CarouselBody = styled.div`
	display: flex;
	height: 90%;
	width: 90%;
	background-image: url(${(props) => props.img});
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
	border-radius: 0.4rem;
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
	background-color: rgba(0, 0, 0, 0.7);
	padding: 1rem;
`;

export const TextBox = styled.div`
	height: 100%;
	width: 80%;
	display: flex;
	flex-direction: column;
	gap: 5rem;
	justify-content: center;
	align-items: center;
	text-align: center;
`;

export const CarouselTextMain = styled(PrimaryHeading)`
	font-size: ${(props) => (props.isDesktop ? '6rem' : ' 4rem')};
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
