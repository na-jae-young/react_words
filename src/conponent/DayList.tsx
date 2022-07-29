import  { Link } from 'react-router-dom'
//import dummy from '../db/data.json'


import useFetch from '../hooks/useFetch';

export  interface DAY{
    id:number;
    day:number;
}


export default function DayList(){
    const days : DAY[] = useFetch(`http://localhost:3001/days`)

    if(days.length === 0 ){
        return(<span>Loading....</span>)
    }

    return(
        <div>
            <ul className='list_day'>
                {days.map(day => (
                    <Link key={day.id} to={`/day/${day.day}`}><li key={day.id}>Day{day.day}</li></Link>))}
            </ul>

        </div>
    )
}

