"use client";


import Link from 'next/link';
import { useState } from 'react';

export default function Page() {
  const [please, $please] = useState(false);
  const [p, $p] = useState(null);
  const [interactionCount, setInteractionCount] = useState(0);

  const prettyPlease = () => {
    $please(true);
    setInteractionCount(0); // Reiniciar el contador a 0 al hacer hover sobre "Yes"
  };

  const nope = () => {
    const x = Math.random() * 90;
    const y = Math.random() * 90;

    $p({ x: `${x}%`, y: `${y}%` });

    if (interactionCount >= 4) {
      // Mostrar pompu-tears.gif si el contador es 4 o más
      $please(true);
    } else {
      // Mostrar cinaStand.gif si el contador es menos de 4
      $please(false);
    }

    setInteractionCount(interactionCount + 1);
  };

  const resetImage = () => {
    return please && interactionCount >=4 ? '/pompu-tears.gif' : please ? '/cinaexcited.gif' : '/cinaStand.gif';
  };

  const handleYesHover = () => {
    $please(true); // Mostrar siempre cinaexcited al hacer hover sobre "Yes"
  };

  const handleYesOut = () => {
    // Mostrar el GIF correspondiente según las reglas 1 y 2 al salir del hover sobre "Yes"
    $please(interactionCount >= 4);
  };

  return (
    <div className='box'>
      <img
        alt={please ? 'cina excited' : 'cina Stand'}
        className='gif'
        src={resetImage()}
      />
       {interactionCount >= 5
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