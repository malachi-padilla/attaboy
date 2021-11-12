import styled from 'styled-components';
import googleLogo from '../../assets/google.svg';

export const ReviewCard = styled.div`
	display: flex;
	flex-direction: column;
	padding: 1rem;
	max-height: fit-content;
	width: 45%;
	background-color: ${(props) => props.theme.colors.light};
	box-shadow: 0.1rem 0.1rem 2rem ${(props) => props.theme.colors.shadow};
	border-radius: 4px;
	overflow: hidden;
	gap: 0.5rem;
`;

export const ReviewCardHeader = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 25%;
	justify-content: center;
	align-items: flex-start;
`;

export const Logo = styled.div`
	height: 4rem;
	width: 4rem;
	background-image: url(${googleLogo});
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center center;
`;

export const Rating = styled.span`
	color: #ffd60a;
	font-size: 1.6rem;
`;

export const ReviewTextBox = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 75%;
	width: 100%;
`;

export const ReviewText = styled.p`
	font-size: 1.2rem;
	color: ${(props) => props.theme.colors.greyDark};
`;

export const ReviewCardFooter = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	height: 25%;
	justify-content: flex-start;
	align-items: center;
	gap: 1rem;
`;

export const ProfilePic = styled.div`
	height: 4rem;
	width: 4rem;
	border-radius: 50%;
	background-image: url(${(props) => props.url});
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center center;
`;

export const ProfileDetails = styled.div`
	width: 70%;
	height: 100%;
	display: flex;
	flex-direction: column;

	span {
		display: flex;
		width: 100%;
		flex-direction: row;
		align-items: center;
		justify-content: flex-start;
		gap: 0.5rem;
		font-size: 1.2rem;
		color: ${(props) => props.theme.colors.greyDark};
	}
`;
export const ProfileName = styled.p`
	font-size: 1.4rem;
	color: ${(props) => props.theme.colors.greyDark};
	font-weight: 600;
	text-transform: capitalize;
`;

export const ProfileLink = styled.a`
	font-size: 1.2rem;
	color: ${(props) => props.theme.colors.greyMed};
`;
