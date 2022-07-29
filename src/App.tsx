
import './App.css';
import { Header } from './conponent/Header';
import DayList from './conponent/DayList';
import Day from './conponent/Day';

import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import EmptyPage from './conponent/EmptyPage';
import CreateWord from './conponent/CreateWord';
import CreateDay from './conponent/CreateDay';
import { constants } from 'buffer';

function App() {
  
  return (
    <div className='App'>
    <Router>
      <Header/>
      <Routes>
        <Route path={`/`} element={<DayList/>}/>
        <Route path={'/day/:day'} element={<Day/>}/>
        <Route path={'/create_word'} element={<CreateWord/>}/>
        <Route path={'/create_day'} element={<CreateDay/>}/>
        <Route path={'*'} element={<EmptyPage/>}/>
      </Routes>
    </Router>
    </div>

  );
}

export default App;
/*
npm install -g json-server
json-server --watch ./src/db/data.json  --port 3001


REST API 

Create : POST
Read : GET
Update : PUT
Delete : DELETE

/days?id=3
*/