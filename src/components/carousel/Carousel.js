import React, { useState } from 'react';
import { CarouselBody, CarouselBtn, CarouselContents, CarouselTextMain, EstimateBtn, TextBox } from './Carousel-css';
import Installs from '../../assets/installs.png';
import Repairs from '../../assets/repairs.png';
import Springs from '../../assets/springs_2.png';
import Openers from '../../assets/openers.png';
import { MoveInRight, MoveInLeft } from '../../theme/animations';

const Carousel = ({ isDesktop }) => {
	const images = [Installs, Repairs, Springs, Openers];
	const [image, setImage] = useState(images[0]);
	const [animate, setAnimate] = useState(false);
	const [animation, setAnimation] = useState(null);
	const handleImageChangeRight = () => {
		let index = images.indexOf(image);
		if (image !== images[images.length - 1]) {
			index++;
			setImage(images[index]);
		} else {
			setImage(images[0]);
		}
	};

	const handleImageChangeLeft = () => {
		let index = images.indexOf(image);
		if (image !== images[0]) {
			index--;
			setImage(images[index]);
		} else {
			setImage(images[images.length - 1]);
		}
	};

	return (
		<CarouselBody img={image} isDesktop={isDesktop}>
			<CarouselContents animate={animate} animation={animation}>
				<CarouselBtn
					onClick={() => {
						if (!animate) {
							handleImageChangeLeft();
							setAnimation(MoveInRight);
							setAnimate(true);
							setTimeout(() => {
								setAnimate(false);
							}, 1000);
						}
					}}
					isDesktop={isDesktop}>
					<i className='fas fa-angle-left'></i>
				</CarouselBtn>
				<TextBox>
					<CarouselTextMain isDesktop={isDesktop}>
						{image === images[0]
							? 'custom door installs'
							: image === images[1]
							? 'emergency repairs'
							: image === images[2]
							? 'spring conversions & installs'
							: 'openers & tracks'}
					</CarouselTextMain>
					<EstimateBtn href='#contact'>
						{image === images[0]
							? 'get an estimate'
							: image === images[1]
							? 'call now'
							: image === images[2]
							? 'call now'
							: 'get an estimate'}
					</EstimateBtn>
				</TextBox>
				<CarouselBtn
					onClick={() => {
						if (!animate) {
							handleImageChangeRight();
							setAnimation(MoveInLeft);
							setAnimate(true);
							setTimeout(() => {
								setAnimate(false);
							}, 1000);
						}
					}}
					isDesktop={isDesktop}>
					<i className='fas fa-angle-right'></i>
				</CarouselBtn>
			</CarouselContents>
		</CarouselBody>
	);
};

export default Carousel;
