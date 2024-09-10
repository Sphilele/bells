import './Video.css';
import v1 from '../assets/v1.mp4';

export default function Video() {
    return (
        <div className="video-container">
            <video autoPlay muted loop className="bg-video">
                <source src={v1} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
           
            <div className="cards-container">
                <div className="card">
                    <h2>Marape Michael Morapeli </h2>
                    <p> From the moment I met you, my life changed in ways I never imagined. Today, as we stand on the threshold of our new life together, I want you to know how deeply I cherish you. Your kindness, strength, and unwavering love have been my anchor, and I am beyond blessed to call you my wife.

                        </p>
                </div>
                <div className="card">
                    <h2>Zakithi Zizile Luvuno</h2>
                    <p> My heart is overflowing with love and gratitude. You have been my rock, my confidant, and my greatest joy. With you, I have found a love that is kind, patient, and true.
Every moment with you has been a blessing, and I am so excited to begin this new chapter as your wife.

                    </p>
                </div>
            </div>
        </div>
    )
}
