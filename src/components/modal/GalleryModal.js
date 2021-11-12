import React from 'react';
import {
	GalleryBackground,
	GalleryImage,
	GalleryModalBtn,
	GalleryModelBtns,
	GalleryModelContents,
	ExitBtn,
} from './GalleryModal-css';

const GalleryModal = ({ galleryImage, handleImageChangeLeft, handleImageChangeRight, isDesktop, setGalleryOpen }) => {
	return (
		<GalleryBackground>
			<GalleryModelContents isDesktop={isDesktop}>
				<GalleryImage image={galleryImage}>
					<ExitBtn onClick={() => setGalleryOpen(false)}>
						<i className='fas fa-times'></i>
					</ExitBtn>
					<GalleryModelBtns>
						<GalleryModalBtn onClick={handleImageChangeLeft}>
							<i className='fas fa-chevron-left'></i>
						</GalleryModalBtn>
						<GalleryModalBtn onClick={handleImageChangeRight}>
							<i className='fas fa-chevron-right'></i>
						</GalleryModalBtn>
					</GalleryModelBtns>
				</GalleryImage>
			</GalleryModelContents>
		</GalleryBackground>
	);
};

export default GalleryModal;
