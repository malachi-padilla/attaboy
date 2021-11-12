import React from 'react';
import {
	Details,
	Logo,
	ProfileDetails,
	ProfileLink,
	ProfileName,
	ProfilePic,
	Rating,
	ReviewCard,
	ReviewCardFooter,
	ReviewCardHeader,
	ReviewText,
	ReviewTextBox,
} from './Reviews-css';

const Reviews = ({ reviews }) => {
	return (
		<>
			{reviews &&
				reviews.map((review) => (
					<ReviewCard key={review.author_url}>
						<ReviewCardHeader>
							<Logo></Logo>
							<Rating>
								<i className='fas fa-star'></i>
								<i className='fas fa-star'></i>
								<i className='fas fa-star'></i>
								<i className='fas fa-star'></i>
								<i className='fas fa-star'></i>
							</Rating>
						</ReviewCardHeader>
						<ReviewTextBox>
							<ReviewText>{review.text}</ReviewText>
						</ReviewTextBox>
						<ReviewCardFooter>
							<ProfilePic url={review.profile_photo_url}></ProfilePic>
							<ProfileDetails>
								<ProfileName>{review.author_name}</ProfileName>
								<span>
									<ProfileLink href={review.author_url} target='_blank'>{`@${review.author_name}`}</ProfileLink>
									{review.relative_time_description}
								</span>
							</ProfileDetails>
						</ReviewCardFooter>
					</ReviewCard>
				))}
		</>
	);
};

export default Reviews;
