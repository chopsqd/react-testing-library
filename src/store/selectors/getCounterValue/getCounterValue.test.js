import {getCounterValue} from "./getCounterValue";

describe('getCounterValue selector test', () => {
    test('work with an empty state', () => {
        expect(getCounterValue({})).toBe(0)
    })

    test('work with a filled state', () => {
        expect(getCounterValue({
            counter: {
                value: 100
            }
        })).toBe(100)
    })
})