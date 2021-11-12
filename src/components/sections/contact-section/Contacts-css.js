import styled from 'styled-components';
import { MainSection } from '../../../theme/layout/containers';
import { ParagraphMain, SecondaryHeading } from '../../../theme/typogrophy';
import Image from '../../../assets/truck2.jpeg';
import { ContactBtn } from '../../nav-bar/Nav-css';

export const ContactSection = styled(MainSection)`
	flex-direction: row;
	background-color: ${(props) => props.theme.colors.light};
	position: relative;
	overflow: hidden;
`;

export const ContactForm = styled.form`
	height: 100%;
	width: ${(props) => (props.isDesktop ? '40%' : '100%')};
	display: flex;
	flex-direction: column;
	padding: 0 1rem;
	align-items: center;
	justify-content: center;
	background-color: ${(props) => props.theme.colors.light};
	border-radius: ${(props) => (props.isDesktop ? '4px' : 'unset')};
`;

export const FormHeading = styled.div`
	height: 25%;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const FormHeader = styled(SecondaryHeading)`
	color: ${(props) => props.theme.colors.dark};
	text-align: center;
	font-size: ${(props) => (props.isDesktop ? '5rem' : '3rem')};
	span {
		font-family: 'Fugaz One', cursive;
		color: ${(props) => props.theme.colors.secondaryRed};
	}
	@media only screen and (max-width: 320px) {
		font-size: 2.5rem;
	}
`;
export const FormSubHeader = styled(ParagraphMain)`
	text-align: center;
	text-transform: uppercase;
	color: ${(props) => props.theme.colors.secondaryRed};
	font-size: 1.6rem;
	font-weight: 700;
	@media only screen and (max-width: 320px) {
		font-size: 1.2rem;
	}
`;

export const FormContent = styled.div`
	height: 75%;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 2rem;
	@media only screen and (max-width: 320px) {
		gap: 1rem;
	}
`;

export const FormGroup = styled.div`
	display: inherit;
	flex-direction: column;
	width: 80%;
	align-items: center;
	justify-content: center;
`;
export const FormLabel = styled.label`
	color: ${(props) => props.theme.colors.dark};
	font-size: 1.2rem;
	align-self: flex-start;
	font-weight: 700;
`;

export const FormInput = styled.input`
	padding: 1.5rem 2rem;
	line-height: 3rem;
	padding: 0.8rem;
	width: 100%;
	border-radius: 4px;
	font-size: 1.6rem;
	border: 1px solid ${(props) => props.theme.colors.shadow};
	outline: none;
	color: ${(props) => props.theme.colors.dark};
	background-color: ${(props) => props.theme.colors.greyLight};
	transition: all 500ms;
	@media only screen and (max-width: 320px) {
		line-height: 2rem;
	}
	&:hover {
		border: 1px solid ${(props) => props.theme.colors.greyDark};
	}

	&:focus {
		outline: none;
		box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.1);
		border: 1px solid ${(props) => props.theme.colors.mainGreen};
		&:invalid {
			border: 1px solid ${(props) => props.theme.colors.tertiaryRed};
		}
	}

	&::-webkit-input-placeholder {
		color: ${(props) => props.theme.colors.dark};
	}
`;

export const FormTextArea = styled.textarea`
	background-color: ${(props) => props.theme.colors.greyLight};
	padding: 0.8rem;
	width: 100%;
	border-radius: 4px;
	border: 1px solid ${(props) => props.theme.colors.shadow};
	outline: none;
	font-size: 1.6rem;
	resize: none;
	overflow: auto;
	color: ${(props) => props.theme.colors.dark};
	transition: all 500ms;

	&:hover {
		border: 1px solid ${(props) => props.theme.colors.greyDark};
	}
	&:focus {
		outline: none;
		box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.1);
		border: 1px solid ${(props) => props.theme.colors.mainGreen};
	}

	&::-webkit-input-placeholder {
		color: ${(props) => props.theme.colors.dark};
	}
`;

export const FormBtn = styled.input`
	font-size: 1.6rem;
	width: 100%;
	line-height: 3rem;
	padding: 0.8rem;
	background: ${(props) => props.theme.colors.secondaryRed};
	color: ${(props) => props.theme.colors.light};
	text-align: center;
	border-radius: 4px;
	border: none;
	text-transform: uppercase;
	font-weight: 600;
	box-shadow: 0.3rem 0.3rem 1rem ${(props) => props.theme.colors.shadow};
	cursor: pointer;
	letter-spacing: 0.1rem;
	transition: all 200ms ease-in;
	outline: none;
	&:hover {
		background: ${(props) => props.theme.colors.mainRed};
	}
	@media only screen and (max-width: 320px) {
		line-height: 2rem;
	}
`;

export const ContactSectionImage = styled.div`
	height: 100%;
	width: 60%;
	background-image: url(${Image});
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
`;

export const BtnGroup = styled.div`
	display: inherit;
	flex-direction: column;
	width: 80%;
	align-items: center;
	justify-content: center;
	gap: 1rem;
`;

export const CallBtn = styled(ContactBtn)`
	width: 100%;
	line-height: 3rem;
	font-size: 1.6rem;
`;

export const BtnDivider = styled.div`
	display: flex;
	flex-direction: row;
	width: 80%;
	justify-content: space-evenly;
	align-items: center;
	span {
		height: 1px;
		width: 40%;
		background-color: ${(props) => props.theme.colors.shadow};
	}
`;
