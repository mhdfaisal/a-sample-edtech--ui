import React from 'react';
import Avatar from 'react-avatar';
import Icon from '@mdi/react';
import { mdiThumbUpOutline, mdiThumbDownOutline, mdiShareVariantOutline } from '@mdi/js';

import MessageCircleImage from '../../../assets/images/message-circle.png';
import StarRated from '../../../assets/images/star-rated.png';
import StarNonRated from '../../../assets/images/non-rated-star.png';

import './style.css';

const QuestionCard = () => {
	return (
		<div className='question__card'>
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
					<h3 className='question__card__heading'>¿Cuáles son los múltiplos del 7?</h3>
					<p className='question__card__description'>
						La verdad no me queda muy claro cuáles son los múltiplos del 7 porque...
					</p>
				</div>
				<div>
					<img src={MessageCircleImage} alt='messages' />
					<span>72</span>
				</div>
			</div>
			<div className='question__card__footer'>
				<div className='question__card__feedback'>
					<Icon path={mdiThumbUpOutline} title='Like' size={1} color='#9A9CB5' />
					<Icon path={mdiThumbDownOutline} title='Dislike' size={1} color='#9A9CB5' />
				</div>
				<div>Pregunta juan.c23 en Matemáticas 6º</div>
				<div>
					<Icon path={mdiShareVariantOutline} title='share' size={1} color='#9A9CB5' />
					<img src={StarNonRated} alt='not-rated' />
				</div>
			</div>
		</div>
	);
};

export default QuestionCard;
