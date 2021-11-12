import React from 'react';
import Carousel from '../../carousel/Carousel';
import {
	ServiceContents,
	ServiceParagraph,
	ServicesSection,
	TextBox,
	ServiceHeading,
	ServiceBtn,
	ListOfServices,
} from './Services-css';

const Services = ({ isDesktop }) => {
	return (
		<ServicesSection id='services' isDesktop={isDesktop}>
			{isDesktop ? (
				<>
					<ServiceContents>
						<TextBox>
							<ServiceHeading>What we do</ServiceHeading>
							<ServiceParagraph>
								Our residential services include both new installs, repairs of garage doors and openers. We are open
								24/7 for <strong>emergency</strong> repairs. Same-day service is also available. Call today for a free
								estimate or to have scheduled maintenance to keep things working smoothly.
							</ServiceParagraph>
							<ListOfServices>
								<li>
									<i className='fas fa-check-circle'></i>emergency repairs
								</li>
								<li>
									<i className='fas fa-check-circle'></i>custom door installs
								</li>
								<li>
									<i className='fas fa-check-circle'></i>spring conversions & installs
								</li>
								<li>
									<i className='fas fa-check-circle'></i>maintanence
								</li>
								<li>
									<i className='fas fa-check-circle'></i>openers & tracks
								</li>
							</ListOfServices>
							<ServiceBtn href='#contact'>contact us today</ServiceBtn>
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
