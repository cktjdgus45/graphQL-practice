import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
    width:100%;
    height:380px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius:17px;
`;
const Poster = styled.div`
    overflow:hidden;
    background-image:url(${props => props.bg});
    width:100%;
    height:100%;
    background-size:cover;
    background-position:center center;
`;

const Movie = ({ id, medium_cover_image, isLiked }) => {
    return (
        <Container>
            <Link to={`/${id}`}>
                <Poster bg={medium_cover_image}></Poster>
            </Link>
            <button>{isLiked ? 'Unlike' : 'Like'}</button>
        </Container>
    )
}

export default Movie;