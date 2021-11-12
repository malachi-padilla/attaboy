import styled from 'styled-components';
import { ParagraphMain, PrimaryHeading } from '../../theme/typogrophy';

export const ModalBackground = styled.div`
	height: 100vh;
	width: 100vw;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 2;
	background-color: rgba(0, 0, 0, 0.8);
	position: absolute;
	top: 0;
`;

export const ExitBtn = styled.button`
	position: absolute;
	background: none;
	border: none;
	outline: none;
	font-size: 3rem;
	top: 1rem;
	right: 1rem;
	z-index: 3;
	color: ${(props) => props.theme.colors.greyMed};
	cursor: pointer;
	transition: all 300ms ease-in;
	&:hover {
		color: ${(props) => props.theme.colors.tertiaryRed};
	}
`;
export const ModalBox = styled.div`
	display: flex;
	flex-direction: column;
	height: max-content;
	width: ${(props) => (props.isDesktop ? '30%' : '80%')};
	background-color: ${(props) => props.theme.colors.light};
	padding: 3rem;
	overflow: hidden;
	border-radius: 4px;
	position: relative;
`;

export const ModalText = styled.div`
	display: inherit;
	height: 100%;
	width: 100%;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

export const ModalTitleIcon = styled(PrimaryHeading)`
	color: ${(props) => (props.error ? props.theme.colors.tertiaryRed : props.theme.colors.mainGreen)};
	font-size: 7rem;
`;

export const ModalTitle = styled(PrimaryHeading)`
	color: ${(props) => (props.error ? props.theme.colors.tertiaryRed : props.theme.colors.mainGreen)};
	font-size: 3rem;
	text-transform: capitalize;
`;

export const ModalMessage = styled(ParagraphMain)`
	text-align: center;
	font-size: 1.6rem;
	color: ${(props) => props.theme.colors.greyMed};
`;

export const PhoneBox = styled.a`
	background: none;
	border: 1px solid ${(props) => props.theme.colors.greyMed};
	border-radius: 4px;
	padding: 1rem 5rem;
	line-height: 1.6rem;
	color: ${(props) => props.theme.colors.greyMed};
	font-size: 1.6rem;
	margin-top: 1rem;
	transition: all 300ms ease-in;
	&:hover {
		color: ${(props) => props.theme.colors.mainGreen};
	}
`;
