import './App.css';
import { Routes, Route } from 'react-router-dom';
import Register from './Pages/Register';
import Preview from './Pages/Preview';
import Success from './Pages/Success';
import Tax from './Pages/tax';
import Result from './Pages/result';

function App() {
  return (
    <Routes>
      <Route path='/' exact={true} element={<Register/>}/>
      <Route path='/preview' element={<Preview/>}/>
      <Route path='/success' element={<Success/>}/>
      <Route path='/tax' element={<Tax/>}/>
      <Route path='/result' element={<Result/>}/>
    </Routes>
  );
}

export default App;
