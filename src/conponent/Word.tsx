import React, { useState } from "react";

export default function Word({word}:any){
    const [isShow ,setIsShow] = useState(true)
    const [isDone, setIsDone] = useState<boolean>(word.isDone)
    return(
        <>
            <tr key={word.id} className={isDone ? 'off':''}>
                <td><input type="checkbox" onChange={()=>{setIsDone(!isDone)}}></input></td>
                <td>{word.eng}</td>
                <td>{isShow ?  word.kor : ''}</td>
                <td><button onClick={()=>setIsShow(!isShow)}>{isShow ?  'Hide': 'Show'}</button></td>
                <td><button className="btn_del">Delete</button></td>
            </tr>
       </>
       )
}

/*
npm install -g json-server
json-server --watch ./src/db/data.json  --port 3001


REST API 

Create : POST
Read : GET
Update : PUT
Delete : DELETE
*/