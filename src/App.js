
import './App.css';
import SignUp from './component/SignUp';
import Login from './component/Login';
import { Route, Routes, Navigate } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup"  element={<SignUp/>}/>
        <Route path="/" element={<Navigate to="/signup" />}/>
        
      </Routes>
    </div>
  );
}

export default App;
