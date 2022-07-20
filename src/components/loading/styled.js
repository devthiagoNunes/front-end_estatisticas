import styled from "styled-components";

export const LoadingCotainer = styled.div`
    width: 85%;
    max-width: 1366px;
    margin: 0 auto;
    padding: 1rem 0;
    transform: translateY(7rem);
`

export const Spiner = styled.div`
    width: 30px;
    height: 30px;
    margin: 0 auto;
    border-radius: 50px;

    border: 2px solid #3B3B3B;
    border-top: 2px solid #007CC1;
    border-left: 2px solid #007CC1;
    border-right: 2px solid #007CC1;

    animation: spiner infinite 1s linear;

@keyframes spiner {
    from {
        transform: rotate(0deg);
    } to {
        transform: rotate(360deg);
    }
}
`