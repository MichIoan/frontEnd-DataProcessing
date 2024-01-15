import React from 'react';
import './mediaBox.css';
import { useNavigate } from 'react-router-dom';

function MediaBox({ title, description, id, season }) {

    const navigate = useNavigate();

    const handleClick = (e) => {
        if (season === 'null') {
            navigate(`/media/${id}`);
        } else {
            navigate(`/media/${id}/season`);
        }
    }

    return (
        <div className="media-box" onClick={handleClick}>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}

export default MediaBox;