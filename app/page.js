"use client";


import Link from 'next/link';
import { useState } from 'react';

export default function Page() {
  const [please, $please] = useState(false);
  const [p, $p] = useState(null);
  const [interactionCount, setInteractionCount] = useState(0);

  const prettyPlease = () => {
    $please(true);
    setInteractionCount(0);
  };

  const nope = () => {
    const x = Math.random() * 90;
    const y = Math.random() * 90;

    $p({ x: `${x}%`, y: `${y}%` });

    if (interactionCount >= 9) {
      $please(true);
    } else {
      $please(false);
    }

    setInteractionCount(interactionCount + 1);
  };

  const resetImage = () => {
    return please && interactionCount >=9 ? '/pompu-tears.gif' : please ? '/cinaexcited.gif' : '/cinaStand.gif';
  };

  const handleYesHover = () => {
    $please(true);
  };

  const handleYesOut = () => {
    
    $please(interactionCount >= 9);
  };

  return (
    <div className='box'>
      <img
        alt={please ? 'cina excited' : 'cina Stand'}
        className='gif'
        src={resetImage()}
      />
       {interactionCount >= 10
          ? '¡No me amas?!'
          : 'Pau me darías el honor de ser tu Valentine?'}
      <div className='btns'>
        <Link className='yes' href='/yay'>
          <button onMouseOver={prettyPlease} onMouseOut={handleYesOut} onMouseEnter={handleYesHover} onMouseLeave={handleYesOut}>
            Si
          </button>
        </Link>
        <button
          className='no'
          style={p ? { position: 'absolute', top: p.x, right: p.y } : null}
          onClick={nope}
          onMouseOver={nope}
        >
          No
        </button>
      </div>
    </div>
  );
}