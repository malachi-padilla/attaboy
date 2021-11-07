import React from 'react';
import {
	GalleryBackground,
	GalleryImage,
	GalleryModalBtn,
	GalleryModelBtns,
	GalleryModelContents,
} from './GalleryModal-css';

const GalleryModal = ({ galleryImage, handleImageChangeLeft, handleImageChangeRight }) => {
	return (
		<GalleryBackground>
			<GalleryModelContents>
				<GalleryImage image={galleryImage}>
					<GalleryModelBtns>
						<GalleryModalBtn></GalleryModalBtn>
						<GalleryModalBtn></GalleryModalBtn>
					</GalleryModelBtns>
				</GalleryImage>
			</GalleryModelContents>
		</GalleryBackground>
	);
};

export default GalleryModal;
