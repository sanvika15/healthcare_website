import React, { useState } from 'react';
import 'survey-core/defaultV2.min.css';
import { Model } from 'survey-core';
import { Survey } from 'survey-react';

const surveyJson = {
  elements: [
    {
      name: "name",
      title: "Enter your name:",
      type: "text",
      isRequired: true,
    },
    {
      name: "age",
      title: "Enter your age:",
      type: "text",
      isRequired: true,
    },
    {
      name: "contact",
      title: "Enter your contact:",
      type: "text",
      isRequired: true,
    },
    {
      name: "missedPeriods",
      title: "Have you missed your periods?",
      type: "radiogroup",
      choices: [
        { value: "yes", text: "Yes" },
        { value: "no", text: "No" }
      ],
      isRequired: true,
    },
    {
      name: "kitResult",
      title: "Pregnancy Kit Test Result:",
      type: "radiogroup",
      choices: [
        { value: "positive", text: "Positive" },
        { value: "negative", text: "Negative" }
      ],
      isRequired: true,
    }
  ]
};

const PregnancyConfirmation = () => {
  const survey = new Model(surveyJson);
  const [resultMessage, setResultMessage] = useState('');
  const [resultColor, setResultColor] = useState('');
  const [hasError, setHasError] = useState(false);
  const [showResult, setShowResult] = useState(false);

  // Handle the survey completion
  survey.onComplete.add((result) => {
    const { name, age, contact, missedPeriods, kitResult } = result.data;

    if (kitResult === "positive") {
      setResultMessage('Congratulations! You are pregnant. Please schedule an ultrasound and begin antenatal care.');
      setResultColor('green');
    } else {
      setResultMessage('Please wait a few days and rest. If symptoms persist, consult a doctor.');
      setResultColor('orange');
    }

    // Handle the API submission
    fetch('http://localhost:8081/api/form1', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, age, contact, missedPeriods, kitResult }),
    })
      .then(response => response.json())
      .then(data => {
        setResultMessage(data.message);
        setResultColor('green');
        setShowResult(true);
        setTimeout(() => {
          setShowResult(false);
        }, 5000); // show the result for 5 seconds
      })
      .catch(error => {
        setHasError(true);
        setResultMessage('Error submitting form');
        setResultColor('red');
        setShowResult(true);
        setTimeout(() => {
          setShowResult(false);
        }, 5000); // show the result for 5 seconds
      });
  });

  return (
    <>
    <div className="mx-3 my-3">
    <h2 className="text-xl font-bold">Pregnancy Confirmation</h2>
      <Survey model={survey} />
      {showResult && (
        <div style={{ color: resultColor, fontSize: '24px', fontWeight: 'bold' }}>
          {hasError ? 'Error submitting form' : resultMessage}
        </div>
      )}
      
      <div style={{ height: '200px' }} /> 
      </div>

    <footer style={{
      backgroundColor: '#4CAF50',
      color: '#ffffff',
      textAlign: 'center',
      padding: '.5rem 0',
    }}>
      <p>&copy; 2024 PregnancyPal. All rights reserved.</p>
      <p>Contact us: info@pregnancypal.com | +123-456-7890</p>
    </footer>
    </>
  );
};

const Form1 = () => {
  return <PregnancyConfirmation />;
};

export default Form1;