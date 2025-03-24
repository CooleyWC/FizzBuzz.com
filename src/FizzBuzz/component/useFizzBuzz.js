import {useState} from 'react'
import { fizzBuzz } from '../fizzBuzz.js';

export function useFizzBuzz() {
    
    const [result, setResult] = useState(null)
    const [input, setInput] = useState(null)

    return {

        input,
        setInput,
        result,

        play: ()=>{
            setResult(fizzBuzz(input))  
        }

    };
}