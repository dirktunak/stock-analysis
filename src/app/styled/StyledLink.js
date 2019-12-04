import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { colors } from './style.constants'

const StyledLink = styled(Link)`
    display: flex;
    text-decoration: none;
    color: ${colors.WHITE};
`

export default StyledLink
