import {
  useQuery,
  gql
} from "@apollo/client";
import styled from 'styled-components';
import Movie from '../components/Movie';


const GET_MOVIES = gql`
  {
      movies{
          id
          medium_cover_image
      }
  }
`;

const Container = styled.div`
  display : flex;
  flex-direction:column;
  align-items: center;
  width:100%;
`;
const Header = styled.header`
  display : flex;
  width:100%;
  height: 45vh;
  flex-direction:column;
  justify-content : center;
  align-items : center;
  background-image: linear-gradient(-45deg, #d754ab, #fd723a);
  color:#FFFFFF;
`;

const Title = styled.h1`
font-size: 60px;
font-weight: 600;
margin-bottom: 20px;
`;

const Subtitle = styled.h3`
font-size: 18px;
opacity: 0.5;
font-weight: 500;
margin-top: 10px;
`;

const Loading = styled.h1`
  position:absolute;
  bottom:50%;
  left:45%;
  text-align:center;
  font-size:2.5em;
  font-weight:bold;
  color:#82A284;
`

const Movies = styled.div`
  display:grid;
  justify-content:center;
  grid-template-columns:repeat(4,1fr);
  grid-gap:25px;
  width:60%;
  position:relative;
  top:-60px;
  `

function Home() {
  const { loading, error, data } = useQuery(GET_MOVIES);
  return (
    <Container>
      <Header>
        <Title>Apollo 2022</Title>
        <Subtitle>I love GraphQL</Subtitle>
      </Header>
      {error && <p>Error!</p>}
      {loading && <Loading>Loading...</Loading>}
      <Movies>
        {data?.movies?.map(movie => <Movie key={movie.id} id={movie.id} medium_cover_image={movie.medium_cover_image} />)}
      </Movies>
    </Container>
  );
}

export default Home;
