import React, { useState, useEffect } from 'react';
import './FutureCard.css';
import SelfExplorer from './SelfExplorer';
import QuizSection from './QuizSection';

const MyFutureCard = ({
  shadow,
  futureCardButton,
  setFutureCardButton,
  showContent,
  setShowContent,
}) => {
  const [activeTab, setActiveTab] = useState('Self Explorer');
  const [testMode, setTestMode] = useState(false);

  const cardHandler = () => {
    setFutureCardButton(true);
    setShowContent(true);
  };

  useEffect(() => {
    cardHandler();
  }, []);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  function buttonHandler() {
    setFutureCardButton(true);
    setShowContent(true);
    setTestMode(false);
  }

  return (
    <div
      className={`w-full h-full border-2 rounded-tl-[50px] shadow-card rounded-bl-[50px] flex flex-col items-center justify-start futurecard ${shadow}`}
      onClick={cardHandler}
      style={{ width: '100%' }}
    >
      <div className="card-sideButton">
        {!futureCardButton && (
          <button type="button" onClick={buttonHandler}>
            Future card
          </button>
        )}
      </div>
      {showContent && !testMode && (
        <div className="content">
          <h2 className="text-black text-xl mb-4">My Future Card</h2>
          <div className="tabs-container FutureCard-Nav">
            <button
              onClick={() => handleTabClick('Self Explorer')}
              className={`tab-button ${
                activeTab === 'Self Explorer' ? 'active' : ''
              }`}
            >
              Self Explorer
            </button>
            <button
              onClick={() => handleTabClick('My Checklist')}
              className={`tab-button ${
                activeTab === 'My Checklist' ? 'active' : ''
              }`}
            >
              My Checklist
            </button>
            <button
              onClick={() => handleTabClick('My Career')}
              className={`tab-button ${
                activeTab === 'My Career' ? 'active' : ''
              }`}
            >
              My Career
            </button>
            <button
              onClick={() => handleTabClick('My Scholarship')}
              className={`tab-button ${
                activeTab === 'My Scholarship' ? 'active' : ''
              }`}
            >
              My Scholarship
            </button>
          </div>

          {activeTab === 'Self Explorer' && (
            <SelfExplorer setTestMode={setTestMode} />
          )}
        </div>
      )}

      {showContent && testMode && <QuizSection />}
    </div>
  );
};

export default MyFutureCard;
