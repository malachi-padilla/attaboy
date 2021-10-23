import React from 'react';
import {
	Caption,
	ImageCol,
	LogoImg,
	LogoText,
	LogoTextBox,
	PopUpText,
	Row,
	WorkSectionContainer,
	WorkSectionGallery,
	WorkSectionHeading,
	WorkSectionLogo,
	WorkSectionLogos,
	WorkSectionTextBox,
} from './Work-css';

import Google from '../../../assets/google.svg';
import Angie from '../../../assets/angie.svg';
import Yelp from '../../../assets/yelp_logo.png';
import Img_one from '../../../assets/job1.jpeg';
import Img_two from '../../../assets/job2.jpeg';
import Img_three from '../../../assets/job3.jpeg';
import Img_four from '../../../assets/job4.jpeg';
import Img_five from '../../../assets/job5.jpeg';
import Img_six from '../../../assets/installs.png';
import Img_7 from '../../../assets/truck2.jpeg';
import Img_8 from '../../../assets/springs.png';
import Img_9 from '../../../assets/truck.png';

const Work = ({ isDesktop }) => {
	return (
		<WorkSectionContainer id='work' isDesktop={isDesktop}>
			<WorkSectionTextBox isDesktop={isDesktop}>
				<WorkSectionHeading isDesktop={isDesktop}>
					done <span>locally.</span> done right.
				</WorkSectionHeading>
			</WorkSectionTextBox>
			<WorkSectionLogos isDesktop={isDesktop}>
				<Row>
					<WorkSectionLogo>
						<LogoTextBox>
							<LogoText>
								4.5
								<span>
									<i className='fas fa-star'></i>
									<i className='fas fa-star'></i>
									<i className='fas fa-star'></i>
									<i className='fas fa-star'></i>
									<i className='fas fa-star-half-alt'></i>
								</span>
							</LogoText>
						</LogoTextBox>
						<LogoImg>
							<img src={Yelp} alt='yelp' />
						</LogoImg>
					</WorkSectionLogo>
					<WorkSectionLogo>
						<LogoTextBox>
							<LogoText>
								5.0
								<span>
									<i className='fas fa-star'></i>
									<i className='fas fa-star'></i>
									<i className='fas fa-star'></i>
									<i className='fas fa-star'></i>
									<i className='fas fa-star'></i>
								</span>
							</LogoText>
						</LogoTextBox>
						<LogoImg>
							<img src={Angie} alt='angieslist' />
						</LogoImg>
					</WorkSectionLogo>
				</Row>
				<Row>
					<WorkSectionLogo style={{ position: 'absolute', top: isDesktop ? '7rem' : '6rem' }}>
						<LogoTextBox>
							<LogoText>
								4.8
								<span>
									<i className='fas fa-star'></i>
									<i className='fas fa-star'></i>
									<i className='fas fa-star'></i>
									<i className='fas fa-star'></i>
									<i className='fas fa-star-half-alt'></i>
								</span>
							</LogoText>
						</LogoTextBox>
						<LogoImg>
							<img src={Google} alt='google' />
						</LogoImg>
					</WorkSectionLogo>
				</Row>
			</WorkSectionLogos>
			<WorkSectionGallery isDesktop={isDesktop}>
				<Caption>View Gallery</Caption>
				<ImageCol>
					<img src={Img_three} alt='gallery_3' />
					<img src={Img_8} alt='gallery_4' />
				</ImageCol>
				<ImageCol>
					<img src={Img_one} alt='gallery_1' />
					<img src={Img_four} alt='gallery_4' />
					<img src={Img_five} alt='gallery_5' />
				</ImageCol>
				<ImageCol>
					<img src={Img_two} alt='gallery_2' />
					<img src={Img_six} alt='gallery_6' />
					<img src={Img_7} alt='gallery_6' />
				</ImageCol>
			</WorkSectionGallery>
		</WorkSectionContainer>
	);
};

export default Work;
