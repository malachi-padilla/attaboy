import styled from 'styled-components';

export const GalleryBackground = styled.div`
	position: absolute;
	top: 0;
	height: 100%;
	width: 100%;
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
	height: ${(props) => (props.isDesktop ? '80%' : '50%')};
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
	padding: 1rem;
	position: relative;
`;

export const GalleryModelBtns = styled.div`
	display: flex;
	width: 100%;
	flex-direction: row;
	justify-content: space-between;
`;

export const GalleryModalBtn = styled.button`
	padding: 1rem;
	width: 2rem;
	height: 2rem;
	background-color: rgba(0, 0, 0, 0.7);
	border: none;
	color: ${(props) => props.theme.colors.light};
	/* clip-path: circle(50% at 50% 50%); */
	border-radius: 50%;
	font-size: 1.6rem;
	cursor: pointer;
	transition: all 200ms ease-in;
	text-align: center;
	&:hover {
		background-color: rgba(0, 0, 0, 0.3);
	}
`;

export const ExitBtn = styled(GalleryModalBtn)`
	position: absolute;
	top: 0;
	left: 0;
	border-radius: 0;
`;
