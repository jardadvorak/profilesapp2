// Internal dashboard page for authenticated users
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthenticator } from '@aws-amplify/ui-react';
import { generateClient } from 'aws-amplify/data';
import { ROUTES, UI_TEXT } from '../config/constants';
import Button from '../components/Button';

const Dashboard = () => {
    // State for storing user profile data
    const [userProfiles, setUserProfiles] = useState([]);
    
    // Hooks for authentication and navigation
    const { signOut, user } = useAuthenticator((context) => [context.user]);
    const navigate = useNavigate();

    // Initialize Amplify client for data operations
    const client = generateClient({
        authMode: 'userPool',
    });

    // Effect to fetch user profile data on component mount
    useEffect(() => {
        fetchUserProfile();
    }, []);

    // Function to fetch user profile data from Amplify
    async function fetchUserProfile() {
        try {
            const { data: profiles } = await client.models.UserProfile.list();
            setUserProfiles(profiles);
        } catch (error) {
            console.error('Error fetching user profiles:', error);
        }
    }

    // Handler for sign out - signs out and redirects to landing page
    const handleSignOut = async () => {
        await signOut();
        navigate(ROUTES.INDEX);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-3xl mb-8">{UI_TEXT.HEADINGS.DASHBOARD}</h1>
            <div className="grid gap-4 mb-8">
                {userProfiles.map((profile) => (
                    <div 
                        key={profile.id || profile.email}
                        className="border p-4 rounded-lg"
                    >
                        <h3 className="text-xl">{profile.email}</h3>
                    </div>
                ))}
            </div>
            <Button onClick={handleSignOut}>{UI_TEXT.BUTTONS.SIGNOUT}</Button>
        </div>
    );
};

export default Dashboard;