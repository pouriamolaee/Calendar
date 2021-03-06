import styled from 'styled-components';

export default styled.div`
    background: rgba(0, 0, 0, 0.5);
    opacity: ${props => props.show ? "1" : "0"};
    visibility: ${props => props.show ? "visible" : "hidden"};
    min-width: 100vw;
    min-height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 50;
    transition: all 0.5s;
`

export const ClickableBackdrop = styled.div`
    min-width: 100vw;
    min-height: 100vh;
    position: fixed;
    z-index: 75;
`