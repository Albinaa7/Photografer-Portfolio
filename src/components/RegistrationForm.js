import React, { useState, useEffect } from 'react';
import Navbar from './Navbar'; // Импортируем компонент Navbar
import Footer from './Footer'; // Импортируем компонент Footer
import '../App.css';

const RegistrationForm = ({ onRegister, onLogout }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState(null); // Состояние для отображения сообщения

    useEffect(() => {
        let timer;
        if (message) {
            timer = setTimeout(() => {
                setMessage(null);
            }, 2000);
        }
        return () => clearTimeout(timer);
    }, [message]);

    const handleRegister = (event) => {
        event.preventDefault();
        const userData = { username, password };
        onRegister(userData);
        setMessage('Регистрация прошла успешно!');
    };

    const handleLogoutClick = () => {
        onLogout();
        setMessage('Вы успешно вышли с аккаунта!');
    };

    return (
        <div>
            <Navbar /> {/* Вставляем навбар */}
            <div className="registration-form-container">
                <h2>Register</h2>
                {message && <div className="success-message">{message}</div>}
                <form onSubmit={handleRegister}>
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    <button type="submit">Register</button>
                </form>
                {onLogout && <button onClick={handleLogoutClick} style={{ marginTop: '10px' }}>Logout</button>}
            </div>
            <Footer /> {/* Вставляем футер */}
        </div>
    );
};

export default RegistrationForm;
