import React from 'react';
import ReactHowler from 'react-howler';

const Sounds = ({soundfile}) => {
		return(
			<div>
				 <ReactHowler
		          src={soundfile}
		          playing={true}
		          />
			</div>
		)
}

export default Sounds;