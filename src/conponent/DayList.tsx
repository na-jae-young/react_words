import { Link } from 'react-router-dom'
import dummy from '../db/data.json'
import Day from '../conponent/Day';
export default function DayList(){
    return(
        <div>
            <ul className='list_day'>
                {dummy.days.map(day=>(
                    <Link key={day.id} to={`/day/${day.day}`}><li key={day.id}>Day{day.day}</li></Link>))}
            </ul>

        </div>
    )
}