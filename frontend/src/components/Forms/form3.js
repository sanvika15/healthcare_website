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

  // Define detailed next steps and precautions for each concern with graphical representation
  const nextSteps = {
    'Confirmation of Pregnancy': (
      <div>
        <img src="/images/ultrasound.png" alt="Ultrasound Appointment" />
        <p>1. Schedule an appointment with your healthcare provider for an ultrasound.</p>
        <img src="/images/medical-history.png" alt="Medical History" />
        <p>2. Bring any relevant medical history or tests to the appointment.</p>
        <img src="/images/prenatal-vitamins.png" alt="Prenatal Vitamins" />
        <p>3. Consider discussing prenatal vitamins and lifestyle changes.</p>
        <p><strong>Precautions:</strong> Avoid alcohol, smoking, and certain medications until you consult your doctor.</p>
      </div>
    ),
    'Severe Nausea and Vomiting': (
      <div>
        <img src="/images/track-symptoms.png" alt="Track Symptoms" />
        <p>1. Keep track of symptoms and any triggers.</p>
        <img src="/images/medication.png" alt="Consult Doctor" />
        <p>2. Consult with your doctor about possible medications.</p>
        <img src="/images/eat-small-meals.png" alt="Small Meals" />
        <p>3. Try small, frequent meals and stay hydrated.</p>
        <p><strong>Precautions:</strong> If vomiting persists for more than 24 hours, seek medical attention immediately.</p>
      </div>
    ),
    'Bleeding per Vagina': (
      <div>
        <img src="/images/contact-doctor.png" alt="Contact Doctor" />
        <p>1. Contact your healthcare provider immediately.</p>
        <img src="/images/avoid-activities.png" alt="Avoid Activities" />
        <p>2. Avoid sexual intercourse and heavy lifting until you are evaluated.</p>
        <p><strong>Precautions:</strong> Keep track of the amount and color of the bleeding for your doctor.</p>
      </div>
    ),
    'Pain abdomen': (
      <div>
        <img src="/images/note-pain.png" alt="Note Pain" />
        <p>1. Note the type and duration of the pain.</p>
        <img src="/images/consult-doctor.png" alt="Consult Doctor" />
        <p>2. Avoid strenuous activities and consult your doctor.</p>
        <p><strong>Precautions:</strong> Seek medical help if the pain becomes severe or is accompanied by bleeding.</p>
      </div>
    ),
    'Severe Fatigue/ weakness': (
      <div>
        <img src="/images/get-rest.png" alt="Get Rest" />
        <p>1. Ensure you are getting adequate rest and nutrition.</p>
        <img src="/images/talk-to-doctor.png" alt="Talk to Doctor" />
        <p>2. Discuss your symptoms with your healthcare provider.</p>
        <p><strong>Precautions:</strong> If fatigue persists or worsens, it may indicate an underlying issue that needs to be addressed.</p>
      </div>
    ),
    'Burning micturition (UTI)': (
      <div>
        <img src="/images/schedule-appointment.png" alt="Schedule Appointment" />
        <p>1. Schedule an appointment for a urine test with your healthcare provider.</p>
        <img src="/images/drink-water.png" alt="Drink Water" />
        <p>2. Drink plenty of water to help flush out bacteria.</p>
        <p><strong>Precautions:</strong> If symptoms worsen or you develop a fever, seek medical attention.</p>
      </div>
    ),
    'Medication Concerns': (
      <div>
        <img src="/images/list-medications.png" alt="List Medications" />
        <p>1. List all medications you are currently taking.</p>
        <img src="/images/consult-doctor.png" alt="Consult Doctor" />
        <p>2. Consult your healthcare provider about the safety of each medication during pregnancy.</p>
        <p><strong>Precautions:</strong> Never stop or start medications without consulting your doctor first.</p>
      </div>
    ),
    'History of Previous Complications': (
      <div>
        <img src="/images/discuss-complications.png" alt="Discuss Complications" />
        <p>1. Discuss your previous pregnancy complications with your healthcare provider.</p>
        <img src="/images/follow-monitoring.png" alt="Follow Monitoring" />
        <p>2. Follow any recommended monitoring or preventative measures.</p>
        <p><strong>Precautions:</strong> Stay in close communication with your healthcare team throughout your pregnancy.</p>
      </div>
    ),
    'Preexisting Medical Conditions': (
      <div>
        <img src="/images/schedule-consultation.png" alt="Schedule Consultation" />
        <p>1. Schedule a preconception consultation with your healthcare provider.</p>
        <img src="/images/monitor-condition.png" alt="Monitor Condition" />
        <p>2. Monitor your condition closely during pregnancy and adjust treatment as necessary.</p>
        <p><strong>Precautions:</strong> Follow your doctor's advice strictly and report any changes in your condition immediately.</p>
      </div>
    ),
    'Any other': (
      <div>
        <img src="/images/discuss-concerns.png" alt="Discuss Concerns" />
        <p>1. Discuss any specific concerns with your healthcare provider.</p>
        <img src="/images/support-groups.png" alt="Support Groups" />
        <p>2. Seek resources and support groups for additional information and guidance.</p>
        <p><strong>Precautions:</strong> Keep a record of any new symptoms or changes and report them to your doctor.</p>
      </div>
    )
  };

  return (
    <div className='mx-3 my-3'>
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
          {nextSteps[concern]}
        </div>
      )}
    </div>
  );
};

export default PregnancyConcerns;
