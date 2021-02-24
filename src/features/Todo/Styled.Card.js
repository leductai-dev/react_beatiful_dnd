import styled from 'styled-components'

export const Card = styled.div(props=>({
    'margin-bottom': '10px',
    'background-color': `${props.isDragging ? 'black': 'blue'}`,
    'border-radius': '15px'
    }));

export const Link =styled.a`
    padding: 5px;
    
`