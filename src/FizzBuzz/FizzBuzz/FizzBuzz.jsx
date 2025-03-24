import {useFizzBuzz} from "../useFizzBuzz.js";
import './FizzBuzz.css';


export function FizzBuzz() {
    const {input, setInput, result, play} = useFizzBuzz();
    return <>
        <form onSubmit={submit}>
            <input
                value={input || ""}
                onChange={e => setInput(e.target.value)} 
                />
            <label className='play-label'>Play</label>
                <input className='submit-button' type='submit' value='Play'/>
            <div className='result'>{result}</div>
        </form>
    </>

    function submit(e) {
        e.preventDefault();
        play();
    }
}