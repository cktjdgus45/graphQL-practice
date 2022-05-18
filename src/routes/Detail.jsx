import { useParams } from 'react-router-dom';
import {
    useQuery,
    gql
} from "@apollo/client";

const GET_MOVIES = gql`
  query getMovie($id: Int!) {
    movie(id: $id) {
      id
      title
      medium_cover_image
      description_intro
    }
  }
`;
function Detail() {
    const { id } = useParams();
    const { loading, error, data } = useQuery(GET_MOVIES, {
        variables: { id: +id },
    });
    return (
        <>
            {error && <p>Error!</p>}
            {loading && 'loading...'}
            {!loading && <h1>{data.movie.title}</h1>}
        </>
    );
}

export default Detail;
