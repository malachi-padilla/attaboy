import styled from 'styled-components';
import { MainSection } from '../../theme/layout/containers';
import Img from '../../assets/truck.png';
import { MoveInBottom, MoveInLeft, MoveInRight } from '../../theme/animations';
import { BtnMain } from '../../theme/buttons';

export const LandingSection = styled(MainSection)`
	display: flex;
	justify-content: center;
	align-items: center;
	background-image: url(${Img});
	background-size: cover;
	background-repeat: no-repeat;
	background-position: right center;
`;

export const LandingSectionContents = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	height: 100%;
	width: 100%;
	gap: 10rem;
	background-color: rgba(0, 0, 0, 0.7);
`;

export const LandingText = styled.div`
	display: inherit;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;
`;

export const HeadingMain = styled.h1`
	color: ${(props) => props.theme.colors.light};
	font-size: ${(props) => (props.isDesktop ? '8rem' : '5rem')};
	text-transform: uppercase;
	animation: 1s ${MoveInLeft} ease-in-out;
`;
export const HeadingSub = styled(HeadingMain)`
	font-style: italic;
	text-transform: unset;
	font-size: ${(props) => (props.isDesktop ? '3rem' : '2rem')};
	animation: 1s ${MoveInRight} ease-in-out;
`;

export const LandingBtn = styled(BtnMain)`
	width: 20rem;
	line-height: 3rem;
	animation: 1s ${MoveInBottom} ease-in-out;
	font-size: 1.6rem;
`;
