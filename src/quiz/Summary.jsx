import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';
import QUESTIONS from "../questions.js";
import Image from '../assets/quiz-complete.png';

export default function Summary({ userAnswers }) {
    const skippedAnswers = userAnswers.filter(answer => answer === null);
    const correctAnswers  = userAnswers.filter(
        (answer, index) => answer === QUESTIONS[index].answers[0]
    );

    const skippedAnswersShare = Math.round(
        (skippedAnswers.length / userAnswers.length) * 100
    );

    const correctAnswersShare = Math.round(
        (correctAnswers.length / userAnswers.length) * 100
    );

    const wrongAnswersShare = 100 - skippedAnswersShare - correctAnswersShare;

    const navigate = useNavigate();

    function navigationHandler() {
        navigate('/quiz');
        }

    return (
        <div id="summary">
             <img src={Image} alt="trophy" /> 
            <h2>Quiz Completed</h2>
            <div id="summary-stats">
                <p>
                    <span className="number">{skippedAnswersShare}%</span>
                    <span className="text">skipped</span>
                </p>
                <p>
                    <span className="number">{correctAnswersShare}%</span>
                    <span className="text">answered correctly</span>
                </p>
                <p>
                    <span className="number">{wrongAnswersShare}%</span>
                    <span className="text">answered incorrectly</span>
                </p>
            </div>
            <ol>
                {userAnswers.map((answer, index) => {
                    let cssClass = "user-answer";

                    if (answer ===  null) {
                        cssClass += ' skipped';
                    } else if (answer === QUESTIONS[index].answers[0]) {
                        cssClass += ' correct';
                    } else {
                        cssClass += ' wrong';
                    }

                    return (
                        <li key={index}>
                            <h3>{index + 1}</h3>
                            <p className="question">{QUESTIONS[index].text}</p>
                            <p className={cssClass}>{answer ?? 'Skipped'}</p>
                        </li>
                    );
                })}
            </ol>
            <div className="quiz-footer">
            <Link to="/">
  <button className="back-button" onClick={navigationHandler}>Home</button>
</Link>
                <button className="refresh-button" onClick={() => window.location.reload()}>Refresh</button>
            </div>
        </div>
    );
}

Summary.propTypes = {
    userAnswers: PropTypes.arrayOf(PropTypes.string).isRequired,
};
