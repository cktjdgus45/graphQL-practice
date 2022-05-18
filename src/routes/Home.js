import {
    useQuery,
    gql
} from "@apollo/client";


const GET_MOVIES = gql`
  {
      movies{
          id
          medium_cover_image
      }
  }
`;


function Home() {
    const { loading, error, data } = useQuery(GET_MOVIES);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    console.log(data);
    return (
        <>
            home
        </>
    );
}

export default Home;
