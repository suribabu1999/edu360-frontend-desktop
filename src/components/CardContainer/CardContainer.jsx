import React, { useState, useRef, useEffect } from 'react';
import MyFuture from '../MyFuture/MyFuture';
import EduPro from '../EduPro/EduPro';
import Socio from '../Social/Social';

const CARDS = [
  {
    id: 'myFuture',
    component: MyFuture,
    zIndex: 'z-30',
    label: 'My Future',
    bgClass: 'bg-red-300',
  },
  {
    id: 'eduPro',
    component: EduPro,
    zIndex: 'z-20',
    label: 'EDU Pro',
    bgClass: 'bg-green-500',
  },
  {
    id: 'socio',
    component: Socio,
    zIndex: 'z-10',
    label: 'Socio',
    bgClass: 'bg-yellow-300',
  },
];

const CardContainer = () => {
  const [activeCard, setActiveCard] = useState('myFuture');
  const audioRef = useRef(null);
  const [audioLoaded, setAudioLoaded] = useState(false);

  useEffect(() => {
    const audio = new Audio('/page-flip.mp3');
    audio.addEventListener('canplaythrough', () => setAudioLoaded(true));
    audio.addEventListener('error', () => console.warn('Audio file could not be loaded'));
    audioRef.current = audio;

    return () => {
      audio.removeEventListener('canplaythrough', () => setAudioLoaded(true));
      audio.removeEventListener('error', () => console.warn('Audio file could not be loaded'));
    };
  }, []);

  const playPageFlipSound = () => {
    if (audioRef.current && audioLoaded) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(error => console.warn('Audio playback failed', error));
    }
  };

  const handleCardChange = (card) => {
    if (card !== activeCard) {
      setActiveCard(card);
      playPageFlipSound();
    }
  };

  const getCardClass = (id) => {
    const baseClass =
      'transition-all duration-700 ease-in-out transform rounded-lg shadow-lg';
    return activeCard === id ? `${baseClass} flex-grow` : `${baseClass} w-[50px] cursor-pointer`;
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <div className="relative w-full h-[500px] flex overflow-hidden rounded-lg bg-white">
        {CARDS.map(({ id, component: Card, zIndex, label, bgClass }) => (
          <div
            key={id}
            className={`${getCardClass(id)} ${zIndex}`}
            onClick={() => handleCardChange(id)}
          >
            {activeCard === id ? (
              <div className="w-full h-full">
                <Card />
              </div>
            ) : (
              <div
                className={`h-full flex items-center justify-center text-white font-bold ${bgClass}`}
              >
                <div className="rotate-90">{label}</div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardContainer;
