import React, { useState } from 'react';
import { CarouselBody, CarouselBtn, CarouselContents, CarouselTextMain, EstimateBtn, TextBox } from './Carousel-css';
import Installs from '../../assets/installs.png';
import Repairs from '../../assets/repairs.png';
import Springs from '../../assets/springs_2.png';
import Openers from '../../assets/openers.png';
import { MoveInRight, MoveInLeft } from '../../theme/animations';

const Carousel = () => {
	const images = [Repairs, Installs, Springs, Openers];
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
		<CarouselBody img={image}>
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
					}}>
					<i className='fas fa-angle-left'></i>
				</CarouselBtn>
				<TextBox>
					<CarouselTextMain>
						{image === images[0]
							? 'emergency repairs'
							: image === images[1]
							? 'custom door installs'
							: image === images[2]
							? 'spring conversions & installs'
							: 'openers & tracks'}
					</CarouselTextMain>

					<EstimateBtn href='#contact'>
						{image === images[0]
							? 'call now'
							: image === images[1]
							? 'get an estimate'
							: image === images[2]
							? 'get an estimate'
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
					}}>
					<i className='fas fa-angle-right'></i>
				</CarouselBtn>
			</CarouselContents>
		</CarouselBody>
	);
};

export default Carousel;
