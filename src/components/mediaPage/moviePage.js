import { useParams } from 'react-router-dom';

const MoviePage = () => {
    const { mediaId } = useParams();

    return (
        <div>
            <h2>Movie</h2>
            <p>Media ID: {mediaId}</p>
        </div>
    );
};

export default MoviePage;
