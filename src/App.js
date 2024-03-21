
import './App.css';
import Navbar from './components/Navbar';
import EmployeeForm from './components/EmployeeForm';
import { Routes,Route } from 'react-router-dom';
import EmployeeDashboard from './components/EmployeeDashboard';
import Home from './components/Home';





function App() {
  return (
    <div className="App">
      {/* <Navbar backgroundImage={photo_2} />  */}
      <Navbar/> 
     <Routes>
        <Route path="/" element={<EmployeeDashboard/>}/>   
       <Route path="/form" element={<EmployeeForm/>}/>
       <Route path="/list" element={<Home/>}/>
     </Routes>
    </div>
  );
}

export default App;
