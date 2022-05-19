import { useParams } from 'react-router-dom';
import {
  useQuery,
  gql
} from "@apollo/client";
import styled from "styled-components";

const GET_MOVIES = gql`
  query getMovie($id: Int!) {
    movie(id: $id) {
      title
      medium_cover_image
      language
      rating
      description_intro
    }
    suggestions(id:$id){
      id
      medium_cover_image
    }
  }
`;

const Container = styled.div`
  height: 100vh;
  background-image: linear-gradient(-45deg, #d754ab, #fd723a);
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
`;

const Column = styled.div`
  margin-left: 10px;
  flex-basis: 45%;
`;

const Title = styled.h1`
  font-size: 65px;
  margin-bottom: 15px;
`;

const Subtitle = styled.h4`
  font-size: 35px;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 28px;
  line-height:1.7rem;
`;

const Poster = styled.div`
  flex-basis: 55%;
  width: 25%;
  height: 60%;
  background-color: transparent;
  overflow:hidden;
  background-image:url(${props => props.bg});
  width:100%;
  height:100%;
  background-size:cover;
  background-position:center center;
`;

function Detail() {
  const { id } = useParams();
  const { loading, data } = useQuery(GET_MOVIES, {
    variables: { id: +id },
  });

  console.log(data)
  return (
    <Container>
      <Column>
        <Title>{loading ? "Loading..." : data.movie.title}</Title>
        <Subtitle>{data?.movie?.language} / {data?.movie?.rating}</Subtitle>
        <Description> {data?.movie?.description_intro}</Description>
      </Column>
      <Poster bg={data?.movie?.medium_cover_image}></Poster>
    </Container>
  );
}

export default Detail;
