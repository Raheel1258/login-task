import logo from './logo.svg';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import './App.css';
import LoginContainer from './container/login';
import WelcomeScreen from './screens/welcome';




const App = ()=> {
  return (
    <div >

      <Router>
      <Routes>
        <Route path='/' element={<LoginContainer/>}/>
        <Route path='/welcome' element={<WelcomeScreen/>} />
      </Routes>

      
      </Router>
      
    </div>
  );
}

export default App;
