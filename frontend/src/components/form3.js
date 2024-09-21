import React, { useState } from 'react';

const PregnancyConcerns = () => {
  const [concern, setConcern] = useState('');

  const handleConcernChange = (event) => {
    setConcern(event.target.value);
  };

  const concerns = [
    'Confirmation of Pregnancy',
    'Severe Nausea and Vomiting',
    'Bleeding per Vagina',
    'Pain abdomen',
    'Severe Fatigue/ weakness',
    'Burning micturition (UTI)',
    'Medication Concerns',
    'History of Previous Complications',
    'Preexisting Medical Conditions',
    'Any other'
  ];

  return (
    <div className='mx-3 my-3' >
      <h2>Pregnancy Concerns</h2>
      <p>Please select any concerns you have regarding your pregnancy:</p>
      <select value={concern} onChange={handleConcernChange}>
        <option value="">Select a concern</option>
        {concerns.map((concern, index) => (
          <option key={index} value={concern}>
            {concern}
          </option>
        ))}
      </select>
      {concern && (
        <div>
          <h3>You selected: {concern}</h3>
          <p>Next steps:</p>
          {/* Add logic to display next steps based on selected concern */}
        </div>
      )}
    </div>
  );
};

export default PregnancyConcerns;