import React from 'react';
import { FbLink, FooterContainer, FooterContents, Icons, License, YelpLink } from './Footer-css';

const Footer = () => {
	return (
		<FooterContainer>
			<FooterContents>
				<License>LIC #1069116</License>
				<Icons>
					<YelpLink href='https://www.yelp.com/biz/atta-boy-garage-door-repair-rancho-cordova' target='_blank'>
						<i className='fab fa-yelp'></i>
					</YelpLink>
					<FbLink href='https://www.facebook.com/garagedoorservuces/?ref=bookmarks' target='_blank'>
						<i className='fab fa-facebook'></i>
					</FbLink>
				</Icons>
			</FooterContents>
		</FooterContainer>
	);
};

export default Footer;
