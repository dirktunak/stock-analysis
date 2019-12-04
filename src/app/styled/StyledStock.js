import styled from 'styled-components'

const StyledStock = styled.div`
    display: flex;
    border-style: solid;
    border-width: 2px;
    margin: 4px;
    background-color: ${props => props.color};
`

export default StyledStock
