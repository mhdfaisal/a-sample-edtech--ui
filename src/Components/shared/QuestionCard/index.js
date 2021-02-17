import React from 'react';
import Avatar from 'react-avatar';

import MessageCircleImage from '../../../assets/images/message-circle.png';
import StarRated from '../../../assets/images/star-rated.png';
import StarNonRated from '../../../assets/images/non-rated-star.png';
import ThumbsUp from '../../../assets/images/thumbs-up.png';
import ThumbsDown from '../../../assets/images/thumbs-down.png';
import Share from '../../../assets/images/share-2.png';

import './style.css';

const QuestionCard = () => {
	return (
		<div className='question__card'>
			<div className='question__card__content'>
				<div className='question__card__avatar'>
					<Avatar
						color={Avatar.getRandomColor('sitebase', ['red', 'green', 'blue'])}
						name='Wim Mostmans'
						size='56'
						round
					/>
				</div>
				<div className='question__card__body'>
					<div>
						<h3 className='question__card__heading'>
							¿Cuáles son los múltiplos del 7?
						</h3>
						<p className='question__card__description'>
							La verdad no me queda muy claro cuáles son los múltiplos del 7 porque...
						</p>
					</div>
				</div>
				<div className='question__card__comment'>
					<img
						src={MessageCircleImage}
						alt='messages'
						className='question__card__comment_image'
					/>
					<span className='question__card__comment_count'>72</span>
				</div>
			</div>
			<div className='question__card__footer'>
				<div className='question__card__feedback'>
					<img src={ThumbsUp} alt='like' className='question__card__like-img' />
					<img src={ThumbsDown} alt='dislike' className='question__card__dislike-img' />
				</div>
				<div className='question__card__posted-by'>
					<span>
						Pregunta juan.c23 en{' '}
						<span className='question__card__subject'>Matemáticas 6º</span>
					</span>
				</div>
				<div className='question__card__social'>
					<img src={Share} alt='share' className='question__card__share' />
					<img src={StarRated} alt='favorite' className='question__card__favorite' />
				</div>
			</div>
		</div>
	);
};

export default QuestionCard;
