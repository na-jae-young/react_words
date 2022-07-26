import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './conponent/Header';
import DayList from './conponent/DayList';
import Day from './conponent/Day';

import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import EmptyPage from './conponent/EmptyPage';

function App() {
  return (
    <div className='App'>
    <Router>
      <Header/>
      <Routes>
        <Route path={`/`} element={<DayList/>}/>
        <Route path={'/day/:day'} element={<Day/>}/>
        <Route path={'*'} element={<EmptyPage/>}/>

      </Routes>
    </Router>
    </div>

  );
}

export default App;
