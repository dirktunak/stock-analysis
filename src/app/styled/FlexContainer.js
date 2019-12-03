import styled from 'styled-components'

const FlexContainer = styled.div`
    display: flex;
    justify-content: ${props => props.justifyContent};
`

export default FlexContainer
