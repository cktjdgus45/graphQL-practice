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
  width:100vw;
  height:100vh;
`;
const Header = styled.header`
  padding: 4em;
  display : flex;
  flex-direction:column;
  justify-content : center;
  align-items : center;
  background-color:#92B4EC;
`;

const Title = styled.h1`
  font-size: 2.5em;
  text-align: center;
  color: #FFFFFF;
  font-weight:bold;
  margin-bottom:10px;
`;

const Subtitle = styled.h3`
  font-size: 1.5em;
  text-align: center;
  color: #FFFFFF;
  font-weight:light;
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
const Main = styled.main`
  display:flex;
  flex-direction:column;
  align-items:center;
`

function Home() {
  const { loading, error, data } = useQuery(GET_MOVIES);
  return (
    <Container>
      <Header>
        <Title>Apollo 2022</Title>
        <Subtitle>I love GraphQL</Subtitle>
      </Header>
      <Main>
        {error && <p>Error!</p>}
        {loading && <Loading>Loading...</Loading>}
        {!loading && data.movies.map(movie => <Movie key={movie.id} id={movie.id} />)}
      </Main>
    </Container>
  );
}

export default Home;
