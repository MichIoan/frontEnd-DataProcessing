import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const MoviePage = () => {
    const { mediaId } = useParams();
    const [isPlaying, setIsPlaying] = useState(false);
    const [timeWatched, setTimeWatched] = useState(0);
    const movieLength = 120; // Length of the movie in minutes.

    const handlePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    useEffect(() => {
        let interval = null;
        if (isPlaying) {
            interval = setInterval(() => {
                setTimeWatched(timeWatched => timeWatched + 1);
            }, 60000); // Increase by 1 every minute.
        } else if (!isPlaying && timeWatched !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isPlaying, timeWatched]);

    return (
        <div>
            <h2>Movie</h2>
            <p>Media ID: {mediaId}</p>
            <button onClick={handlePlayPause}>
                {isPlaying ? "Pause" : "Play"}
            </button>
            <p>Time watched: {timeWatched} min / {movieLength} min</p>
        </div>
    );
};

export default MoviePage;