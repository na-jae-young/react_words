import React from "react";
import { Link } from "react-router-dom";

export default function EmptyPage(){

    return(
        <div>
        <h2>EmptyPage</h2>
        <Link to={`/`}><button>HOME</button></Link>
        </div>
    )
}