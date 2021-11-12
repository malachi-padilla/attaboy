import styled from 'styled-components';
import { MainSection } from '../../../theme/layout/containers';
import { BtnMain } from '../../../theme/buttons';
import { PrimaryHeading, SecondaryHeading } from '../../../theme/typogrophy';

export const AboutSection = styled(MainSection)``;

export const AboutSectionHeader = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
	width: ${(props) => (props.isDesktop ? '40%' : '100%')};
	justify-content: center;
	align-items: flex-start;
	gap: 1rem;
	padding: ${(props) => (props.isDesktop ? '5rem' : ' 0 0 0 2rem')};
`;

export const HeaderTitle = styled(SecondaryHeading)`
	color: ${(props) => props.theme.colors.greyDark};
	opacity: 0.6;
	border-bottom: 1px solid ${(props) => props.theme.colors.secondaryRed};
	text-transform: uppercase;
	font-size: ${(props) => (props.isDesktop ? '2rem' : '1.5rem')};
	letter-spacing: 2px;
`;

export const HeaderMain = styled(PrimaryHeading)`
	font-size: ${(props) => (props.isDesktop ? '4rem' : '3rem')};
	color: ${(props) => props.theme.colors.dark};
`;

export const HeaderSub = styled(SecondaryHeading)`
	color: ${(props) => props.theme.colors.secondaryRed};
	font-weight: 400;
	text-transform: none;
	font-size: ${(props) => (props.isDesktop ? '2rem' : '1.6rem')};
`;

export const HeaderParagraph = styled(HeaderSub)`
	color: ${(props) => props.theme.colors.greyDark};
`;

export const HeaderBtn = styled(BtnMain)`
	width: 16rem;
	line-height: 2.5rem;
	font-size: 1.2rem;
	margin-top: 1rem;
`;

export const AboutReviews = styled.div`
	display: flex;
	align-items: center;
	align-content: center;
	justify-content: center;
	flex-direction: row;
	flex-wrap: wrap;
	gap: 1rem;
	height: 100%;
	width: 60%;
	background-color: ${(props) => props.theme.colors.greyMed};
	overflow: hidden;
	padding: 1rem;
`;
