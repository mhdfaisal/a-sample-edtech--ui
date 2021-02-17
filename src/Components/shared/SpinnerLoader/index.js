import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

import './spinner-loader.css';

const SpinnerLoader = (props) => {
	return (
		<div className='spinner__loader'>
			<ClipLoader {...props} />
		</div>
	);
};

export default SpinnerLoader;
