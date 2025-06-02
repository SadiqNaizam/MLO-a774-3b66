import React from 'react';
import LoginCard from '../components/Login/LoginCard';

// Define the type for login credentials, matching LoginCard's onLogin prop
interface LoginCredentials {
  username: string;
  password: string;
}

/**
 * LoginPage
 * 
 * This component renders the main login page for the application.
 * It centers the LoginCard component on the screen against a themed background.
 * It also handles the actions triggered by the LoginCard, such as login attempts
 * and navigation to sign-up (simulated via console logs and alerts for this example).
 */
const LoginPage: React.FC = () => {
  /**
   * Handles the login submission from the LoginCard.
   * @param credentials - The username and password entered by the user.
   */
  const handleLogin = (credentials: LoginCredentials) => {
    // In a production application, this function would typically:
    // 1. Call an authentication API with the credentials.
    // 2. Handle success (e.g., store auth token, redirect to dashboard).
    // 3. Handle errors (e.g., display error message to the user).
    console.log('Login attempt submitted with:', credentials);
    // For demonstration purposes, an alert is shown.
    // In a real app, use a toast notification or update UI state.
    alert(`Login Submitted!\nUsername: ${credentials.username}\nPassword: [PROTECTED]`);
  };

  /**
   * Handles the click event for the 'sign up' link from the LoginCard.
   */
  const handleSignUpClick = () => {
    // In a production application, this function would typically:
    // 1. Navigate to the sign-up page (e.g., using react-router-dom).
    // 2. Or, open a sign-up modal dialog.
    console.log('Sign up link clicked. Navigating to sign up page...');
    // For demonstration purposes, an alert is shown.
    alert('Redirecting to Sign Up page (Not Implemented Yet).');
  };

  return (
    // Overall page layout: Flex container to center content, full screen height, background color from theme.
    <div className="flex justify-center items-center h-screen bg-background">
      <LoginCard 
        onLogin={handleLogin}
        onSignUpClick={handleSignUpClick}
        // className can be used here to pass additional styles to LoginCard if needed, e.g. 'mt-[-50px]'
      />
    </div>
  );
};

export default LoginPage;
