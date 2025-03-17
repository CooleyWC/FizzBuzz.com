import { describe } from "vitest";
import {useFizzBuzz} from "./useFizzBuzz.js";
import { renderHook, act } from "@testing-library/react";


describe('the fizzbuzz hook',()=>{
    let subject;
    
    beforeEach(()=>{
        subject = renderHook(useFizzBuzz)
    })
    
    it('has an input',()=>{
        expect(subject.result.current.input).toBeNull()
    })

    it('has a result',()=>{
        expect(subject.result.current.result).toBeNull()
    })

    describe('when playing',()=>{

        it('updates the input', ()=>{
            act(()=>{
                subject.result.current.setInput('4')
            })
            expect(subject.result.current.input).toEqual('4')
        })

        it('displays the result', ()=>{
            act(()=>{
                subject.result.current.play()
            })
            expect(subject.result.current.result).toEqual('yes')
        })
    })

})

