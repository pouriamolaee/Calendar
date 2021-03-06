import styled from 'styled-components';

export default styled.button`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 1rem;
    border: none;
    width: 7rem;
    padding: 0.5rem;
    background-color: #F2F3F7;
    box-shadow: inset 0 0 6px rgb(0 0 0 / 10%),
    3px 7px 21px -2px rgb(0 0 0 / 33%);
    border-radius: 1.5rem;
    color: #3e3e3e;
    font-size: 0.7rem;
    font-weight: bold;
    &:hover {
        color: white;
        background: linear-gradient(37deg, rgba(227,137,60,1) 74%, rgba(235,155,86,1) 100%);
        span {
            background-color: #3e3d3d;
        }
    }
    &:focus-visible {
        outline: none;
    }
`;
