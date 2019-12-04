import { colors } from '../../common/constants'

export const isNegative = number => {
    return number < 0
}

export const addPlusIfPositive = number => {
    const nonNullnumber = number || 0.0
    const twoDecimals = nonNullnumber.toFixed(2)
    if (isNegative(nonNullnumber)) {
        return `${twoDecimals}%`
    }
    return `+${twoDecimals}%`
}

export const numberColor = number => {
    const nonNullnumber = number || 0.0
    if (isNegative(nonNullnumber)) {
        return colors.RED
    }
    return colors.GREEN
}
