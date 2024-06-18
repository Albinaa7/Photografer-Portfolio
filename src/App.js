import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Gallery from './pages/Gallery';
import PhotoDetail from './pages/PhotoDetail';
import Contact from './pages/Contact';
import RegistrationForm from './components/RegistrationForm'; // Импортируем компонент RegistrationForm
import Footer from './components/Footer'; // Импортируем компонент Footer
import './App.css';

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);
    const [logoutSuccess, setLogoutSuccess] = useState(false); // Состояние для отображения сообщения о успешном выходе с аккаунта

    const handleLogout = () => {
        setIsLoggedIn(false);
        setUser(null);
        setLogoutSuccess(true);
    };

    const handleRegister = (userData) => {
        setUser(userData);
        setIsLoggedIn(true);
        setLogoutSuccess(false); // Сбрасываем состояние успешного выхода при успешной регистрации
    };

    return (
        <Router>
            <div>
                {/* Показываем сообщение о успешном выходе, если logoutSuccess равно true */}
                {logoutSuccess && <p></p>}
                <div className="main-content">
                    {/* Маршруты */}
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/gallery" element={<Gallery />} />
                        <Route path="/photo/:id" element={<PhotoDetail isLoggedIn={isLoggedIn} user={user} />} />
                        <Route path="/contact" element={<Contact />} />
                        {/* Регистрационная форма */}
                        <Route path="/register" element={<RegistrationForm onRegister={handleRegister} onLogout={handleLogout} />} />
                    </Routes>
                </div>
                {/* Футер, также часть общего макета */}
                <Footer />
            </div>
        </Router>
    );
};

export default App;
