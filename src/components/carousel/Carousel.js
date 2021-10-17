import React, { useState } from 'react';
import { CarouselBody, CarouselBtn, CarouselContents, CarouselTextMain, EstimateBtn, TextBox } from './Carousel-css';
import Installs from '../../assets/installs.png';
import Repairs from '../../assets/repairs.png';
import Springs from '../../assets/springs_2.png';
import Openers from '../../assets/openers.png';

const Carousel = ({ isDesktop }) => {
	const images = [Installs, Repairs, Springs, Openers];
	const [image, setImage] = useState(images[0]);
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
			<CarouselContents>
				<CarouselBtn onClick={handleImageChangeLeft} isDesktop={isDesktop}>
					<i class='fas fa-angle-left'></i>
				</CarouselBtn>
				<TextBox>
					<CarouselTextMain isDesktop={isDesktop}>
						{image === images[0]
							? 'custom door installs'
							: image === images[1]
							? 'emergency repairs'
							: image === images[2]
							? 'spring repairs & installs'
							: 'openers & tracks'}
					</CarouselTextMain>
					<EstimateBtn href='#contact'>get an estimate</EstimateBtn>
				</TextBox>
				<CarouselBtn onClick={handleImageChangeRight} isDesktop={isDesktop}>
					<i class='fas fa-angle-right'></i>
				</CarouselBtn>
			</CarouselContents>
		</CarouselBody>
	);
};

export default Carousel;
