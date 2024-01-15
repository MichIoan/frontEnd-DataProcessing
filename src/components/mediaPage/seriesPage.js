import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';

const SeriesPage = () => {
    const { mediaId } = useParams();
    const [isPlaying, setIsPlaying] = useState(false);
    const [timeWatchedInSeconds, setTimeWatchedInSeconds] = useState(0);
    const [currentEpisode, setCurrentEpisode] = useState(1);
    const totalEpisodes = 10;
    const episodeLengthInSeconds = 60 * 60;
    const timeWatchedRef = useRef(timeWatchedInSeconds);

    // Start of new code (episode selector)

    const handleEpisodeChange = e => {
        setCurrentEpisode(Number(e.target.value));
        setTimeWatchedInSeconds(0);
    };

    const episodeOptions = Array.from({ length: totalEpisodes }, (_, i) =>
        <option key={i + 1} value={i + 1}>Episode {i + 1}</option>
    );

    // End of new code (episode selector)

    const handlePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    useEffect(() => {
        timeWatchedRef.current = timeWatchedInSeconds;
    }, [timeWatchedInSeconds]);

    useEffect(() => {
        let interval = null;
        if (isPlaying) {
            interval = setInterval(() => {
                if (timeWatchedRef.current + 1 >= episodeLengthInSeconds) {
                    setCurrentEpisode(prevEpisode => prevEpisode + 1 > totalEpisodes ? totalEpisodes : prevEpisode + 1);
                    setTimeWatchedInSeconds(0);
                } else {
                    setTimeWatchedInSeconds(timeWatchedRef.current + 1);
                }
            }, 1000);
        } else if (!isPlaying && timeWatchedInSeconds !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isPlaying, timeWatchedInSeconds]);

    const minutes = Math.floor(timeWatchedInSeconds / 60);
    const seconds = timeWatchedInSeconds % 60;

    return (
        <div>
            <h2>Series</h2>
            <p>Media ID: {mediaId}</p>
            <button onClick={handlePlayPause}>
                {isPlaying ? "Pause" : "Play"}
            </button>
            <p>Current Episode: <select onChange={handleEpisodeChange} value={currentEpisode}>{episodeOptions}</select></p>
            <p>
                Time watched this episode: {minutes} min {seconds} sec / {episodeLengthInSeconds / 60} min
                <progress value={timeWatchedInSeconds} max={episodeLengthInSeconds} />
            </p>
        </div>
    );
};

export default SeriesPage;