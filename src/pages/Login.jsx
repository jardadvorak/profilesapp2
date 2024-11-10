// Authentication page with AWS Amplify authentication
import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Authenticator } from '@aws-amplify/ui-react';
import { ROUTES, UI_TEXT } from '../config/constants';
import Button from '../components/Button';

const Login = () => {
    // Hooks for navigation and accessing route state
    const navigate = useNavigate();
    const location = useLocation();

    // Effect to set initial auth mode based on navigation state
    useEffect(() => {
        const authMode = location.state?.mode || 'signin';
        // You would implement this based on Amplify's API
        // setAuthMode(authMode);
    }, [location]);

    // Handler for back button - returns to landing page
    const handleBack = () => {
        navigate(ROUTES.INDEX);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <Button 
                onClick={handleBack}
                className="absolute top-4 left-4"
            >
                {UI_TEXT.BUTTONS.BACK}
            </Button>
            <h1 className="text-3xl mb-8">{UI_TEXT.HEADINGS.LOGIN}</h1>
            <Authenticator>
                {({ signOut }) => {
                    // Redirect to dashboard on successful authentication
                    navigate(ROUTES.DASHBOARD);
                    return null;
                }}
            </Authenticator>
        </div>
    );
};

export default Login;