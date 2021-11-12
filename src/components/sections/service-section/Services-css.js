import styled from 'styled-components';
import { BtnMain } from '../../../theme/buttons';
import { MainSection } from '../../../theme/layout/containers';
import { ParagraphMain, PrimaryHeading } from '../../../theme/typogrophy';

export const ServicesSection = styled(MainSection)`
	flex-direction: row;
	background-color: ${(props) => props.theme.colors.light};
`;

export const ServiceContents = styled.div`
	display: flex;
	height: 100%;
	width: 40%;
	align-items: center;
	justify-content: center;
`;

export const TextBox = styled.div`
	display: flex;
	height: 50%;
	width: 100%;
	justify-content: center;
	flex-direction: column;
	text-align: left;
	gap: 3rem;
	padding: 3rem;
`;

export const ServiceHeading = styled(PrimaryHeading)`
	color: ${(props) => props.theme.colors.dark};
	font-weight: 800;

	span {
		color: ${(props) => props.theme.colors.secondaryRed};
		font-family: 'Fugaz One', cursive;
	}
`;

export const ServiceParagraph = styled(ParagraphMain)`
	color: ${(props) => props.theme.colors.greyDark};
	strong {
		color: ${(props) => props.theme.colors.dark};
	}
`;

export const ListOfServices = styled.ul`
	list-style: none;
	font-size: 2rem;
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
