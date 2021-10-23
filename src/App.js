import React, { useEffect, useState } from 'react';
import Landing from './components/landing/Landing';
import Nav from './components/nav-bar/Nav';
import Services from './components/sections/service-section/Services';
import Work from './components/sections/work-section/Work';
import About from './components/sections/about-section/About';
import Contacts from './components/sections/contact-section/Contacts';
import { getReviews } from './api/yelpData';

const App = () => {
	const getWidth = () => {
		if (window.innerWidth >= 770) {
			return true;
		} else {
			return false;
		}
	};
	const [isDesktop, setIsDesktop] = useState(getWidth);
	useEffect(() => {
		const handleIsDesktop = () => {
			setIsDesktop(getWidth);
		};
		window.addEventListener('resize', handleIsDesktop);
	}, []);

	useEffect(() => {
		getReviews();
		console.log();
	}, []);
	return (
		<>
			<Nav isDesktop={isDesktop} />
			<Landing isDesktop={isDesktop} />
			<Services isDesktop={isDesktop} />
			<Work isDesktop={isDesktop} />
			<About />
			<Contacts />
		</>
	);
};

export default App;
