import React from 'react';
import { FbLink, FooterContainer, FooterContents, Icons, License, YelpLink } from './Footer-css';

const Footer = () => {
	return (
		<FooterContainer>
			<FooterContents>
				<License>LIC #1069116</License>
				<Icons>
					<YelpLink>
						<i className='fab fa-yelp'></i>
					</YelpLink>
					<FbLink>
						<i className='fab fa-facebook'></i>
					</FbLink>
				</Icons>
			</FooterContents>
		</FooterContainer>
	);
};

export default Footer;
