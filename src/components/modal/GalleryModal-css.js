import styled from 'styled-components';

export const GalleryBackground = styled.div`
	position: absolute;
	height: 100vh;
	width: 100vw;
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 3;
	background-color: rgba(0, 0, 0, 0.9);
`;

export const GalleryModelContents = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 50%;
	width: 100%;
`;

export const GalleryImage = styled.div`
	display: flex;
	height: 100%;
	width: 90%;
	align-items: center;
	justify-content: center;
	background-image: url(${(props) => props.image});
	background-size: cover;
	background-position: center center;
	background-repeat: no-repeat;
`;

export const GalleryModelBtns = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
`;

export const GalleryModalBtn = styled.button``;
