import React, { useState, useCallback } from 'react';
import { cn } from '@/lib/utils';
import { Card } from '@/components/ui/card';

import LoginHeading from './LoginHeading';
import UsernameInput from './UsernameInput';
import PasswordInput from './PasswordInput';
import LoginButton from './LoginButton';
import LoginLink from './LoginLink';

interface LoginCardProps {
  className?: string;
  onLogin?: (data: { username: string; password: string }) => void;
  onSignUpClick?: () => void;
}

const LoginCard: React.FC<LoginCardProps> = ({
  className,
  onLogin,
  onSignUpClick,
}) => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleUsernameChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  }, []);

  const handlePasswordChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }, []);

  const handleSubmit = useCallback(async (event?: React.FormEvent<HTMLFormElement>) => {
    if (event) event.preventDefault();
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Login attempt with:', { username, password });
    if (onLogin) {
      onLogin({ username, password });
    }
    // In a real app, you might want to clear fields or show a success/error message
    // setUsername(''); 
    // setPassword('');
    setIsLoading(false);
  }, [username, password, onLogin]);

  const handleSignUp = useCallback(() => {
    console.log('Sign up link clicked');
    if (onSignUpClick) {
      onSignUpClick();
    }
  }, [onSignUpClick]);

  return (
    <Card
      className={cn(
        'w-full max-w-sm bg-card text-card-foreground rounded-lg shadow-md p-6',
        className
      )}
    >
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <LoginHeading text="Log in" />
        
        <UsernameInput
          value={username}
          onChange={handleUsernameChange}
          placeholder="Username"
        />
        
        <PasswordInput
          value={password}
          onChange={handlePasswordChange}
          placeholder="Password"
        />
        
        <LoginButton
          onClick={handleSubmit} // Button click explicitly calls handleSubmit
          isLoading={isLoading}
          text="Log in"
        />
        
        <div className="text-center pt-2"> {/* Added some top padding for separation */} 
          <LoginLink
            onClick={handleSignUp}
            text="or, sign up"
          />
        </div>
      </form>
    </Card>
  );
};

export default LoginCard;
