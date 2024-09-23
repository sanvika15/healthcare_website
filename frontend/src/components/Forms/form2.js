import React, { useState } from 'react';
import 'survey-core/defaultV2.min.css';
import { Model } from 'survey-core';
import { Survey } from 'survey-react';

const surveyJson = {
  elements: [
    {
      name: "FirstName",
      title: "Enter your first name:",
      type: "text",
      isRequired: true
    },
    {
      name: "LastName",
      title: "Enter your last name:",
      type: "text",
      isRequired: true
    },
    {
      name: "lastMenstrualPeriodDate",
      title: "Last Menstrual Period Date:",
      type: "text",
      inputType: "date"
    },
    {
      name: "weight",
      title: "Weight (kg):",
      type: "text",
      inputType: "number"
    },
    {
      name: "height",
      title: "Height (cm):",
      type: "text",
      inputType: "number"
    },
    {
      name: "bloodPressure",
      title: "Blood Pressure (mmHg):",
      type: "text",
      inputType: "number"
    },
    {
      name: "sugar",
      title: "Sugar (mg/dL):",
      type: "text",
      inputType: "number"
    },
    {
      name: "pulse",
      title: "Pulse (bpm):",
      type: "text",
      inputType: "number"
    },
    {
      name: "hb",
      title: "Hb (g/dL):",
      type: "text",
      inputType: "number"
    },
    {
      name: "nausea",
      title: "Nausea:",
      type: "radiogroup",
      choices: ["Yes", "No"]
    },
    {
      name: "vomiting",
      title: "Vomiting:",
      type: "radiogroup",
      choices: ["Yes", "No"]
    },
    {
      name: "pregnancy",
      title: "Pregnancy:",
      type: "radiogroup",
      choices: ["Yes", "No"]
    },
    {
      name: "srNo",
      title: "SR No:",
      type: "text",
      inputType: "number"
    }
  ]
};

const PatientForm = () => {
  const [visits, setVisits] = useState([]);
  const [resultMessage, setResultMessage] = useState('');

  const survey = new Model(surveyJson);

  // Handle the survey completion
  survey.onComplete.add((result) => {
    fetch('/api/form2', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(result.data)
    })
      .then((response) => response.json())
      .then((data) => {
        setVisits([...visits, result.data]);
        setResultMessage('Visit added successfully!');
      })
      .catch((error) => {
        console.error(error);
        setResultMessage('Error submitting the form. Please try again.');
      });
  });

  return (
    <div className="mx-3 my-3">
      <h2 className="text-xl font-bold">Patient Visit Form</h2>
      <Survey model={survey} />
      {resultMessage && <p className="mt-2 text-green-500">{resultMessage}</p>}
      <h2 className="mt-4 text-xl font-bold">Visits:</h2>
      <ul className="list-disc pl-5">
        {visits.map((visit, index) => (
          <li key={index} className="mt-2">
            <h3 className="font-semibold">Visit {index + 1}</h3>
            <p>First Name: {visit.FirstName}</p>
            <p>Last Name: {visit.LastName}</p>
            <p>Last Menstrual Period Date: {visit.lastMenstrualPeriodDate}</p>
            <p>Weight: {visit.weight} kg</p>
            <p>Height: {visit.height} cm</p>
            <p>Blood Pressure: {visit.bloodPressure} mmHg</p>
            <p>Sugar: {visit.sugar} mg/dL</p>
            <p>Pulse: {visit.pulse} bpm</p>
            <p>Hb: {visit.hb} g/dL</p>
            <p>Nausea: {visit.nausea}</p>
            <p>Vomiting: {visit.vomiting}</p>
            <p>Pregnancy: {visit.pregnancy}</p>
            <p>SR No: {visit.srNo}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PatientForm;
