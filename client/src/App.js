import './App.css';
import {Route,Routes} from 'react-router-dom'
import Nav from "./components/Nav/Nav"
import Login from './components/Login/login';
import Homepage from './components/Homepage/Homepage'
import {useSelector,useDispatch} from 'react-redux'
import {bindActionCreators} from 'redux'
import {actionCreators} from './state/index'

function App() {

  const account = useSelector((state) =>  state)
  const dispatch = useDispatch()
  const {userData,userLogin} = bindActionCreators(actionCreators,dispatch)
  
  return (
    <div className="App">
        <Nav account={account}/>
        <Routes>
          <Route exact path='/'element={<Homepage />} />
          <Route path='/login' element={<Login userdata={userData} userlogin={userLogin} account={account}/>} /> 
          
        </Routes>
        
    </div>
  );
}

export default App;

