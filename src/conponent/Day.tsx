import React from "react";
import dummy from '../db/data.json'
import { useParams } from 'react-router';
import { NumberLiteralType } from "typescript";
import Word from "./Word";


export default function Day(){
    const day= Number(useParams().day)
    console.log(day)

    let wordlist:({
        id: number;
        day: number;
        eng: string;
        kor: string;
        isDone: boolean;
    } | {
        day: string;
        eng: string;
        kor: string;
        isDone: boolean;
        id: number;
    })[]

    const list = (day:number|undefined)=>{
        if(typeof day === 'undefined'){
            wordlist = dummy.words
        }
        else{
            wordlist = dummy.words.filter(word=>(
                word.day === day
            ))
        }
        return wordlist
    }


    return (
        <>
        <h2>Day{day}</h2>
        <table>
            <tbody>
                {list(day).map(word=>(
                    <Word word={word} key={word.id}/>
                ))}
            </tbody>
        </table>
        </>
    )
}