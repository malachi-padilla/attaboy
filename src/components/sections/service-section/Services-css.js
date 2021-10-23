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
	width: 40%;
	align-items: center;
	justify-content: center;
`;

export const TextBox = styled.div`
	display: flex;
	height: 50%;
	width: 70%;
	justify-content: center;
	flex-direction: column;
	text-align: left;
	gap: 3rem;
`;

export const ServiceHeading = styled(PrimaryHeading)`
	color: ${(props) => props.theme.colors.dark};
	font-size: 6rem;
	font-weight: 800;

	span {
		color: ${(props) => props.theme.colors.secondaryRed};
	}
`;

export const ServiceParagraph = styled(ParagraphMain)`
	span {
		font-weight: 800;
	}
`;

export const ServiceBtn = styled(BtnMain)`
	width: 16rem;
	line-height: 2.5rem;
	font-size: 1.6rem;
`;
