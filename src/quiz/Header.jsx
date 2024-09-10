import logoImg from '../assets/quiz-logo.png';
import './Quiz.css';

export default function Header() {
  return (
    <header>
      <img src={logoImg} className='logo-img' alt="Quiz logo" />
      <h1>Morape Quiz</h1>
    </header>
  );
}