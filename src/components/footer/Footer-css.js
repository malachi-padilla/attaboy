import styled from 'styled-components';

export const FooterContainer = styled.div`
	display: flex;
	height: 10vh;
	width: 100vw;
	align-items: center;
	justify-content: center;
	background-color: ${(props) => props.theme.colors.dark};
	border-top: 1px solid ${(props) => props.theme.colors.mainRed};
`;

export const FooterContents = styled.div`
	display: flex;
	width: 90%;
	height: 100%;
	align-items: center;
	justify-content: space-between;
`;
export const Icons = styled.div`
	display: flex;
	gap: 1rem;
	font-size: 2rem;
`;

export const YelpLink = styled.a`
	cursor: pointer;
	transition: all 0.2s;
	color: ${(props) => props.theme.colors.light};

	&:hover {
		color: #c41200;
	}
`;
export const FbLink = styled.a`
	cursor: pointer;
	transition: all 0.2s;
	color: ${(props) => props.theme.colors.light};

	&:hover {
		color: #4267b2;
	}
`;

export const License = styled.h1`
	color: rgba(255, 255, 255, 0.7);
	font-weight: 300;
	font-size: 1.6rem;
`;
