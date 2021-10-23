import styled from 'styled-components';

export const MainSection = styled.section`
	display: flex;
	height: calc(100vh - 10vh);
	justify-content: center;
	align-items: center;
	width: 100vw;
	background-color: ${(props) => props.theme.colors.light};
`;
