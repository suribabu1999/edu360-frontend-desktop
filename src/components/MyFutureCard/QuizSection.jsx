import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './FutureCard.css'

function QuizSection() {
  const [data, setData] = useState(null)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [timeLeft, setTimeLeft] = useState(300)
  const [selectedOption, setSelectedOption] = useState(null)
  const [activeSection, setActiveSection] = useState('CognitiveSection')
  const [showWarningPopup, setShowWarningPopup] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('../public/questions.json')
        setData(response.data)
      } catch (error) {
        console.error('Error fetching the quiz data:', error)
      }
    }
    fetchData()
  }, [])

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1)
      }, 1000)
      return () => clearTimeout(timer)
    } else {
      handleNextQuestion()
    }
  }, [timeLeft])

  useEffect(() => {
    if (data) {
      const newTime =
        parseInt(data[activeSection][currentQuestionIndex].timer) / 1000
      setTimeLeft(newTime)
    }
  }, [currentQuestionIndex, activeSection, data])
  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value)
  }

  const handleNextQuestion = () => {
    if (!selectedOption) {
      setShowWarningPopup(true)
      return
    }
    if (currentQuestionIndex < data[activeSection].length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
      setSelectedOption(null)
    }
  }

  const closeWarningPopup = () => {
    setShowWarningPopup(false)
  }

  return (
    <div className="test-content">
      <div className="test-header">
        <h2 className="text-black text-xl mb-4">
          My Future - {activeSection.replace('Section', ' Section')}
        </h2>
        <div className="tabs-container">
          <button
            className={`tab-button ${
              activeSection === 'CognitiveSection' ? 'active' : ''
            }`}
            onClick={() => {
              setActiveSection('CognitiveSection')
              setCurrentQuestionIndex(0)
            }}
          >
            Cognitive Section
          </button>
          <button
            className={`tab-button ${
              activeSection === 'CoreSection' ? 'active' : ''
            }`}
            onClick={() => {
              setActiveSection('CoreSection')
              setCurrentQuestionIndex(0)
            }}
          >
            Core Section
          </button>
          <button
            className={`tab-button ${
              activeSection === 'EmotionalSection' ? 'active' : ''
            }`}
            onClick={() => {
              setActiveSection('EmotionalSection')
              setCurrentQuestionIndex(0)
            }}
          >
            Emotional Section
          </button>
        </div>
      </div>
      {data && (
        <div className="question-container">
          <h3>{data[activeSection][currentQuestionIndex].question}</h3>
          <ul className="answers-list">
            {data[activeSection][currentQuestionIndex].options.map(
              (option, index) => (
                <li key={index}>
                  <input
                    type={data[activeSection][currentQuestionIndex].type}
                    id={`option-${index}`}
                    name="options"
                    value={option}
                    checked={selectedOption === option}
                    onChange={handleOptionChange}
                  />
                  <label htmlFor={`option-${index}`}>{option}</label>
                </li>
              ),
            )}
          </ul>
        </div>
      )}
      <div className="test-footer">
        <div className="countdown-timer">
          <div className="timer-circle">
            {Math.floor(timeLeft / 60)}:{('0' + (timeLeft % 60)).slice(-2)}
          </div>
        </div>
        <button
          type="button"
          className="next-button"
          onClick={handleNextQuestion}
        >
          Next
        </button>
      </div>

      {showWarningPopup && (
        <div className="warning">
          <div className="popup-c">
            <h3 className="popup-title">Warning</h3>
            <p>Please select an option before proceeding.</p>
            <div className="popup-btn">
              <button className="popup-cls-btn" onClick={closeWarningPopup}>
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default QuizSection
