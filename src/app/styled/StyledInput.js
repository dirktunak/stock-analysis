import styled from 'styled-components'

import { colors } from './style.constants'

const StyledInput = styled.input`
    padding: ${props => (props.padding ? props.padding : '12px 15px')};
    margin: ${props => (props.margin ? props.margin : '8px')};
    font-size: ${props => (props.fontSize ? props.fontSize : '0.5em')};
    border: none;
    border-radius 3px;
    background-color: ${colors.DARK_MODE_BG};
    color: ${colors.DARK_MODE_FG_TEXT};
`

export default StyledInput
