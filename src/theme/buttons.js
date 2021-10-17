import styled from 'styled-components';

export const BtnMain = styled.a`
	line-height: 1.6rem;
	padding: 0.8rem;
	background: ${(props) => props.theme.colors.secondaryRed};
	color: ${(props) => props.theme.colors.light};
	text-align: center;
	border-radius: 4px;
	text-transform: uppercase;
	font-weight: 600;
	box-shadow: 0.3rem 0.3rem 1rem ${(props) => props.theme.colors.shadow};
	cursor: pointer;
	letter-spacing: 0.1rem;
	transition: all 200ms ease-in;

	&:hover {
		background: ${(props) => props.theme.colors.mainRed};
	}
`;
