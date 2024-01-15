import React, { useState } from 'react';
import './mediaBox.css';
import { useNavigate } from 'react-router-dom';

function SeriesBox({ title, description, seasons, id }) {
    const navigate = useNavigate();
    const [selectedSeason, setSelectedSeason] = useState(1);

    const handleClick = (e) => {
        navigate(`/media/${id}/season/${selectedSeason}`);
    };

    const handleSeasonChange = (e) => {
        setSelectedSeason(e.target.value);
    };

    return (
        <div className="media-box" onClick={handleClick}>
            <h3>{title}</h3>
            <p>{description}</p>
            {seasons && seasons.length > 1 && (
                <div>
                    <label>Select Season:</label>
                    <select value={selectedSeason} onChange={handleSeasonChange}>
                        {seasons.map((season, index) => (
                            <option key={index} value={season}>
                                Season {season}
                            </option>
                        ))}
                    </select>
                </div>
            )}
        </div>
    );
}

export default SeriesBox;
