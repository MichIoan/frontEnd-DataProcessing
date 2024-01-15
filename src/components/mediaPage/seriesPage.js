import { useParams } from 'react-router-dom';

const SeriesPage = () => {
    const { mediaId } = useParams();

    return (
        <div>
            <h2>Series</h2>
            <p>Media ID: {mediaId}</p>
        </div>
    );
};

export default SeriesPage;
