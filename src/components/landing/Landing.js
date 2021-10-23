import React from 'react';
import {
	HeadingMain,
	HeadingSub,
	LandingBtn,
	LandingSection,
	LandingSectionContents,
	LandingText,
} from './Landing-css';
const Landing = ({ isDesktop }) => {
	return (
		<LandingSection>
			<LandingSectionContents>
				<LandingText>
					<HeadingMain isDesktop={isDesktop}>get a free estimate today</HeadingMain>
					<HeadingSub isDesktop={isDesktop}>"At our best and at your service"</HeadingSub>
				</LandingText>
				<LandingBtn href='#contact'>contact us now</LandingBtn>
			</LandingSectionContents>
		</LandingSection>
	);
};

export default Landing;
