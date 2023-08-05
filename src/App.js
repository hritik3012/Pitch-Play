
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
// import CardLayout from './components/selectPitch';
import CalendarView from './components/Calendar';
import Card from './components/selectPitch';
function App() {
  return (
    
    <BrowserRouter>
    <Routes>
        <Route
        path="/calendar"
        element={
          <CalendarView/>
        }/>
        <Route
        path="/"
        element={
          <div className="card-container">
      <Card  />
      
    </div>
        }/>
        </Routes>
        </BrowserRouter>
     
     
    
  );
}

export default App;
