// ParentComponent.js
import React from 'react';
import PatientAppointments from './PatientAppointments';

function ParentComponent() {
  const patientID = '123'; // Replace with your actual patient ID or fetch it

  return (
    <div>
      <PatientAppointments patientID={patientID} />
    </div>
  );
}

export default ParentComponent;