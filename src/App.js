import React from 'react';
import Landing from './components/landing/Landing';
import Nav from './components/nav-bar/Nav';
import Services from './components/sections/service-section/Services';
import Work from './components/sections/work-section/Work';
import About from './components/sections/about-section/About';
import Contacts from './components/sections/contact-section/Contacts';

const App = () => {
	return (
		<>
			<Nav />
			<Landing />
			<Services />
			<Work />
			<About />
			<Contacts />
		</>
	);
};

export default App;
