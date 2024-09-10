import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export default function QuestionTimer({ timeout, onTimeout, mode }) {
    const [remainingTime, setRemainingTime] = useState(timeout);

    useEffect(() => {
        const timer = setTimeout(onTimeout, timeout);

        return () => {
            clearTimeout(timer);
        };
    }, [timeout, onTimeout]);

    useEffect(() => {
        const interval = setInterval(() => {
            setRemainingTime(prevRemainingTime => prevRemainingTime - 100);
        }, 100);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <progress 
            id="question-time" 
            max={timeout} 
            value={remainingTime} 
            className={mode} 
        />
    );
}

QuestionTimer.propTypes = {
    timeout: PropTypes.number.isRequired,
    onTimeout: PropTypes.func.isRequired,
    mode: PropTypes.string,
};
