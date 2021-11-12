import React from 'react';
import Reviews from '../../reviews/Reviews';
import {
	AboutSection,
	AboutSectionHeader,
	HeaderMain,
	HeaderSub,
	HeaderTitle,
	HeaderParagraph,
	HeaderBtn,
	AboutReviews,
} from './About-css';

const About = ({ isDesktop, reviews }) => {
	return (
		<AboutSection id='about'>
			<AboutSectionHeader isDesktop={isDesktop}>
				<HeaderTitle isDesktop={isDesktop}>at attaboy</HeaderTitle>
				<HeaderMain isDesktop={isDesktop}> we're more than just a garage door company</HeaderMain>
				<HeaderSub isDesktop={isDesktop}> We're also your neighbors</HeaderSub>
				<HeaderParagraph isDesktop={isDesktop}>
					With over 15 years experience and a proven track record. We are working with you to have all your garage door
					needs met we strive for perfection, satisfaction is our guarantee. Call us today and bring your home garage
					door project to a new level and be a trendsetter in your neighborhood.
				</HeaderParagraph>
				<HeaderBtn href='#contact'>Contact us today</HeaderBtn>
			</AboutSectionHeader>
			{isDesktop && (
				<AboutReviews>
					<Reviews reviews={reviews} />
				</AboutReviews>
			)}
		</AboutSection>
	);
};

export default About;
