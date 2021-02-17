import React from 'react';
import Avatar from 'react-avatar';

import MessageCircleImage from '../../../assets/images/message-circle.png';
import StarRated from '../../../assets/images/star-rated.png';
import StarNonRated from '../../../assets/images/non-rated-star.png';
import ThumbsUp from '../../../assets/images/thumbs-up.png';
import ThumbsDown from '../../../assets/images/thumbs-down.png';
import Share from '../../../assets/images/share-2.png';
import stringHelpers from '../../../utils/string-helpers';

import './style.css';

const QuestionCard = ({ questionItem }) => {
	const {
		name,
		question,
		comments_count,
		description,
		disliked,
		favorite,
		id,
		liked,
		thread,
		group,
	} = questionItem;
	return (
		<div className='question__card'>
			<div className='question__card__content'>
				<div className='question__card__avatar'>
					<Avatar
						color={Avatar.getRandomColor('sitebase', ['red', 'green', 'blue'])}
						name={name}
						size='56'
						round
					/>
				</div>
				<div className='question__card__body'>
					<div>
						<h3 className='question__card__heading'>{question}</h3>
						<p className='question__card__description'>
							{stringHelpers.getTrimmedString(description)}
						</p>
					</div>
				</div>
				<div className='question__card__comment'>
					<img
						src={MessageCircleImage}
						alt='messages'
						className='question__card__comment_image'
					/>
					<span className='question__card__comment_count'>{comments_count}</span>
				</div>
			</div>
			<div className='question__card__footer'>
				<div className='question__card__feedback'>
					<img src={ThumbsUp} alt='like' className='question__card__like-img' />
					<img src={ThumbsDown} alt='dislike' className='question__card__dislike-img' />
				</div>
				<div className='question__card__posted-by'>
					<span>
						<span className='question__card__posted-by-label'>Pregunta</span>
						{thread} {` `}
						<span className='question__card__subject'>{group}</span>
					</span>
				</div>
				<div className='question__card__social'>
					<img src={Share} alt='share' className='question__card__share' />
					<div className='question__card__comment--small'>
						<img
							src={MessageCircleImage}
							alt='messages'
							className='question__card__comment_image'
						/>
						<span className='question__card__comment_count'>{comments_count}</span>
					</div>
					<img
						src={favorite ? StarRated : StarNonRated}
						alt='favorite'
						className='question__card__favorite'
					/>
				</div>
			</div>
		</div>
	);
};

export default QuestionCard;
