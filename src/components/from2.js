import React, { useState } from 'react';

const PatientForm = () => {
  const [visits, setVisits] = useState([]);
  const [newVisit, setNewVisit] = useState({
    lastMenstrualPeriodDate: '',
    weight: '',
    height: '',
    bloodPressure: '',
    sugar: '',
    pulse: '',
    hb: '',
    nausea: '',
    vomiting: '',
    pregnancy: '',
    srNo: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewVisit({...newVisit, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setVisits([...visits, newVisit]);
    setNewVisit({
      lastMenstrualPeriodDate: '',
      weight: '',
      height: '',
      bloodPressure: '',
      sugar: '',
      pulse: '',
      hb: '',
      nausea: '',
      vomiting: '',
      pregnancy: '',
      srNo: ''
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Patient Visit Form</h2>
      <table>
        <tbody>
          <tr>
            <td>Last Menstrual Period Date:</td>
            <td>
              <input
                type="date"
                name="lastMenstrualPeriodDate"
                value={newVisit.lastMenstrualPeriodDate}
                onChange={handleInputChange}
              />
            </td>
          </tr>
          <tr>
            <td>Weight (kg):</td>
            <td>
              <input
                type="number"
                name="weight"
                value={newVisit.weight}
                onChange={handleInputChange}
              />
            </td>
          </tr>
          <tr>
            <td>Height (cm):</td>
            <td>
              <input
                type="number"
                name="height"
                value={newVisit.height}
                onChange={handleInputChange}
              />
            </td>
          </tr>
          <tr>
            <td>Blood Pressure (mmHg):</td>
            <td>
              <input
                type="number"
                name="bloodPressure"
                value={newVisit.bloodPressure}
                onChange={handleInputChange}
              />
            </td>
          </tr>
          <tr>
            <td>Sugar (mg/dL):</td>
            <td>
              <input
                type="number"
                name="sugar"
                value={newVisit.sugar}
                onChange={handleInputChange}
              />
            </td>
          </tr>
          <tr>
            <td>Pulse (bpm):</td>
            <td>
              <input
                type="number"
                name="pulse"
                value={newVisit.pulse}
                onChange={handleInputChange}
              />
            </td>
          </tr>
          <tr>
            <td>Hb (g/dL):</td>
            <td>
              <input
                type="number"
                name="hb"
                value={newVisit.hb}
                onChange={handleInputChange}
              />
            </td>
          </tr>
          <tr>
            <td>Nausea:</td>
            <td>
              <select name="nausea" value={newVisit.nausea} onChange={handleInputChange}>
                <option value="">Select</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>Vomiting:</td>
            <td>
              <select name="vomiting" value={newVisit.vomiting} onChange={handleInputChange}>
                <option value="">Select</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>Pregnancy:</td>
            <td>
              <select name="pregnancy" value={newVisit.pregnancy} onChange={handleInputChange}>
                <option value="">Select</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>SR No:</td>
            <td>
              <input
                type="number"
                name="srNo"
                value={newVisit.srNo}
                onChange={handleInputChange}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <button type="submit">Add Visit</button>
      <h2>Visits:</h2>
      <ul>
        {visits.map((visit, index) => (
          <li key={index}>
            <h3>Visit {index + 1}</h3>
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
    </form>
  );
};

export default PatientForm;