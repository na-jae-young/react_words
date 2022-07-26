import  { Link } from 'react-router-dom'
import dummy from '../db/data.json'
import Day from '../conponent/Day';
import { JSXElementConstructor, Key, ReactElement, ReactFragment, ReactPortal, useEffect, useState } from 'react'
import useFetch from '../hooks/useFetch';
export default function DayList(){

    type DAY=
        {
            id: number;
            day: number;
        }
    const days :DAY[] = useFetch(`http://localhost:3001/days`)

    return(
        <div>
            <ul className='list_day'>
                {days.map(day => (
                    <Link key={day.id} to={`/day/${day.day}`}><li key={day.id}>Day{day.day}</li></Link>))}
            </ul>

        </div>
    )
}