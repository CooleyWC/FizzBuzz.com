import {useState} from 'react'

export function useFizzBuzz() {
    
    const [result, setResult] = useState(null)
    const [input, setInput] = useState(null)

    return {

        input,
        setInput,
        result,

        play: ()=>{
            setResult('yes')
        }

    };
}