import {useState} from 'react'

export function useFizzBuzz() {
    
    const [result, setResult] = useState(null)

    return {

        input: null,
        result: result,

        play: ()=>{
            setResult('yes')
        }

    };
}