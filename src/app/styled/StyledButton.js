import styled from 'styled-components'

import { colors } from './style.constants'

const StyledButton = styled.button`
    font-size: 0.5em;
    padding: 0.25em 1em;
    border-radius: 3px;
    background-color: ${props =>
        (props.backgroundColor ? props.backgroundColor : colors.DARK_MODE_BG)};
    color: ${props => (props.color ? props.color : colors.DARK_MODE_FG_TEXT)};
`

export default StyledButton
