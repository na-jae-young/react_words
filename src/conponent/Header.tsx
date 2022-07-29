
import {Link} from 'react-router-dom'



export function Header(){
    return (
        <div className='header'> 
            <h1>
                <Link to={'/'}>Words</Link>
            </h1>
            <div className='menu'>
                <Link to={'/create_word'} className='link'>WORD ADD</Link>
                <Link to={'create_day'} className ='link'>DAY ADD</Link>
            </div>

        </div>
    )
}