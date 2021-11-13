import styled from 'styled-components';
import { BtnMain } from '../../../theme/buttons';
import { MainSection } from '../../../theme/layout/containers';
import { ParagraphMain, PrimaryHeading } from '../../../theme/typogrophy';

export const ServicesSection = styled(MainSection)`
	flex-direction: row;
`;

export const ServiceContents = styled.div`
	display: flex;
	height: 100%;
	width: ${(props) => (props.isDesktop ? '40%' : '100%')};
	align-items: center;
	justify-content: center;
	padding: ${(props) => (props.isDesktop ? '6rem' : '3rem')};
`;

export const CarouselContainer = styled.div`
	display: flex;
	height: 100%;
	width: 60%;
	align-items: center;
	justify-content: center;
`;

export const TextBox = styled.div`
	display: flex;
	height: 100%;
	width: 100%;
	justify-content: center;
	flex-direction: column;
	text-align: left;
	gap: 3rem;
`;

export const ServiceHeading = styled(PrimaryHeading)`
	color: ${(props) => props.theme.colors.dark};
	font-weight: 800;
	font-size: ${(props) => (props.isDesktop ? '4rem' : '3rem')};
`;

export const ServiceParagraph = styled(ParagraphMain)`
	color: ${(props) => props.theme.colors.greyDark};
	font-size: ${(props) => (props.isDesktop ? '2rem' : '1.6rem')};

	strong {
		color: ${(props) => props.theme.colors.dark};
	}
`;

export const ListOfServices = styled.ul`
	list-style: none;
	font-size: ${(props) => (props.isDesktop ? '2rem' : '1.6rem')};
	i {
		margin-right: 1rem;
		color: ${(props) => props.theme.colors.secondaryRed};
	}
	li {
		margin-bottom: 1rem;
		color: ${(props) => props.theme.colors.greyDark};
		text-transform: capitalize;
	}
`;

export const ServiceBtn = styled(BtnMain)`
	width: 16rem;
	line-height: 2.5rem;
	font-size: 1.2rem;
`;
