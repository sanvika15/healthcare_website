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

  // Define detailed next steps and precautions for each concern
  const nextSteps = {
    'Confirmation of Pregnancy': (
      <div style={{ textAlign: 'justify' }}>
        <p>1. Schedule an appointment with your healthcare provider for an ultrasound.</p>
        <p>2. Bring any relevant medical history or tests to the appointment.</p>
        <p>3. Consider discussing prenatal vitamins and lifestyle changes.</p>
        <p><strong>Precautions:</strong> Avoid alcohol, smoking, and certain medications until you consult your doctor.</p>
      </div>
    ),
    'Severe Nausea and Vomiting': (
      <div style={{ textAlign: 'justify' }}>
        <p>1. Keep track of symptoms and any triggers.</p>
        <p>2. Consult with your doctor about possible medications.</p>
        <p>3. Try small, frequent meals and stay hydrated.</p>
        <p><strong>Precautions:</strong> If vomiting persists for more than 24 hours, seek medical attention immediately.</p>
      </div>
    ),
    'Bleeding per Vagina': (
      <div style={{ textAlign: 'justify' }}>
        <p>1. Contact your healthcare provider immediately.</p>
        <p>2. Avoid sexual intercourse and heavy lifting until you are evaluated.</p>
        <p><strong>Precautions:</strong> Keep track of the amount and color of the bleeding for your doctor.</p>
      </div>
    ),
    'Pain abdomen': (
      <div style={{ textAlign: 'justify' }}>
        <p>1. Note the type and duration of the pain.</p>
        <p>2. Avoid strenuous activities and consult your doctor.</p>
        <p><strong>Precautions:</strong> Seek medical help if the pain becomes severe or is accompanied by bleeding.</p>
      </div>
    ),
    'Severe Fatigue/ weakness': (
      <div style={{ textAlign: 'justify' }}>
        <p>1. Ensure you are getting adequate rest and nutrition.</p>
        <p>2. Discuss your symptoms with your healthcare provider.</p>
        <p><strong>Precautions:</strong> If fatigue persists or worsens, it may indicate an underlying issue that needs to be addressed.</p>
      </div>
    ),
    'Burning micturition (UTI)': (
      <div style={{ textAlign: 'justify' }}>
        <p>1. Schedule an appointment for a urine test with your healthcare provider.</p>
        <p>2. Drink plenty of water to help flush out bacteria.</p>
        <p><strong>Precautions:</strong> If symptoms worsen or you develop a fever, seek medical attention.</p>
      </div>
    ),
    'Medication Concerns': (
      <div style={{ textAlign: 'justify' }}>
        <p>1. List all medications you are currently taking.</p>
        <p>2. Consult your healthcare provider about the safety of each medication during pregnancy.</p>
        <p><strong>Precautions:</strong> Never stop or start medications without consulting your doctor first.</p>
      </div>
    ),
    'History of Previous Complications': (
      <div style={{ textAlign: 'justify' }}>
        <p>1. Discuss your previous pregnancy complications with your healthcare provider.</p>
        <p>2. Follow any recommended monitoring or preventative measures.</p>
        <p><strong>Precautions:</strong> Stay in close communication with your healthcare team throughout your pregnancy.</p>
      </div>
    ),
    'Preexisting Medical Conditions': (
      <div style={{ textAlign: 'justify' }}>
        <p>1. Schedule a preconception consultation with your healthcare provider.</p>
        <p>2. Monitor your condition closely during pregnancy and adjust treatment as necessary.</p>
        <p><strong>Precautions:</strong> Follow your doctor's advice strictly and report any changes in your condition immediately.</p>
      </div>
    ),
    'Any other': (
      <div style={{ textAlign: 'justify' }}>
        <p>1. Describe your concern in detail.</p>
        <p>2. Discuss your concern with your healthcare provider.</p>
        <p><strong>Precautions:</strong> Follow your doctor's advice and recommendations.</p>
      </div>
    )
  };

  return (
    <div className="mx-3 my-3" style={{ marginLeft: '20px' }}>
      <h2 className="text-xl font-bold">Pregnancy Concerns</h2>
      <select value={concern} onChange={handleConcernChange}>
        {concerns.map((concern) => (
          <option key={concern} value={concern}>
            {concern}
          </option>
        ))}
      </select>
      <div style={{ marginLeft: '20px' , marginTop: '20px'}}>
      {nextSteps[concern]}
      </div>
    </div>
  );
};

export default PregnancyConcerns;