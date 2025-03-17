import {useFizzBuzz} from "./useFizzBuzz.js";
import { renderHook } from "@testing-library/react";


describe('the fizzbuzz hook',()=>{
    let subject;
    
    beforeEach(()=>{
        subject = renderHook(useFizzBuzz)
    })
    
    it('has an input',()=>{
        expect(subject.result.current.input).toBeDefined()
    })

    it('has a result',()=>{
        expect(subject.result.current.result).toBeDefined()
    })
})

