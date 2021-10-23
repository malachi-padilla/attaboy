import React from 'react';
import Carousel from '../../carousel/Carousel';
import {
	ServiceContents,
	ServiceParagraph,
	ServicesSection,
	TextBox,
	ServiceHeading,
	ServiceBtn,
} from './Services-css';

const Services = ({ isDesktop }) => {
	return (
		<ServicesSection id='services' isDesktop={isDesktop}>
			{isDesktop ? (
				<>
					<ServiceContents>
						<TextBox>
							<ServiceHeading>
								What we <span>do.</span>
							</ServiceHeading>
							<ServiceParagraph>
								Our residential services include both new installs, repairs of garage doors and openers. We are open
								24/7 for <span>emergency</span> repairs. Same-day service is also available. Call today for a free
								estimate or to have scheduled maintenance to keep things working smoothly.
							</ServiceParagraph>
							<ServiceBtn>call today</ServiceBtn>
						</TextBox>
					</ServiceContents>
					<Carousel isDesktop={isDesktop} />
				</>
			) : (
				<Carousel isDesktop={isDesktop} />
			)}
		</ServicesSection>
	);
};

export default Services;
