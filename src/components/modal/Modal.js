import React from 'react';
import {
	ExitBtn,
	ModalBackground,
	ModalBox,
	ModalMessage,
	ModalText,
	ModalTitle,
	ModalTitleIcon,
	PhoneBox,
} from './Modal-css';

const Modal = ({ error, setOpen, isDesktop }) => {
	const handleExit = (e) => {
		setOpen(false);
	};
	return (
		<ModalBackground onClick={() => setOpen(false)}>
			<ModalBox isDesktop={isDesktop} onClick={(e) => e.stopPropagation()}>
				<ExitBtn onClick={handleExit}>
					<i class='fas fa-times'></i>
				</ExitBtn>
				<ModalText>
					<ModalTitleIcon error={error}>
						{error ? <i class='fas fa-exclamation-circle'></i> : <i class='fas fa-check-circle'></i>}
					</ModalTitleIcon>
					<ModalTitle error={error}>{error ? 'uh, oh' : 'thank you'}</ModalTitle>
					<ModalMessage>
						{error
							? 'there was an error sending your message, please try again or give us a call'
							: "your message has been sent, we'll be with you shortly, if you would like someone to speak with you immediately, please call"}
					</ModalMessage>
					<PhoneBox href='tel:9162136418'>916-213-6418</PhoneBox>
				</ModalText>
			</ModalBox>
			s
		</ModalBackground>
	);
};

export default Modal;
