import React from 'react'
import './FutureCard.css'
import Self from '../../assets/images/Self_card.png';

function SelfExplorer({ setTestMode }) {
  const startTest = () => {
    setTestMode(true)
  }

  return (
    <div className="main-self mt-6">
      <div className="video-placeholder">
        <img src={Self} alt="Video Placeholder" className="video-image" />
      </div>
      <button type="button" className="take" onClick={startTest}>
        Take your sample test now
        
      </button><br />
      <p className="why">Why?</p>
      <button type="button" className="start-button" onClick={startTest}>
        Start Now
      </button>
      
    </div>
  )
}

export default SelfExplorer
