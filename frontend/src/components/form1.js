import React, { useState } from 'react';

const PregnancyConfirmation = () => {
  const [basicInfo, setBasicInfo] = useState({
    name: '',
    age: '',
    contact: '',
  });

  const [missedPeriods, setMissedPeriods] = useState(null);
  const [kitResult, setKitResult] = useState(null);
  const [resultMessage, setResultMessage] = useState('');
  const [resultColor, setResultColor] = useState(''); 

  const handleBasicInfoChange = (e) => {
    setBasicInfo({...basicInfo, [e.target.name]: e.target.value });
  };

  const handleMissedPeriodsChange = (e) => {
    setMissedPeriods(e.target.value === 'yes');
  };

  const handleKitResultChange = (e) => {
    setKitResult(e.target.value === 'positive');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!basicInfo.name || !basicInfo.age || !basicInfo.contact) {
      setResultMessage('Please fill in all basic info fields');
      setResultColor('red');
      return;
    }
    if (missedPeriods === null) {
      setResultMessage('Please answer the missed periods question');
      setResultColor('red');
      return;
    }
    if (kitResult === null) {
      setResultMessage('Please take the pregnancy kit test');
      setResultColor('red');
      return;
    }
    if (kitResult) {
      setResultMessage('Congratulations! You are pregnant. Please schedule an ultrasound and begin antenatal care.');
      setResultColor('green');
    } else {
      setResultMessage('Please wait a few days and rest. If symptoms persist, consult a doctor.');
      setResultColor('green');
    }

    fetch('http://localhost:8081/api/form1', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        basicInfo: basicInfo,
        missedPeriods: missedPeriods,
        kitResult: kitResult,
      }),
    })
    
    .then(response => response.json())
    .then(data => {
      console.log(data);
      setResultMessage(data.message);
      setResultColor('green');
    })
    .catch(error => {
      console.error(error);
      setResultMessage('Error submitting form');
      setResultColor('red');
    });
  

  };

  return (
    <div className="container mx-1 my-1 rounded-lg bg-white p-4 shadow-md" >
    <h2 className="text-2xl font-bold mb-4">Pregnancy Confirmation</h2>
    <form onSubmit={handleSubmit}>
      <h3 className="text-lg font-semibold mb-2">Basic Info</h3>
       <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Name:
            <input type="text" name="name" value={basicInfo.name} onChange={handleBasicInfoChange} className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" />
          </label>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Age:
            <input type="number" name="age" value={basicInfo.age} onChange={handleBasicInfoChange} className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" />
          </label>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Contact:
            <input type="text" name="contact" value={basicInfo.contact} onChange={handleBasicInfoChange} className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" />
          </label>
        </div>
        <h3 className="text-lg font-semibold mb-2">Missed Periods</h3>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Have you missed your periods?
            <div className="flex items-center mt-2">
              <input type="radio" name="missedPeriods" value="yes" onChange={handleMissedPeriodsChange} className="form-radio h-5 w-5 text-blue-600" />
              <label className="ml-2">Yes</label>
            </div>
            <div className="flex items-center mt-2">
              <input type="radio" name="missedPeriods" value="no" onChange={handleMissedPeriodsChange} className="form-radio h-5 w-5 text-blue-600" />
              <label className="ml-2">No</label>
            </div>
          </label>
        </div>
        {missedPeriods!== null && (
          <div>
            <h3 className="text-lg font-semibold mb-2">Pregnancy Kit Test</h3>
            <label className="block text-gray-700 font-bold mb-2">
              Take a pregnancy kit test and enter the result:
              <div className="flex items-center mt-2">
                <input type="radio" name="kitResult" value="positive" onChange={handleKitResultChange} className="form-radio h-5 w-5 text-blue-600" />
                <label className="ml-2">Positive</label>
              </div>
              <div className="flex items-center mt-2">
                <input type="radio" name="kitResult" value="negative" onChange={handleKitResultChange} className="form-radio h-5 w-5 text-blue-600" />
                <label className="ml-2">Negative</label>
              </div>
            </label>
          </div>
        )}
      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Submit
        </button>
        {resultMessage && (
          <div
            style={{
              backgroundColor: resultColor,
              padding: 10,
              border: '1px solid',
              borderRadius: 5,
              color: '#fff',
            }}
          >
            {resultMessage}
          </div>
        )}
      </form>
    </div>
  );

};
const Form1 = () => {
  return <PregnancyConfirmation />;
};

export default Form1;