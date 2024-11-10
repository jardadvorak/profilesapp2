// External landing page accessible to all users
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES, AUTH_MODES, UI_TEXT } from '../config/constants';
import Button from '../components/Button';

const Index = () => {
    // Hook for programmatic navigation
    const navigate = useNavigate();

    // Handler for login button - navigates to login page in sign-in mode
    const handleLogin = () => {
        navigate(ROUTES.LOGIN, { state: { mode: AUTH_MODES.SIGN_IN } });
    };

    // Handler for signup button - navigates to login page in sign-up mode
    const handleSignup = () => {
        navigate(ROUTES.LOGIN, { state: { mode: AUTH_MODES.SIGN_UP } });
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-3xl mb-8">{UI_TEXT.HEADINGS.WELCOME}</h1>
            <div className="space-x-4">
                <Button onClick={handleLogin}>{UI_TEXT.BUTTONS.LOGIN}</Button>
                <Button onClick={handleSignup}>{UI_TEXT.BUTTONS.SIGNUP}</Button>
            </div>
        </div>
    );
};

export default Index;