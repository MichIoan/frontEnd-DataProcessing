import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const MoviePage = () => {
    const { mediaId } = useParams();
    const [isPlaying, setIsPlaying] = useState(false);
    const [timeWatchedInSeconds, setTimeWatchedInSeconds] = useState(0);
    const movieLength = 120 * 60; // Length of the movie in seconds.

    const handlePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    useEffect(() => {
        let interval = null;
        if (isPlaying) {
            interval = setInterval(() => {
                setTimeWatchedInSeconds(prevTime => prevTime + 1);
            }, 1000); // Increase by 1 every second.
        } else if (!isPlaying && timeWatchedInSeconds !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isPlaying, timeWatchedInSeconds]);

    const minutes = Math.floor(timeWatchedInSeconds / 60);
    const seconds = timeWatchedInSeconds % 60;

    return (
        <div>
            <h2>Movie</h2>
            <p>Media ID: {mediaId}</p>
            <button onClick={handlePlayPause}>
                {isPlaying ? "Pause" : "Play"}
            </button>
            <p>Time watched: {minutes} min {seconds} sec / {movieLength / 60} min
                <progress value={timeWatchedInSeconds} max={movieLength} />
            </p>
        </div>
    );
};

export default MoviePage;