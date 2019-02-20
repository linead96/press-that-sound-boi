import React from 'react';

  const AllButtons = ({clickRef,soundMapButton}) => {
    let buttons = [];
    for(let key in soundMapButton){
     buttons.push(<button onClick={clickRef}>{key}</button>);
    }
    return buttons;
  }

const Buttons = ({clickRef,soundMapButton}) => {
		return(
			<div>
			  <AllButtons clickRef = {clickRef} soundMapButton = {soundMapButton}/>
			</div>
		)
}

export default Buttons;