import React from 'react';
import Carousel from '../../carousel/Carousel';
import { ServicesSection } from './Services-css';

const Services = ({ isDesktop }) => {
	return (
		<ServicesSection id='services'>
			<Carousel isDesktop={isDesktop} />
		</ServicesSection>
	);
};

export default Services;
