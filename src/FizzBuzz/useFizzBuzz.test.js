import {useFizzBuzz} from "./useFizzBuzz.js";
import { renderHook } from "@testing-library/react";


describe('the fizzbuzz hook',()=>{
    it('exists',()=>{
        expect(useFizzBuzz()).toBeDefined()
    })

    it('has an input',()=>{
        const subject = renderHook(useFizzBuzz)
        expect(subject.result.current.input).toBeDefined()
    })

    it('has a result',()=>{
        const subject = renderHook(useFizzBuzz)
        expect(subject.result.current.result).toBeDefined()
    })
})