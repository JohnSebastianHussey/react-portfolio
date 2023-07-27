import styled from 'styled-components';
import { AnimatedLink } from '../../Global.styled';

export const Project = styled.div`
    text-align: center;
`;

export const Card = styled.a`
    position: relative;
    display: block;
    overflow: hidden;
    text-decoration: none;
    border-radius: 5px;
`;

export const CardTitleContainer = styled.div`
    padding: 0.5rem 0;
    text-align: left;
`;

export const CardTitle = styled.div`
    font-size: 1.2rem;
    margin: 0;
    text-align: left;
    display: inline;
    font-weight: 500;
`;

export const CardImageContainer = styled.div`
    position: relative;
    padding-bottom: 75%;
    overflow: hidden;
    background-color: #f0f0f0;
`;

export const CardImage = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.2s;
    border-radius: 5px;
    &:hover {
        transform: scale(1.025);
    }
`;

export const CardLink = styled(AnimatedLink)`
    font-family: var(--title-font), sans-serif;
`;
