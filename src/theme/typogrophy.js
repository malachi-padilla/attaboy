import styled from 'styled-components';

export const PrimaryHeading = styled.h1`
	color: ${(props) => props.theme.colors.light};
	font-size: 5rem;
	text-transform: uppercase;
`;
export const SecondaryHeading = styled.h2``;

export const ParagraphMain = styled.p`
	font-size: 2rem;
	color: ${(props) => props.theme.colors.dark};
	font-weight: 400;
`;

export const ParagraphSecondary = styled.p`
	font-size: 1.6rem;
	color: ${(props) => props.theme.colors.dark};
	font-weight: 600;
`;
