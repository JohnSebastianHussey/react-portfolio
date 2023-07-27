import styled from 'styled-components';

export const DefaultLink = styled.a`
    color: black;
    text-decoration: none;
    /* Remove the default underline */
    background-image: linear-gradient(black, black);
    /* Create a transparent background image */
    background-repeat: no-repeat;
    /* Prevent the background image from repeating */
    background-position: 0 100%;
    /* Control the position of the line */
    background-size: 100% 1px;
    /* Control the width and height of the line */
`;

export const PageContainer = styled.div`
    position: relative;
    min-height: 100vh;
    @media (max-width: 1200px) {
        padding-left: 1.25rem;
        padding-right: 1.25rem;
    }
    
`;

export const ContentWrapper = styled.div`
    padding-bottom: 3.5rem;
`;


export const AnimatedLink = styled(DefaultLink)`
    &:hover {
        background-image: linear-gradient(#d5d1ff87, #d5d1ff87);
        /* Change the color of the line on hover */
        background-position: 0 100%;
        /* Control the position of the line */
        background-size: 100% 50%;
        /* Control the width and height of the line */
    }
`;

export const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    @media (min-width: 768px) {
        padding: 0 1rem 1rem 1rem;
    }
`

export const CardGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    @media (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }
`

export const DetailsContent = styled.div`
    max-width: 620px;
    margin: 0 auto;
    line-height: 1.6;
`

export const DetailsContentParagraph = styled.div`
    margin-bottom: 1rem;
    text-align: justify;
    text-justify: inter-word;
    font-size: 1.2rem;
    font-weight: 300;
    line-height: 1.6;
    margin-bottom: 1rem;
`

export const DetailsContentImage = styled.img`
    max-width: 100%;
    height: auto;
    display: block;
    margin: 1rem auto;
    border-radius: 5px;
`
