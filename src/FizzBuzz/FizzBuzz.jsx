import {useFizzBuzz} from "./useFizzBuzz.js";

export function FizzBuzz() {
    const {input, setInput, result, play} = useFizzBuzz();
    return <>
        <form onSubmit={submit}>
            <input
                value={input || ""}
                onChange={e => setInput(e.target.value)} />
            <input type='submit'>Play</input>
            <div>{result}</div>
        </form>
    </>

    function submit(e) {
        e.preventDefault();
        play();
    }
}