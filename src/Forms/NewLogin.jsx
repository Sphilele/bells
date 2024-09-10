import { useState, useEffect } from 'react';
import './Login.css';
import { MdOutlineEmail } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import { useNavigate } from 'react-router-dom'; // To handle navigation

export default function NewLogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState(""); // For sign-up case
    const [jwtToken, setJwtToken] = useState(""); // To store JWT Token after login/signup

    const [action, setAction] = useState('Sign Up');
    const [fadeClass, setFadeClass] = useState('fade-in');
    const navigate = useNavigate(); // Hook for navigation

    useEffect(() => {
        if (jwtToken) {
            // Redirect to a protected route or dashboard if user is authenticated
            navigate('/');
        }
    }, [jwtToken, navigate]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Determine endpoint based on action
        let endpoint = action === 'Login' ? '/api/login' : '/api/signup';
        let payload = action === 'Login'
            ? { email, password }
            : { name, email, password };

        try {
            const response = await fetch(endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            const data = await response.json();
            if (data.token) {
                setJwtToken(data.token);
                localStorage.setItem('token', data.token); // Store JWT token
                alert("Logged in successfully!");
            } else {
                alert("Error: Invalid login or sign-up attempt.");
            }
        } catch (error) {
            console.error("Error during login/signup:", error);
        }
    };

    const handleActionChange = (newAction) => {
        setFadeClass('fade');
        setTimeout(() => {
            setAction(newAction);
            setFadeClass('fade-in');
        }, 400);
    };

    return (
        <div className={`log-container ${fadeClass}`}>
            <div className="log-header">
                <div className="log-text">{action}</div>
                <div className="underline"></div>
            </div>
            <form onSubmit={handleSubmit}> {/* Wrap inputs in form */}
                <div className="inputs">
                    {action === 'Login' ? null : (
                        <div className="input">
                            <FaRegUser className='log-icon' />
                            <input
                                type='text'
                                placeholder='name'
                                value={name}
                                onChange={(e) => setName(e.target.value)} // Capture name input
                            />
                        </div>
                    )}
                    <div className="input">
                        <MdOutlineEmail className='log-icon' />
                        <input
                            type='email'
                            placeholder='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} // Capture email input
                        />
                    </div>
                    <div className="input">
                        <RiLockPasswordLine className='log-icon' />
                        <input
                            type='password'
                            placeholder='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} // Capture password input
                        />
                    </div>
                </div>
                {action === 'Sign Up' ? null : (
                    <div className="forgot-password">Lost Password? <span>Click here!</span></div>
                )}
                <div className="submit-container">
                    <button
                        type="button"
                        className={action === 'Login' ? 'submit gray' : 'submit'}
                        onClick={() => handleActionChange("Sign Up")}
                    >
                        Sign Up
                    </button>
                    <button
                        type="button"
                        className={action === 'Sign Up' ? 'submit gray' : 'submit'}
                        onClick={() => handleActionChange("Login")}
                    >
                        Login
                    </button>
                </div>
                <button type="submit" className="submit" style={{ width: '100%', marginTop: '20px' }}>
                    {action === 'Login' ? "Login" : "Sign Up"}
                </button>
            </form>
        </div>
    );
}
