import React from 'react';
import './CSS/Confirmation.css';

const ConfirmationPage = ({ bookingConfirmation }) => {
  return (
    <div>
      <h2>Booking Confirmation</h2>
      <p>Pitch: {bookingConfirmation.pitchName}</p>
      <p>Date and Time: {bookingConfirmation.dateTime}</p>
      <p>Number of Players: {bookingConfirmation.numPlayers}</p>
      <p>Duration: {bookingConfirmation.duration} hours</p>
      <p>Confirmation ID: {bookingConfirmation.confirmationId}</p>
      {/* You can add additional information or a thank you message here */}
    </div>
  );
};

export default ConfirmationPage;
