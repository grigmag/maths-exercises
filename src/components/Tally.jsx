import React from 'react';

import './Tally.css';

import defaultIcon from '../icons/default.png';
import successIcon from '../icons/success.png';
import failIcon from '../icons/fail.png';

export default function Tally(props) {
  const iconsList = props.exerciseResults.map((el, idx) => {
    let imageSource, altText;

    if (el === 'success') {
      imageSource = successIcon;
      altText = 'check mark';
    } else if (el === 'fail') {
      imageSource = failIcon;
      altText = 'exclamation point';
    } else {
      imageSource = defaultIcon;
      altText = 'question mark';
    }

    return (
      <div className="flex-icon-container" key={idx}>
        <img src={imageSource} alt={altText} />
      </div>
    );
  });

  return (
    <div className="box">
      {iconsList}
      <div className="flex-icon"></div>
      <div className="flex-icon"></div>
    </div>
  );
}
