import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';

const SeriesPage = () => {
    const { mediaId } = useParams();
    const [isPlaying, setIsPlaying] = useState(false);
    const [timeWatched, setTimeWatched] = useState(0);
    const [currentEpisode, setCurrentEpisode] = useState(1);
    const totalEpisodes = 10; // Total episodes in the series.
    const episodeLength = 60; // Length of the episode in minutes.
    const timeWatchedRef = useRef(timeWatched); // Add a ref

    const handlePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    useEffect(() => {
        timeWatchedRef.current = timeWatched; // Keep the ref current
    }, [timeWatched]);

    useEffect(() => {
        let interval = null;
        if (isPlaying) {
            interval = setInterval(() => {
                if (timeWatchedRef.current + 1 >= episodeLength) {
                    setCurrentEpisode(prevEpisode => prevEpisode + 1 > totalEpisodes ? totalEpisodes : prevEpisode + 1);
                    setTimeWatched(0);
                } else {
                    setTimeWatched(timeWatchedRef.current + 1);
                }
            }, 60000); // Increase by 1 every minute.
        } else if (!isPlaying && timeWatched !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isPlaying, timeWatched]);

    return (
        <div>
            <h2>Series</h2>
            <p>Media ID: {mediaId}</p>
            <button onClick={handlePlayPause}>
                {isPlaying ? "Pause" : "Play"}
            </button>
            <p>Current Episode: {currentEpisode} / {totalEpisodes}</p>
            <p>Time watched this episode: {timeWatched} min / {episodeLength} min</p>
        </div>
    );
};

export default SeriesPage;