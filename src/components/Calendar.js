import React, { useState } from 'react';
import Calendar from 'moedim';
import './calendar.css' ;
const CalendarView = () => {
  const [value, setValue] = useState(new Date())


  const handleDateChange = date => {
    setValue(date);
  };

return (
    <div>
    <div className="outer-div"> 
    <h3>Select Date</h3>
    <Calendar onChange={handleDateChange} value={value} />
  </div>
  </div>
  );

}


export default CalendarView;