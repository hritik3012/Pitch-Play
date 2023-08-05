import React, { useEffect,useState } from 'react';
import PropTypes from 'prop-types';
import './selectPitch.css'; // Import your CSS file for styling
import axios from 'axios';
const Card = () => {
    const [pitch, setpitch]=useState([]);

    const getData = async () => {
        try {
          const response = await axios.get("http://api.internship.appointy.com:8000/v1/resources", {
            headers: {
              Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOiIyMDIzLTA4LTEwVDAwOjAwOjAwWiIsInVzZXJfaWQiOjJ9.sDSCMdHtNbEM8p6BHOzAGifb2B7UNFQy0q5dY6xypyw",
            },
          });
          console.log(response);
          if (response) {
            
            setpitch(response.data);
          }
        } catch (error) {
            console.log(error);
        }
      };
    
      useEffect(() => {
        getData();
      }, []);


  return (
    <div>
        <h3>SELECT APPOINTMENT TYPE</h3>
        {pitch.map((pi) => (
         <a href="/Calendar" > <div className="card"key={pi.id}>

        <h6 className="card-title">{pi.name}</h6>
        

        </div></a>
        ))}
        
        
    
    </div>
  );
}


export default Card;