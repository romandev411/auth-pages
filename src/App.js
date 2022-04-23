import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signin from './pages/Signin/Signin';
import Signup from './pages/Signup/Signup';
import FormLayout from './components/FormLayout/FormLayout';

function App () {
  return (
    <Router>
      <FormLayout>
        <Routes>
          <Route path='/' element={<Signin />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/signin' element={<Signin />}></Route>
        </Routes>
      </FormLayout>
    </Router>
  );
}

export default App;
