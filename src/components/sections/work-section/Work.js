import React, { useState } from 'react';
import {
	Caption,
	ImageCol,
	LogoImg,
	LogoText,
	LogoTextBox,
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
import Img_9 from '../../../assets/job6.jpeg';
import Img_10 from '../../../assets/job7.jpeg';
import Img_11 from '../../../assets/job8.jpeg';
import Img_12 from '../../../assets/job9.jpeg';
import Img_13 from '../../../assets/job10.jpeg';
import Img_14 from '../../../assets/job11.jpeg';
import GalleryModal from '../../modal/GalleryModal';

const Work = ({ isDesktop }) => {
	const images = [
		Img_one,
		Img_two,
		Img_three,
		Img_four,
		Img_five,
		Img_six,
		Img_9,
		Img_10,
		Img_11,
		Img_12,
		Img_13,
		Img_14,
	];
	const [galleryOpen, setGalleryOpen] = useState(false);
	const [galleryImage, setGalleryImage] = useState([images[0]]);
	const handleImageChangeRight = () => {
		let index = images.indexOf(galleryImage);
		if (galleryImage !== images[images.length - 1]) {
			index++;
			setGalleryImage(images[index]);
		} else {
			setGalleryImage(images[0]);
		}
	};

	const handleImageChangeLeft = () => {
		let index = images.indexOf(galleryImage);
		if (galleryImage !== images[0]) {
			index--;
			setGalleryImage(images[index]);
		} else {
			setGalleryImage(images[images.length - 1]);
		}
	};

	return (
		<WorkSectionContainer id='work' isDesktop={isDesktop}>
			{galleryOpen && (
				<GalleryModal
					galleryImage={galleryImage}
					handleImageChangeLeft={handleImageChangeLeft}
					handleImageChangeRight={handleImageChangeRight}
					isDesktop={isDesktop}
					setGalleryOpen={setGalleryOpen}
				/>
			)}
			<WorkSectionTextBox isDesktop={isDesktop}>
				<WorkSectionHeading isDesktop={isDesktop}>
					done <span>locally.</span> done right.
				</WorkSectionHeading>
			</WorkSectionTextBox>
			<WorkSectionLogos isDesktop={isDesktop}>
				<Row>
					<WorkSectionLogo
						href='https://www.yelp.com/biz/atta-boy-garage-door-repair-rancho-cordova'
						target='_blank'
						isDesktop={isDesktop}>
						<LogoImg>
							<img src={Yelp} alt='yelp' />
						</LogoImg>
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
					</WorkSectionLogo>
					<WorkSectionLogo
						href='https://www.angi.com/companylist/us/ca/rancho-cordova/attaboy-garage-door-repair-reviews-8144085.htm'
						target='_blank'>
						<LogoImg>
							<img src={Angie} alt='angieslist' />
						</LogoImg>
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
					</WorkSectionLogo>
				</Row>
				<Row>
					<WorkSectionLogo
						style={{ position: 'absolute', top: isDesktop ? '7rem' : '6rem' }}
						href='https://www.google.com/maps/place/ATTABOY+GARAGE+DOOR+%26+REPAIR/@38.564453,-121.2043417,17z/data=!3m1!4b1!4m5!3m4!1s0x809ac5ab60ba02e9:0x5b8905d0f93e42a1!8m2!3d38.564453!4d-121.202153'
						target='_blank'>
						<LogoImg>
							<img src={Google} alt='google' />
						</LogoImg>
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
					</WorkSectionLogo>
				</Row>
			</WorkSectionLogos>
			<WorkSectionGallery isDesktop={isDesktop}>
				<Caption onClick={() => setGalleryOpen(true)}>View Gallery</Caption>
				<ImageCol>
					<img src={Img_three} alt='gallery_1' />
					<img src={Img_8} alt='gallery_2' />
					<img src={Img_9} alt='gallery_3' />
					<img src={Img_12} alt='gallery_4' />
				</ImageCol>
				<ImageCol>
					<img src={Img_one} alt='gallery_5' />
					<img src={Img_four} alt='gallery_6' />
					<img src={Img_five} alt='gallery_7' />
					<img src={Img_10} alt='gallery_8' />
					<img src={Img_13} alt='gallery_9' />
				</ImageCol>
				<ImageCol>
					<img src={Img_two} alt='gallery_10' />
					<img src={Img_six} alt='gallery_11' />
					<img src={Img_7} alt='gallery_12' />
					<img src={Img_11} alt='gallery_13' />
					<img src={Img_14} alt='gallery_14' />
				</ImageCol>
			</WorkSectionGallery>
		</WorkSectionContainer>
	);
};

export default Work;
