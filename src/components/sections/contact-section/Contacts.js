import React, { useEffect, useRef, useState } from 'react';
import { ParagraphMain } from '../../../theme/typogrophy';
import { disableScroll, enableScroll } from '../../../util/utilFunctions';
import emailjs from 'emailjs-com';
import {
	BtnDivider,
	BtnGroup,
	CallBtn,
	ContactForm,
	ContactSection,
	ContactSectionImage,
	FormBtn,
	FormContent,
	FormGroup,
	FormHeader,
	FormHeading,
	FormInput,
	FormLabel,
	FormSubHeader,
	FormTextArea,
} from './Contacts-css';
import Modal from '../../modal/Modal';

const Contacts = ({ isDesktop }) => {
	const [popUp, setPopUp] = useState(false);
	const [error, setError] = useState(false);
	const form = useRef();

	const handleSubmit = (e) => {
		e.preventDefault();
		emailjs.sendForm('service_3fvg3za', 'template_yg2e6aa', form.current, 'user_aM2pMVFB5YvBfmpSv1Ma9').then(
			(result) => {
				console.log(result.text);
				if (result.text === 'OK') {
					setPopUp(true);
					setError(false);
				} else {
					setPopUp(true);
					setError(true);
				}
			},
			(error) => {
				console.log(error.text);
				if (error) {
					setPopUp(true);
					setError(true);
				}
			}
		);
		e.target.reset();
	};

	useEffect(() => {
		if (popUp) {
			disableScroll();
		} else {
			enableScroll();
		}
	}, [popUp]);

	return (
		<ContactSection id='contact'>
			{popUp && <Modal error={error} setOpen={setPopUp} isDesktop={isDesktop} />}
			{isDesktop && <ContactSectionImage></ContactSectionImage>}
			<ContactForm ref={form} onSubmit={handleSubmit} isDesktop={isDesktop}>
				<FormHeading isDesktop={isDesktop}>
					<FormHeader isDesktop={isDesktop}>
						Here for you when things get <span>tough</span>.
					</FormHeader>
					<FormSubHeader>24/7 emergency repairs</FormSubHeader>
				</FormHeading>
				<FormContent isDesktop={isDesktop}>
					<FormGroup>
						<FormLabel>Name</FormLabel>
						<FormInput type='text' required placeholder='name' name='name' />
					</FormGroup>
					<FormGroup>
						<FormLabel>Email</FormLabel>
						<FormInput type='email' required placeholder='email@example.com' name='email' />
					</FormGroup>
					<FormGroup>
						<FormTextArea placeholder="what's your emergency?" cols='30' rows='5' name='message' />
					</FormGroup>
					<BtnGroup>
						<FormBtn type='submit' />
						<BtnDivider>
							<span></span>
							<ParagraphMain>or</ParagraphMain>
							<span></span>
						</BtnDivider>
						<CallBtn href='tel:9162136418'>916-213-6418</CallBtn>
					</BtnGroup>
				</FormContent>
			</ContactForm>
		</ContactSection>
	);
};

export default Contacts;
