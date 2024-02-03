'use client'
import React from 'react';
import Link from 'next/link';

export default function Page() {
  const openYouTubeVideo = () => {
    const youtubeVideoId = '_rRhiVpoov8';
    const youtubeVideoUrl = `https://www.youtube.com/watch?v=${youtubeVideoId}`;
    window.open(youtubeVideoUrl, '_blank');
    window.location.href = '/';
  };

  return (
    <div className='box'>
      <img alt='cina yayyy' className='image' src='/cina-yay.gif' />
      Yayyy~
      <div>
        <button className='yes' onClick={openYouTubeVideo}>
          Abrir Video de YouTube y Volver
        </button>
      </div>
    </div>
  );
}
