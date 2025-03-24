import {useFizzBuzz} from "./useFizzBuzz.js";

export function FizzBuzz() {
    const {input, setInput, result, play} = useFizzBuzz();
    return <>
        <form onSubmit={submit}>
            <input
                value={input || ""}
                onChange={e => setInput(e.target.value)} />
            <label style={{display: 'none'}}>Play</label>
                <input style={{margin: '0 0.5em'}} type='submit' value='Play'/>
            <div style={{margin: '2em auto'}}>{result}</div>
        </form>
    </>

    function submit(e) {
        e.preventDefault();
        play();
    }
}