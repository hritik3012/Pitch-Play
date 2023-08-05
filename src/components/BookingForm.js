import React, { useState } from 'react';
import './CSS/BookingForm.css'

const BookingForm = ({ selectedPitch, selectedDateTime, handleBookingSubmit }) => {
  const [numPlayers, setNumPlayers] = useState('');
  const [duration, setDuration] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation checks here 

    handleBookingSubmit({
      pitch: selectedPitch,
      dateTime: selectedDateTime,
      numPlayers: Number(numPlayers),
      duration: Number(duration),
    });

    // Reset form fields after successful submission
    setNumPlayers('');
    setDuration('');
  };

  return (
    <div>
      <h2>Book {selectedPitch.name}</h2>
      <form onSubmit={handleSubmit}>
        <label>Number of Players:</label>
        <input
          type="number"
          value={numPlayers}
          onChange={(e) => setNumPlayers(e.target.value)}
        />
        <label>Duration (in hours):</label>
        <input
          type="number"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        />
        <button type="submit">Book</button>
      </form>
    </div>
  );
};

export default BookingForm;
