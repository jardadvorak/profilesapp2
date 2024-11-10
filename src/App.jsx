// Main application component with routing configuration
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Authenticator } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import { ROUTES } from './config/constants';
import Index from './pages/Index';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import outputs from '../amplify_outputs.json';

// Configure Amplify with your AWS settings
Amplify.configure(outputs);

// PrivateRoute component to protect authenticated routes
const PrivateRoute = ({ children }) => {
    const { user } = useAuthenticator((context) => [context.user]);
    
    // Redirect to login if not authenticated
    return user ? children : <Navigate to={ROUTES.LOGIN} />;
};

const App = () => {
    return (
        <BrowserRouter>
            <Authenticator.Provider>
                <Routes>
                    {/* Public routes */}
                    <Route path={ROUTES.INDEX} element={<Index />} />
                    <Route path={ROUTES.LOGIN} element={<Login />} />
                    
                    {/* Protected routes */}
                    <Route 
                        path={ROUTES.DASHBOARD} 
                        element={
                            <PrivateRoute>
                                <Dashboard />
                            </PrivateRoute>
                        } 
                    />
                </Routes>
            </Authenticator.Provider>
        </BrowserRouter>
    );
};

export default App;