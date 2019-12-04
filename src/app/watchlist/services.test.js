import { addPlusIfPositive, isNegative, numberColor } from './services'
import { colors } from '../styled/style.constants'

describe('services', () => {
    describe('addPlusIfPositive', () => {
        it('should add a + and % sign to positive numbers', () => {
            const positiveNumber = 1.01
            expect(addPlusIfPositive(positiveNumber)).toEqual(`+${positiveNumber}%`)
        })
        it('should add a + and % sign to 0.00', () => {
            const zero = 0.0
            expect(addPlusIfPositive(zero)).toEqual('+0.00%')
        })
        it('should add a % sign to negative numbers ', () => {
            const negativeNumber = -0.01
            expect(addPlusIfPositive(negativeNumber)).toEqual(`${negativeNumber}%`)
        })
        it('should default to 0', () => {
            expect(addPlusIfPositive(null)).toEqual('+0.00%')
        })
        it('should round up on .005', () => {
            const roundUp = 0.005
            expect(addPlusIfPositive(roundUp)).toEqual('+0.01%')
        })
        it('should round down on .0049', () => {
            const roundDown = 0.0049
            expect(addPlusIfPositive(roundDown)).toEqual('+0.00%')
        })
        it('should round up on -.005 to -0.01', () => {
            const roundUpNegative = -0.005
            expect(addPlusIfPositive(roundUpNegative)).toEqual('-0.01%')
        })
        it('should round down on .0049 to -0.00', () => {
            const roundDownNegative = -0.0049
            expect(addPlusIfPositive(roundDownNegative)).toEqual('-0.00%')
        })
    })
    describe('isNegative', () => {
        it('should return false for positives', () => {
            const positiveNumber = 0.01
            expect(isNegative(positiveNumber)).toBe(false)
        })
        it('should return false for 0', () => {
            const zero = 0.0
            expect(isNegative(zero)).toBe(false)
        })
        it('should return true for negatives', () => {
            const negativeNumber = -0.01
            expect(isNegative(negativeNumber)).toBe(true)
        })
        it('should return false for null and undefined', () => {
            expect(isNegative(null)).toBe(false)
            expect(isNegative(undefined)).toBe(false)
        })
    })
    describe('numberColor', () => {
        it('should return GREEN for null, undefined, 0 and positives', () => {
            expect(numberColor(null)).toBe(colors.GREEN)
            expect(numberColor(undefined)).toBe(colors.GREEN)
            expect(numberColor(0)).toBe(colors.GREEN)
            expect(numberColor(0.01)).toBe(colors.GREEN)
        })
        it('should return RED for negatives', () => {
            expect(numberColor(-0.01)).toBe(colors.RED)
        })
    })
})
