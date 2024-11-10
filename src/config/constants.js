// This file contains all application-wide constants to avoid hardcoding

// Routes for navigation throughout the application
export const ROUTES = {
    INDEX: '/',
    LOGIN: '/login',
    DASHBOARD: '/dashboard'
};

// Authentication modes for the login page
export const AUTH_MODES = {
    SIGN_IN: 'signin',
    SIGN_UP: 'signup'
};

// UI text constants to maintain consistency and enable easy updates
export const UI_TEXT = {
    BUTTONS: {
        LOGIN: 'Log In',
        SIGNUP: 'Sign Up',
        BACK: 'Back',
        SIGNOUT: 'Sign Out'
    },
    HEADINGS: {
        WELCOME: 'Welcome to Our Application',
        DASHBOARD: 'My Dashboard',
        LOGIN: 'Authentication'
    }
};