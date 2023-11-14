import React, { useEffect, useState } from 'react';

function AvailableTimings() {
  const [timings, setTimings] = useState([]);

  useEffect(() => {
    // Fetch available timings data from the backend when the component mounts
    fetch('http://localhost:1000/api/available-timings')
      .then((response) => response.json())
      .then((data) => {
        setTimings(data);
      })
      .catch((error) => {
        console.error('Error fetching available timings:', error);
      });
  }, []);

  return (
    <div>
      <h2>Available Timings</h2>
      <ul>
        {timings.map((timing, index) => (
          <li key={index}>
            {timing}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AvailableTimings;
