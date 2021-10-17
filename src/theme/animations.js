import { keyframes } from 'styled-components';

export const MoveInLeft = keyframes`
	0% {
		opacity: 0;
		transform: translateX(-10rem);
	}
	80% {
		transform: translateX(1rem);
	}
	100% {
		opacity: 1;
		transform: translateX(0);
	}
`;
export const MoveInRight = keyframes`
	0% {
		opacity: 0;
		transform: translateX(10rem);
	}
	80% {
		transform: translateX(-1rem);
	}
	100% {
		opacity: 1;
		transform: translateX(0);
	}
`;
export const MoveInBottom = keyframes`
	0% {
		opacity: 0;
		transform: translateY(4rem);
	}

	100% {
		opacity: 1;
		transform: translateY(0);
	}
`;
export const FadeIn = keyframes`
    0%{
        opacity:0;
    }
  
    100%{
        opacity: 1;
    }
`;
