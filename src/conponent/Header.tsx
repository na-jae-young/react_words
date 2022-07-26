import React from 'react'
import {Link} from 'react-router-dom'
import DayList from './DayList'


export function Header(){
    return (
        <div className='header'> 
            <h1>
                <Link to={'/'}>Words</Link>
            </h1>
            <div className='menu'>
                <Link to={'#x'} className='link'>WORD ADD</Link>
                <Link to={'#y'} className ='link'>DAY ADD</Link>
            </div>

        </div>
    )
}