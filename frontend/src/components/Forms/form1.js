import React from 'react';
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

  // Handle the survey completion
  survey.onComplete.add((result) => {
    console.log("Survey results: ", result.data);
    
    const { name, age, contact, missedPeriods, kitResult } = result.data;

    let resultMessage;
    let resultColor;

    if (kitResult === "positive") {
      resultMessage = 'Congratulations! You are pregnant. Please schedule an ultrasound and begin antenatal care.';
      resultColor = 'green';
    } else {
      resultMessage = 'Please wait a few days and rest. If symptoms persist, consult a doctor.';
      resultColor = 'orange';
    }

    // Handle the API submission
    fetch('http://localhost:8081/api/form1', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, age, contact, missedPeriods, kitResult }),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        resultMessage = data.message;
        resultColor = 'green';
      })
      .catch(error => {
        console.error(error);
        resultMessage = 'Error submitting form';
        resultColor = 'red';
      });

    // Display result message (you can use state here to show messages)
    alert(resultMessage); // Simple alert for demonstration
  });

  return (
    <div className="container mx-1 my-1 rounded-lg bg-white p-4 shadow-md">
      <h2 className="text-2xl font-bold mb-4">Pregnancy Confirmation</h2>
      <Survey model={survey} />
    </div>
  );
};

const Form1 = () => {
  return <PregnancyConfirmation />;
};

export default Form1;
