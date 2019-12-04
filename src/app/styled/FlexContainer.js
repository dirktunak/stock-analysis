import styled from 'styled-components'

const FlexContainer = styled.div`
    display: flex;
    justify-content: ${props => props.justifyContent};
    flex-direction: ${props => props.flexDirection};
    padding: ${props => props.padding};
    background-color: ${props => props.backgroundColor};
    border-radius: ${props => props.borderRadius};
`

export default FlexContainer
