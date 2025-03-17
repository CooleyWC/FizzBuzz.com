import {describe} from "vitest";
import {useFizzBuzz} from "./useFizzBuzz.js";
import {act, renderHook} from "@testing-library/react";


describe('the fizzbuzz hook', () => {
    let subject;

    beforeEach(() => {
        subject = renderHook(useFizzBuzz)
    })

    it('has an input', () => {
        expect(subject.result.current.input).toBeNull()
    })

    it('has a result', () => {
        expect(subject.result.current.result).toBeNull()
    })

    describe('when playing', () => {

        it('updates the input', () => {
            input('4');
            expect(subject.result.current.input).toEqual('4')
        })

        it('displays the result', () => {
            play();
            expect(subject.result.current.result).toEqual('yes')
        })

        function play() {
            act(() => {
                subject.result.current.play()
            })
        }

        function input(input) {
            act(() => {
                subject.result.current.setInput(input)
            })
        }
    })

})

